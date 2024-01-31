<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <div class="py-5"></div>

        <h1 class="text-center">
          Fill out your profile
        </h1>

        <div class="py-5"></div>

        <v-card
          :loading="loading"
        >
          <v-form
            ref="form"
            v-model="valid"
            @submit.prevent="handleSubmit"
            lazy-validation
          >
            <v-card-text>
              <v-text-field
                v-model="form.firstName"
                :rules="form.firstNameRules"
                label="First name"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.lastName"
                :rules="form.lastNameRules"
                label="Last name"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.email"
                :rules="form.emailRules"
                label="Email address"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.password"
                :rules="form.passwordRules"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.confirmPassword"
                :rules="form.confirmPasswordRules"
                label="Confirm password"
                type="password"
                required
              ></v-text-field>

              <v-checkbox
                v-model="form.personal"
                :rules="form.personalRules"
                :label="'I have read the Consent to the processing of personal data and the policy regarding the processing of personal data. Placing a “V” mark signifies my written consent to the terms of these documents and my consent to comply with them.'"
              ></v-checkbox>

              <v-checkbox
                v-model="form.offer"
                :rules="form.offerRules"
                :label="'I have read the Offer Agreement. Placing a “V” mark signifies my written consent to the terms of the contract and my consent to abide by them.'"
              ></v-checkbox>
            </v-card-text>
            <v-card-actions>
              <v-btn
                :disabled="!valid || loading"
                @click="validate"
                type="submit"
                block
              >
                Continue
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>

        <div class="py-5"></div>

        <div class="text-center">
          <p>
            Already have an account? <nuxt-link :to="localePath('/users/sign-in')" >{{ $t('sign_in') }}</nuxt-link>.
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ENV from '~/OLD_env';
  import { mapMutations } from 'vuex';
  import { mask } from "vue-the-mask";

  export default {
    middleware: 'unauthorized',
    directives: {mask},
    data() {
      return {
        valid: false,
        loading: false,
        form: {
          firstName: '',
          firstNameRules: [
            v => !!v || 'First name is required',
            v => v.length >= 3 || 'The first name cannot contain less than 3 characters',
          ],
          lastName: '',
          lastNameRules: [
            v => !!v || 'Last name is required',
            v => v.length >= 3 || 'The last name cannot contain less than 3 characters',
          ],
          email: '',
          emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
          ],
          password: '',
          passwordRules: [
            v => !!v || 'Password is required',
            v => v.length >= 3 || 'The password cannot contain less than 3 characters',
          ],
          confirmPassword: '',
          confirmPasswordRules: [
            v => !!v || 'Confirmation password is required',
            v => v.length >= 3 || 'The confirmation password cannot contain less than 3 characters',
            v => v === this.form.password || 'The password confirmation does not match',
          ],
          personal: '',
          personalRules: [
            v => !!v || 'Personal is required',
          ],
          offer: '',
          offerRules: [
            v => !!v || 'Offer is required',
          ],
        }
      }
    },
    methods: {
      ...mapMutations({
        setErrors: 'error/setErrors',
        addError: 'error/addError',
      }),
      async handleSubmit() {
        try {
          this.loading = true;
          await this.$axios.$post(`${ENV.backendUrl}/confirm-invite`, {
            form: this.form,
            id: this.$route.params.id,
          })
            .then((result) => {
              this.loading = false;
              if (result.success) {
                this.$router.replace({ path: '/users/sign-in' })
              } else {
                if (result.errors) {
                  this.setErrors(result.errors);
                  this.confirmationDialog = false;
                }
                if (result.message) {
                  this.addError(result.message);
                }
                console.error(result.errors);
              }
            })
            .catch((error) => {
              this.loading = false;
              this.addError(error);
              console.error(error);
            });
        } catch (error) {
          this.loading = false;
          alert(error.message || 'An error occurred.')
        }
      },
      validate () {
        this.$refs.form.validate()
      },
    }
  }
</script>
