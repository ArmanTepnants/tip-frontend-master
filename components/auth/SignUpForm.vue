<template>
  <v-card
    :loading="loading"
    elevation="0"
    :max-width="'410px'"
    style="margin: auto"
  >
    <v-form
      class="form"
      ref="form"
      v-model="valid"
      @submit.prevent="handleSubmit"
      lazy-validation
    >
      <v-card-text>
        <div class="inputs">
          <v-text-field
            v-model="form.firstName"
            :rules="form.firstNameRules"
            :label="$t('first_name')"
            outlined
            required
          ></v-text-field>
          <v-text-field
            v-model="form.lastName"
            :rules="form.lastNameRules"
            :label="$t('last_name')"
            outlined
            required
          ></v-text-field>

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
            class="mb-2"
          />
          <div v-if="phoneError"
               class="v-messages theme--light error--text mb-2"
               :style="{ lineHeight: '12px' }">
            {{ $t('phone_must_be_valid') }}
          </div>
          <div v-else
               class="pt-5"
               :style="{ paddingTop: '22px !important' }"
          ></div>

          <v-text-field
            v-model="form.password"
            :rules="form.passwordRules"
            :label="$t('password')"
            required
            outlined
            :height="'48px'"
            :append-icon="!showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>

          <v-text-field
            v-model="form.confirmPassword"
            :rules="form.confirmPasswordRules"
            :label="$t('confirm_password')"
            required
            outlined
            :height="'48px'"
            :append-icon="!showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showConfirmPassword ? 'text' : 'password'"
            @click:append="showConfirmPassword = !showConfirmPassword"
          ></v-text-field>

          <v-text-field
            v-model="form.description"
            :label="$t('description')"
            outlined
          ></v-text-field>

          <v-text-field
            v-if="role === 'Recipient'"
            v-model="form.profession"
            :label="$t('profession')"
            outlined
          ></v-text-field>

          <v-text-field
            v-if="role === 'Administrator'"
            v-model="form.company"
            :label="$t('company')"
            outlined
          ></v-text-field>
        </div>
      </v-card-text>

      <v-card-actions :style="{ padding: '0 16px' }">
        <v-btn
          @click="validate"
          class="btn"
          type="submit"
          block
          :disabled="!valid || loading"
          :style="{
            backgroundColor: '#0666EB !important',
            color: '#FFFFFF !important'
          }"
        >
          {{ $t('create_account') }}
        </v-btn>
      </v-card-actions>

      <ClientOnly>
        <v-card-text>
          <v-checkbox
            v-model="form.offer"
            label="primary"
            color="#0666EB"
            class="py-0 px-0 mx-0 my-0 terms-checkbox"
            :rules="form.offerRules"
          >
            <div slot="label">
              {{ $t('terms_of_service_text') }}
              <nuxt-link
                class="link terms-link"
                :to="localePath('/')">
                {{ $t('terms_of_service_link_1') }}
              </nuxt-link>
              <!--                      TODO: change links-->
              {{ $t('terms_of_service_conjunction') }}
              <nuxt-link
                class="link terms-link"
                :to="localePath('/')">
                {{ $t('terms_of_service_link_2') }}
              </nuxt-link>
            </div>
          </v-checkbox>
        </v-card-text>
      </ClientOnly>
    </v-form>

    <v-card-text>
      <div class="text-center">
        <div>
          {{ $t('already_have_an_account') }}
          <nuxt-link
            class="link sign-up-link"
            :to="localePath('/users/sign-in')">
            {{ $t('log_in') }}
          </nuxt-link>.
        </div>
      </div>

      <div v-if="role === 'Recipient'" class="text-center mt-3">
        <div>
          {{ $t('connect_the_institution') }}
          <nuxt-link
            class="link sign-up-link px-1"
            :to="localePath('/users/sign-up-as-administrator')">
            {{ $t('sign_up_as_administrator') }}
          </nuxt-link>
        </div>
      </div>

      <div v-if="role === 'Administrator'" class="text-center mt-3">
        <div>
          {{ $t('here_to_get_a_tip') }}
          <nuxt-link
            class="link sign-up-link px-1"
            :to="localePath('/users/sign-up-as-recipient')">
            {{ $t('sign_up_as_a_tip_recipient') }}
          </nuxt-link>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
  import VuePhoneNumberInput from 'vue-phone-number-input';
  import 'vue-phone-number-input/dist/vue-phone-number-input.css';
  import ENV from '~/OLD_env';
  import { mapMutations } from 'vuex';
  import {availableCountries} from "../../util/helpers";

  export default {
    components: {
      VuePhoneNumberInput,
    },
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      role: {
        type: String,
        required: true
      },
    },
    data() {
      return {
        valid: false,
        showPassword: false,
        showConfirmPassword: false,
        phoneModel: '',
        phoneError: false,
        form: {
          firstName: '',
          firstNameRules: [
            v => !!v || this.$t('first_name_is_required'),
            v => v.length >= 3 || this.$t('the_first_name_cannot_contain_less'),
          ],
          lastName: '',
          lastNameRules: [
            v => !!v || this.$t('last_name_is_required'),
            v => v.length >= 3 || this.$t('the_last_name_cannot_contain_less'),
          ],
          phone: '',
          password: '',
          passwordRules: [
            v => !!v || this.$t('password_is_required'),
            v => v.length >= 8 || this.$t('the_password_cannot_contain_less'),
          ],
          confirmPassword: '',
          confirmPasswordRules: [
            v => !!v || this.$t('confirmation_password_is_required'),
            v => v.length >= 8|| this.$t('the_confirmation_password_cannot_contain_less'),
            v => v === this.form.password || this.$t('the_password_confirmation_does_not_match'),
          ],
          offer: '',
          offerRules: [
            v => !!v || this.$t('offer_is_required'),
          ],
          description: '',
          profession: '',
          company: '',
        },
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
          if (this.$refs.form.validate()) {
            if (!this.form.phone || this.phoneError) {
              this.phoneError = true;
              return;
            }

            this.$emit('handle-submit-event', this.form.phone)
          }
        } catch (error) {
          this.$emit('update-loading-state', false)
          alert(error.message || 'An error occurred.')
        }
      },

      async handleCodeSubmit(smsCode) {
        try {
          this.$emit('update-loading-state', true)
          this.form.code = smsCode;
          this.form.role = this.role;
          await this.$axios.$post(`${ENV.backendUrl}/sign-up`, this.form)
            .then((result) => {
              this.$emit('update-loading-state', false)
              if (result.success) {
                this.$router.replace({ path: '/users/sign-in' })
              } else {
                if (result.errors) {
                  this.setErrors(result.errors);

                  this.$emit('update-verification-dialog-state', false)
                }
                if (result.message) {
                  this.addError(result.message);
                }
                console.error(result.errors);
              }
            })
            .catch((error) => {
              this.$emit('update-loading-state', false)
              this.addError(error);
              console.error(error);
            });
        } catch (error) {
          this.$emit('update-loading-state', false)
          alert(error.message || 'An error occurred.')
        }
      },

      validate () {
        this.$refs.form.validate()
      },
    }
  }
</script>

<style scoped>
  .form {
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

  .terms-checkbox >>> .v-label {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #475569;
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

  .terms-link {
    color: #0666EB;
  }

  .sign-up-link {
    text-transform: uppercase;
    color: #5999F2;
    padding: 0 10px;
  }

  .btn:disabled {
    opacity: 0.3;
  }

</style>
