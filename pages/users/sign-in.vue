<template>
  <div style="background-color: #ffffff">
    <v-container style="max-width: 1440px; height: 100vh">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <div class="py-5"></div>

          <div class="text-center block-title">
            {{ $t('welcome_back') }}
          </div>

          <div class="py-5"></div>

          <v-card
            :loading="loading"
            style="box-shadow: none;"
          >
            <v-form
              ref="form"
              v-model="valid"
              @submit.prevent="handleSubmit"
              lazy-validation
              class="form"
            >
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
                  />
                  <div v-if="phoneError" class="v-messages theme--light error--text">{{ $t('phone_must_be_valid') }}</div>

                  <div class="py-3"></div>

                  <v-text-field
                    v-model="form.password"
                    :rules="form.passwordRules"
                    :label="$t('password')"
                    required
                    outlined
                    :height="'48px'"
                    :append-icon="!showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    :error="passwordError"
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                </div>
                <div class="d-flex align-center actions" style="justify-content: space-between">
                  <div>
                    <v-checkbox
                      v-if="isShowRememberCheckbox"
                      v-model="rememberMe"
                      label="primary"
                      color="#0666EB"
                      :label="$t('remember_me')"
                      class="py-0 px-0 mx-0 my-0"
                    ></v-checkbox>
                  </div>
                  <div>
                    <nuxt-link
                      class="link forgot-link"
                      :to="localePath('/users/password')">
                      {{ $t('forgot_your_password') }}
                    </nuxt-link>
                  </div>
                </div>

              </v-card-text>

              <v-card-actions class="px-4 pb-0 pt-5">
                <v-btn
                  :disabled="!valid || loading"
                  @click="validate"
                  type="submit"
                  block
                  class="btn"
                  :style="{ backgroundColor: ' #0666EB' }"
                >
                  {{ $t('log_in') }}
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>

          <div class="py-5"></div>

          <div class="text-center">
            <div>
              {{ $t('dont_have_an_account') }}
              <nuxt-link
                class="link sign-up-link"
                :to="localePath('/get-started')">
                {{ $t('sign_up') }}
              </nuxt-link>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import VuePhoneNumberInput from 'vue-phone-number-input';
  import 'vue-phone-number-input/dist/vue-phone-number-input.css';
  import { mask } from "vue-the-mask";
  import { mapMutations } from "vuex";
  import {availableCountries} from "../../util/helpers";

  export default {
    middleware: 'unauthorized',
    directives: {mask},
    components: {
      VuePhoneNumberInput,
    },
    data() {
      return {
        valid: false,
        phoneError: false,
        phoneModel: '',
        passwordError: false,
        form: {
          phone: '',
          password: '',
          passwordRules: [
            v => !!v || 'Password is required',
            v => v.length >= 3 || 'The password cannot contain less than 3 characters',
          ],
        },
        showPassword: false,
        loading: false,
        isShowRememberCheckbox: true,
        rememberMe: false,
        availableCountries
      }
    },
    methods: {
      ...mapMutations({
        setSmsTime: 'sms/setSmsTime',
        setErrors: 'error/setErrors',
        addError: 'error/addError',
      }),
      checkPhone(item) {
        this.phoneError = !item.isValid && !!item.phoneNumber;
        this.form.phone = item.formattedNumber;
      },
      async handleSubmit() {
        try {
          if (!this.form.phone || this.phoneError) {
            this.form.phoneError = true;
            return;
          }

          this.loading = true;

          await this.$auth.loginWith('local', { data: this.form })
            .then((result) => {
              this.loading = false;
              if (result.data.success) {
                this.$router.push(this.localePath('/profile'));
              } else {
                if (result.data.errors) {
                  this.setErrors(result.data.errors);
                }
                if (result.data.message) {
                  this.addError(result.data.message);
                }
                console.error(result.data.message);
              }
            })
            .catch((error) => {
              this.loading = false;
              console.error(error);
            });

        } catch (error) {
          this.loading = false;
          alert(error.message || 'An error occurred.')
        }
      },
      validate () {
        this.phoneError = !this.form.phone;
        this.$refs.form.validate()
      },
    }
  }
</script>

<style scoped>

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

  .forgot-link {
    color: #0666EB;
  }

</style>

<style scoped>

  .block-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    color: #000000;
  }

  .form {
    max-width: 400px;
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

  .forgot-link {
    color: #0666EB;
  }

</style>
