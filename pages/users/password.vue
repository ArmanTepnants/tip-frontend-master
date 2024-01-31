<template>
  <div style="background-color: #ffffff">
    <v-container style="max-width: 1440px; min-height: 100vh">
      <div class="content-block">
        <template v-if="!confirmationDialog && !passwordDialog">
          <v-row justify="center" align="center">
            <v-col cols="12" sm="8" md="6">
              <div class="text-center block-title">
                {{ $t('forgotten_password') }}
              </div>

              <div class="py-5"></div>

              <v-card
                :loading="loading"
                style="box-shadow: none;"
              >
                <v-form
                  ref="form"
                  @submit.prevent="handleSubmit"
                  lazy-validation
                  class="form"
                >
                  <v-card-title>{{ $t('enter_your_phone') }}</v-card-title>

                  <v-card-text>
                    <div class="inputs">
                      <VuePhoneNumberInput
                        v-model="phoneModel"
                        :translations="{
                          countrySelectorLabel: null,
                          phoneNumberLabel: $t('phone'),
                        }"
                        size="lg"
                        :border-radius="8"
                        default-country-code="ES"
                        :only-countries="availableCountries"
                        show-code-on-list
                        :error="phoneError"
                        v-on:update="checkPhone"
                        required
                        class="mb-3"
                      />
                      <div v-if="phoneError"
                           class="v-messages theme--light error--text mb-2"
                           :style="{ lineHeight: '12px' }">
                        {{ $t('phone_must_be_valid') }}
                      </div>
                      <div v-else :style="{ paddingTop: '22px !important' }"
                      ></div>

                    </div>
                  </v-card-text>

                  <v-card-actions class="px-4 pb-0">
<!--                    :disabled="!valid || loading"-->
                    <v-btn
                      @click="validate"
                      type="submit"
                      block
                      class="btn"
                      :style="{ backgroundColor: ' #0666EB' }"
                    >
                      {{ $t('submit') }}
                    </v-btn>
                  </v-card-actions>
                </v-form>
              </v-card>

              <div class="py-5"></div>

              <div class="text-center">
                <div>
                  {{ $t('already_have_an_account') }}
                  <nuxt-link
                    class="link sign-up-link"
                    :to="localePath('/users/sign-in')">
                    {{ $t('sign_in') }}
                  </nuxt-link>
                </div>
              </div>
            </v-col>
          </v-row>
        </template>
      </div>

      <VerificationPhoneNumberDialog
        ref="verificationDialog"
        :confirmation-dialog="confirmationDialog"
        :loading="loading"
        @update-verification-dialog-state="updateVerificationPhoneNumberDialogState"
        @update-loading-state="updateLoadingState"
        @handle-code-submit-event="handleCodeSubmit"
      />

      <ChangePasswordDialog
        ref="changePasswordDialog"
        :password-dialog="passwordDialog"
        :loading="loading"
        @update-change-password-dialog-state="updateChangePasswordDialogState"
        @update-loading-state="updateLoadingState"
        @handle-change-password-submit-event="handlePasswordSubmit"
      />
    </v-container>
  </div>
</template>

<script>
  import VuePhoneNumberInput from 'vue-phone-number-input';
  import 'vue-phone-number-input/dist/vue-phone-number-input.css';
  import ENV from '~/OLD_env';
  import { mapMutations } from 'vuex';
  import {availableCountries} from "../../util/helpers";
  import VerificationPhoneNumberDialog from "../../components/auth/VerificationPhoneNumberDialog";
  import ChangePasswordDialog from "../../components/auth/ChangePasswordDialog";

  export default {
    middleware: 'unauthorized',
    components: {
      VuePhoneNumberInput,
      VerificationPhoneNumberDialog,
      ChangePasswordDialog,
    },
    data() {
      return {
        valid: false,
        loading: false,
        confirmationDialog: false,
        passwordDialog: false,
        phone: '',
        phoneModel: '',
        phoneError: false,
        availableCountries
      }
    },
    methods: {
      ...mapMutations({
        setSmsTime: 'sms/setSmsTime',
        setErrors: 'error/setErrors',
        addError: 'error/addError',
      }),

      updateChangePasswordDialogState(value) {
        this.passwordDialog = value
      },

      updateVerificationPhoneNumberDialogState(value) {
        this.confirmationDialog = value
      },

      updateLoadingState(value) {
        this.loading = value
      },

      async handleSubmit() {
        try {
          if (!this.phone || this.phoneError) {
            this.phoneError = true;
            return;
          }

          await this.$refs.verificationDialog.handleSubmit(this.phone)
        } catch (err) {
          this.loading = false;
          console.error(err?.message || 'An error occurred.')
        }
      },

      async handleCodeSubmit(smsCode) {
        this.loading = true;
        await this.$axios.$post(`${ENV.backendUrl}/check-code`, {
          code: smsCode,
          phone: this.phone
        })
        .then((result) => {
          this.loading = false;

          if (result.success) {
            this.confirmationDialog = false;
            this.passwordDialog = true;
          } else {
            console.error(result);
            if (result.errors) {
              this.setErrors(result.errors);
              this.confirmationDialog = false;
            }
            if (result.message) {
              this.addError(result.message);
            }
          }
        })
        .catch((error) => {
          this.loading = false;
          console.error(error);
        });
      },

      checkPhone(item) {
        this.phoneError = !item.isValid && !!item.phoneNumber;
        this.phone = item.formattedNumber;
      },

      async handlePasswordSubmit(password) {
        this.loading = true;
        await this.$axios.$post(`${ENV.backendUrl}/reset-password`, {
          phone: this.phone,
          password,
        })
          .then((result) => {
            this.loading = false;

            if (result.success) {
              this.$router.replace({ path: '/users/sign-in' })
            } else {
              console.error(result);
              if (result.errors) {
                this.setErrors(result.errors);
                this.confirmationDialog = false;
              }
              if (result.message) {
                this.addError(result.message);
              }
            }
          })
          .catch((error) => {
            this.loading = false;
            console.error(error);
          });
      },
      validate () {
        this.$refs.form.validate()
      },
    }
  }
</script>

<style scoped>
  .content-block {
    margin: 70px 0;
  }

  .block-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    color: #000000;
  }

  .form {
    max-width: 410px;
    margin: auto;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    align-items: center;
    text-align: center;
    color: #475569;
  }

  .inputs >>> .country-selector {
    height: 44px;
    min-height: 44px;
  }

  .inputs >>> .country-selector__country-flag {
    top: 18px !important;
  }

  .inputs >>> .select-country-container {
    flex: 0 0 100px !important;
    width: 100px !important;
    min-width: 100px !important;
    max-width: 100px !important;
  }

  .inputs >>> .country-selector__input {
    padding-left: 38px !important;
    padding-top: unset !important;
  }

  .inputs >>> .input-tel__input {
    padding-top: unset !important;
  }

  .inputs >>> .input-tel__label {
    top: 0 !important;
    right: 10px !important;
    font-size: 10px !important;
    left: unset !important;
  }


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

  .link {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    text-decoration: unset;
  }

  .sign-up-link {
    text-transform: uppercase;
    color: #5999F2;
    padding: 0 10px;
  }

</style>
