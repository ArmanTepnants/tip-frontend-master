<template>
  <v-dialog
    v-model="computedConfirmationDialog"
    :max-width="'500px'"
  >
    <v-card
      elevation="0"
      :loading="loading"
    >
      <v-form
        ref="codeForm"
        v-model="validCode"
        @submit.prevent="handleCodeSubmit"
        lazy-validation
        class="dialog-form"
      >
        <v-toolbar>
          <v-toolbar-title>{{ $t('phone_number_verification') }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              icon
              @click="closeConfirmationDialog"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <div class="content-block-dialog">
          <div class="confirmation-subtitle-1 pt-5">{{ $t('confirmation_number_subtitle_1_1') }} {{ `${phoneNumber}.` }} {{ $t('confirmation_number_subtitle_1_2') }}</div>

          <div class="confirmation-subtitle-2 pt-3">
            {{ $t('confirmation_number_subtitle_2_1') }} {{ `${smsLifeTime} seconds,` }}
            <a class="resend-link">
              {{ $t('confirmation_number_subtitle_2_2') }}
            </a>
          </div>

          <div class="pt-8 actions">
            <v-card-text style="padding: 8px 0 !important;">
              <div class="inputs">
                <v-text-field
                  id="code"
                  v-model="code"
                  :rules="codeRules"
                  :label="$t('verification_code')"
                  v-mask="'####'"
                  outlined
                ></v-text-field>

                <small v-if="smsSendPause > 0">{{ $t('repeated_sms_can_be_sent_in') }} {{ smsSendPause }} {{ $t('seconds') }}</small>
                <v-btn
                  v-else
                  class="btn"
                  block
                  @click="resendSms"
                  :style="{
                    backgroundColor: '#0666EB !important',
                    color: '#FFFFFF !important'
                  }"
                >
                  {{ $t('resend_code') }}
                </v-btn>
              </div>
            </v-card-text>

            <v-card-actions style="padding: 8px 0 !important;">
              <v-btn
                class="btn"
                :disabled="!validCode || loading"
                @click="validateCode"
                type="submit"
                :style="{
                  backgroundColor: '#0666EB !important',
                  color: '#FFFFFF !important'
                }"
                block
              >
                {{ $t('confirm') }}
              </v-btn>
            </v-card-actions>
          </div>
        </div>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
  import ENV from '~/OLD_env';
  import { mapMutations } from 'vuex';
  import { mask } from "vue-the-mask";

  export default {
    name: 'VerificationPhoneNumberDialog',
    directives: {mask},
    props: {
      confirmationDialog: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
    },
    computed: {
      computedConfirmationDialog: {
        get() {
          return this.confirmationDialog
        },
        set(newValue) {
          this.$emit('update-verification-dialog-state', newValue)
        }
      }
    },
    data() {
      return {
        phoneNumber: '',
        validCode: false,
        smsLifeTime: ENV.smsLifeTime,
        code: '',
        codeRules: [
          v => !!v || this.$t('code_is_required'),
          v => v.length === 4 || this.$t('you_entered_the_wrong_code'),
        ],
        smsSendPause: 0,
      }
    },
    methods: {
      ...mapMutations({
        setSmsTime: 'sms/setSmsTime',
        setErrors: 'error/setErrors',
        addError: 'error/addError',
      }),

      async handleSubmit(phoneNumber) {
        try {
          this.phoneNumber = phoneNumber

          if (this.smsSendPause > 0) {
            this.$emit('update-verification-dialog-state', true)
          } else if (this.$store.getters['sms/smsTime'] && this.$moment().unix() - this.$store.getters['sms/smsTime'] < this.smsLifeTime) {
            this.$emit('update-verification-dialog-state', true)

            let timeDiff = this.$moment().unix() - this.$store.getters['sms/smsTime'];
            this.smsSendPause = timeDiff > this.smsLifeTime ? 0 : this.smsLifeTime - timeDiff;

            const id = setInterval(() => {
              this.smsSendPause -= 1;
              if (this.smsSendPause <= 0) {
                clearInterval(id)
              }
            }, 1000);
          } else {
            console.log(this.phoneNumber)
            this.$emit('update-loading-state', true)
            await this.$axios.$post(`${ENV.backendUrl}/notification/confirmation-sms`, {
              phone: this.phoneNumber
            })
              .then((result) => {
                this.$emit('update-loading-state', false)

                this.setSmsTime(this.$moment().unix());
                this.$emit('update-verification-dialog-state', true)

                if (result.success) {
                  let timeDiff = this.$moment().unix() - this.$store.getters['sms/smsTime'];
                  this.smsSendPause = timeDiff > this.smsLifeTime ? 0 : this.smsLifeTime - timeDiff;

                  const id = setInterval(() => {
                    this.smsSendPause -= 1;
                    if (this.smsSendPause <= 0) {
                      clearInterval(id)
                    }
                  }, 1000);
                } else {
                  if (result.errors) {
                    this.setErrors(result.errors);
                  }
                  if (result.message) {
                    this.addError(result.message);
                  }

                  this.smsSendPause = this.smsLifeTime;
                  const id = setInterval(() => {
                    this.smsSendPause -= 1;
                    if (this.smsSendPause <= 0) {
                      clearInterval(id)
                    }
                  }, 1000);
                  console.error(result);
                }
              })
              .catch((error) => {
                this.$emit('update-loading-state', false)
                this.addError(error);
                console.error(error);
              });
          }
        } catch (error) {
          this.$emit('update-loading-state', false)
          alert(error.message || 'An error occurred.')
        }
      },

      async handleCodeSubmit() {
        this.$emit('handle-code-submit-event', this.code)
      },

      async resendSms() {
        this.$emit('update-loading-state', true)
        await this.$axios.$post(`${ENV.backendUrl}/notification/confirmation-sms`, {
          phone: this.phoneNumber
        })
          .then((result) => {
            this.$emit('update-loading-state', false)
            if (result.success) {
              this.smsSendPause = this.smsLifeTime;
              this.setSmsTime(this.$moment().unix());

              const id = setInterval(() => {
                this.smsSendPause -= 1;
                if (this.smsSendPause <= 0) {
                  clearInterval(id)
                }
              }, 1000);
            } else {
              console.error(result);
              if (result.errors) {
                this.setErrors(result.errors);
                this.closeConfirmationDialog()
              }
              if (result.message) {
                this.addError(result.message);
              }
            }
          })
          .catch((error) => {
            this.$emit('update-loading-state', false)
            console.error(error);
          });
      },
      closeConfirmationDialog() {
        this.$emit('update-verification-dialog-state', false)
        this.code = '';
      },
      validateCode () {
        this.$refs.codeForm.validate()
      },
    }
  }
</script>

<style scoped>

  .inputs >>> fieldset {
    /*height: 48px;*/
  }

  .inputs >>> .v-input__slot {
    height: 48px;
    border-radius: 8px;
    min-height: 48px;
  }

  .inputs >>> .v-text-field__details {
    padding-left: unset;
  }

  .inputs >>> .v-text-field--outlined fieldset {
    border-color: #ccc;
  }

  .inputs >>> .v-text-field--outlined fieldset:hover {
    border-color: #1e90ff;
  }

  .inputs >>> .v-text-field__slot .v-label {
    top: 14px !important;
  }

  .inputs >>> .v-input__append-inner {
    margin-top: 12px !important;
  }

  .actions >>> .v-input__slot {
    margin-bottom: unset;
  }

  .actions >>> .v-messages {
    display: none;
  }

  .btn {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    border-radius: 8px;
    text-transform: none;
    box-shadow: unset;
    width: 240px;
    height: 48px !important;
    letter-spacing: unset;
  }

  .btn:disabled {
    opacity: 0.3;
  }

  .dialog-form >>> .v-sheet {
    box-shadow: unset;
    border-bottom: 1px solid rgba(148,163,184, 0.4);
  }

  .dialog-form .confirmation-subtitle-1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }

  .dialog-form .confirmation-subtitle-2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-decoration: unset;
    color: #000000;
  }

  .dialog-form .resend-link {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    text-decoration: unset;
  }

  .content-block-dialog {
    padding: 16px;
  }

</style>
