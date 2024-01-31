<template>
  <v-dialog
    v-model="computedPasswordDialog"
    :max-width="'500px'"
  >
    <v-card
      elevation="0"
      :loading="loading"
    >
      <v-form
        ref="passwordForm"
        v-model="validPassword"
        @submit.prevent="handleChangePasswordSubmit"
        lazy-validation
        class="dialog-form"
      >
        <v-toolbar>
          <v-toolbar-title>{{ $t('change_password') }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              icon
              @click="closeChangePasswordDialog"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <div class="content-block-dialog">
          <div class="pt-3 actions">
            <v-card-text style="padding: 0 !important;">
              <div class="inputs">
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  :label="$t('password')"
                  required
                  outlined
                  :height="'48px'"
                  :append-icon="!showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                ></v-text-field>

                <v-text-field
                  v-model="confirmPassword"
                  :rules="confirmPasswordRules"
                  :label="$t('confirm_password')"
                  required
                  outlined
                  :height="'48px'"
                  :append-icon="!showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  @click:append="showConfirmPassword = !showConfirmPassword"
                ></v-text-field>
              </div>
            </v-card-text>

            <v-card-actions style="padding: 8px 0 !important;">
              <v-btn
                class="btn"
                :disabled="!validPassword || loading"
                @click="validatePassword"
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
  export default {
    name: 'ChangePasswordDialog',
    props: {
      passwordDialog: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
    },
    computed: {
      computedPasswordDialog: {
        get() {
          return this.passwordDialog
        },
        set(newValue) {
          this.$emit('update-change-password-dialog-state', newValue)
        }
      }
    },
    data() {
      return {
        validPassword: false,
        showPassword: false,
        showConfirmPassword: false,
        password: '',
        passwordRules: [
          v => !!v || this.$t('password_is_required'),
          v => v.length >= 8 || this.$t('the_password_cannot_contain_less'),
        ],
        confirmPassword: '',
        confirmPasswordRules: [
          v => !!v || this.$t('confirmation_password_is_required'),
          v => v.length >= 8|| this.$t('the_confirmation_password_cannot_contain_less'),
          v => v === this.password || this.$t('the_password_confirmation_does_not_match'),
        ],
      }
    },
    methods: {
      async handleChangePasswordSubmit() {
        this.$emit('handle-change-password-submit-event', this.password)
      },

      closeChangePasswordDialog() {
        this.$emit('update-change-password-dialog-state', false)
        this.password = '';
        this.confirmPassword = '';
        this.showConfirmPassword = false;
        this.showPassword = false;
      },

      validatePassword () {
        this.$refs.passwordForm.validate()
      },
    }
  }
</script>

<style scoped>

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
    padding: 14px 0 6px;
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

  .content-block-dialog {
    padding: 16px;
  }

</style>
