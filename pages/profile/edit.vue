<template>
  <div>
    <v-container style="max-width: 1440px">

      <v-row>
        <v-col cols="12" sm="6" lg="4">
          <div class="edit-profile-photo-block text-center">
            <div class="d-flex justify-center avatar">
              <v-img
                alt="Avatar"
                style="width: 100%"
                :src="avatar"
              ></v-img>
            </div>

            <v-row dense class="mt-8 actions">
              <v-col cols="6">
                <v-btn
                  class="btn"
                  @click="imageDialog = true"
                  block
                  elevation="0"
                >
                  <v-img
                    class="mr-2"
                    :src="require('~/static/img/pages/profile/edit/camera.png')"
                    alt="Camera"
                    max-height="20"
                    max-width="20"
                    contain
                  ></v-img>
                  Edit photo
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn
                  class="btn"
                  @click="resetAvatar"
                  block
                >
                  <v-img
                    class="mr-2"
                    :src="require('~/static/img/pages/profile/edit/trash.png')"
                    alt="Camera"
                    max-height="20"
                    max-width="20"
                    contain
                  ></v-img>
                  Delete photo
                </v-btn>
              </v-col>
            </v-row>

            <div class="integration-key mt-6">
              Your integration key: <span class="font-weight-bold">ZZ1Z1W2M_TEST</span>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" lg="8">
          <div class="tabs">
            <v-tabs
              grow
              class="tabs"
              bg-color="indigo-darken-2"
              v-model="tab"
            >
              <v-tab :value="'personal-info'">
                Personal Info
              </v-tab>
              <v-tab :value="'phrases'">
                Phrases
              </v-tab>
              <v-tab :value="'settings'" class="cursor-block" disabled>
                Settings
              </v-tab>
              <v-tab :value="'notification'">
                Notification
              </v-tab>
            </v-tabs>
          </div>

          <v-card
            class="mt-6"
            :loading="loading"
            elevation="0"
            :style="{ borderRadius: '12px' }"
          >
            <v-card-text>
              <v-row>
                <v-col cols="12" class="px-4 px-sm-8 py-5 py-sm-10">
<!--                  <v-card-actions>-->
<!--                    <v-row dense>-->
<!--                      <v-col cols="12" sm="12" md="6">-->
<!--                        <v-btn-->
<!--                          @click="passwordDialog = true"-->
<!--                          block-->
<!--                        >-->
<!--                          Change password-->
<!--                        </v-btn>-->
<!--                      </v-col>-->
<!--                      <v-col cols="12" sm="12" md="6">-->
<!--                        <v-btn-->
<!--                          @click="confirmPasswordDialog = true"-->
<!--                          block-->
<!--                        >-->
<!--                          Change phone-->
<!--                        </v-btn>-->
<!--                      </v-col>-->
<!--                    </v-row>-->
<!--                  </v-card-actions>-->

                  <v-form
                    ref="form"
                    v-model="valid"
                    @submit.prevent="handleSubmit"
                    lazy-validation
                  >
                    <!-- personal-info -->
                    <template v-if="tab === 0">
                      <v-row class="personal-info">
                        <v-col cols="12" md="4" class="section-header">
                          Personal Info
                        </v-col>
                        <v-col cols="12" md="8">
                          <div class="inputs">
                            <v-card-text class="py-0 px-0">
                              <v-text-field
                                v-model="form.firstName"
                                :rules="form.firstNameRules"
                                label="First name"
                                outlined
                                required
                              ></v-text-field>
                              <v-text-field
                                v-model="form.lastName"
                                :rules="form.lastNameRules"
                                label="Last name"
                                outlined
                                required
                              ></v-text-field>
                              <v-text-field
                                v-model="form.userName"
                                label="User name"
                                outlined
                              ></v-text-field>
                              <v-text-field
                                v-model="form.email"
                                :rules="form.emailRules"
                                label="E-mail"
                                outlined
                                required
                              ></v-text-field>

<!--                              <v-menu-->
<!--                                ref="birthDatePickerMenu"-->
<!--                                v-model="birthDatePickerMenu"-->
<!--                                :close-on-content-click="false"-->
<!--                                :return-value.sync="form.birthDate"-->
<!--                                transition="scale-transition"-->
<!--                                offset-y-->
<!--                                min-width="auto"-->
<!--                              >-->
<!--                                <template v-slot:activator="{ on, attrs }">-->
<!--                                  <v-text-field-->
<!--                                    v-model="form.birthDate"-->
<!--                                    label="Birth Date"-->
<!--                                    readonly-->
<!--                                    v-bind="attrs"-->
<!--                                    v-on="on"-->
<!--                                  ></v-text-field>-->
<!--                                </template>-->
<!--                                <v-date-picker-->
<!--                                  v-model="form.birthDate"-->
<!--                                  no-title-->
<!--                                  scrollable-->
<!--                                >-->
<!--                                  <v-spacer></v-spacer>-->
<!--                                  <v-btn-->
<!--                                    text-->
<!--                                    color="primary"-->
<!--                                    @click="birthDatePickerMenu = false"-->
<!--                                  >-->
<!--                                    Cancel-->
<!--                                  </v-btn>-->
<!--                                  <v-btn-->
<!--                                    text-->
<!--                                    color="primary"-->
<!--                                    @click="$refs.birthDatePickerMenu.save(form.birthDate)"-->
<!--                                  >-->
<!--                                    OK-->
<!--                                  </v-btn>-->
<!--                                </v-date-picker>-->
<!--                              </v-menu>-->
                              <v-text-field
                                v-model="form.birthDate"
                                label="Birth Date"
                                v-mask="'####-##-##'"
                                outlined
                              ></v-text-field>

                              <v-text-field
                                v-model="form.profession"
                                label="Your Profession"
                                outlined
                              ></v-text-field>
                              <v-text-field
                                v-model="form.company"
                                label="Your Company"
                                outlined
                              ></v-text-field>

<!--                              <v-text-field-->
<!--                                label="Add logo company"-->
<!--                                style="border: 1px dotted #94A3B8"-->
<!--                                outlined-->
<!--                              ></v-text-field>-->

                              <v-text-field
                                v-model="form.country"
                                label="Country"
                                outlined
                              ></v-text-field>
                              <v-text-field
                                v-model="form.city"
                                label="City"
                                outlined
                              ></v-text-field>
                              <v-text-field
                                v-model="form.region"
                                label="Region"
                                outlined
                              ></v-text-field>
                              <v-text-field
                                v-model="form.street_line1"
                                label="Street line 1"
                                outlined
                              ></v-text-field>
                              <v-text-field
                                v-model="form.street_line2"
                                label="Street line 2"
                                outlined
                              ></v-text-field>
                            </v-card-text>

                            <v-card-actions class="px-0 py-0">
                              <v-btn
                                :disabled="!valid || loading"
                                @click="validate"
                                type="submit"
                                class="btn"
                                block
                                :style="{ backgroundColor: ' #0666EB' }"
                              >
                                Save
                              </v-btn>
                            </v-card-actions>
                          </div>
                        </v-col>
                      </v-row>
                    </template>
                    <!-- phrases -->
                    <template v-if="tab === 1">
                      <v-row class="phrases">
                        <v-col cols="12" md="4" class="section-header">
                          Phrases
                        </v-col>
                        <v-col cols="12" md="8">
                          <div class="inputs">
                            <v-card-text class="py-0 px-0">
                              <v-text-field
                                v-model="form.welcomePhrase"
                                :rules="form.welcomePhraseRules"
                                label="Welcome phrase"
                                required
                                outlined
                              ></v-text-field>
                              <v-text-field
                                v-model="form.thankYouPhrase"
                                :rules="form.thankYouPhraseRules"
                                label="Thank you phrase"
                                required
                                outlined
                              ></v-text-field>
<!--                              <v-text-field-->
<!--                                v-model="form.saveMoneyUpForPhrase"-->
<!--                                label="Save up for phrase"-->
<!--                                outlined-->
<!--                              ></v-text-field>-->
                            </v-card-text>

                            <v-card-actions class="px-0 py-0">
                              <v-btn
                                :disabled="!valid || loading"
                                @click="validate"
                                type="submit"
                                class="btn"
                                block
                                :style="{ backgroundColor: ' #0666EB' }"
                              >
                                Save
                              </v-btn>
                            </v-card-actions>
                          </div>
                        </v-col>
                      </v-row>
                    </template>
                    <!-- settings -->
                    <template v-if="tab === 2">

                    </template>
                    <!-- notification -->
                    <template v-if="tab === 3">
                      <v-row class="notification">
                        <v-col cols="12" class="section-header">
                          Notification
                        </v-col>
                        <v-col cols="12" >
                          <v-row class="notifications-section align-center">
                            <v-col cols="4" sm="5">
                              Email
                            </v-col>
                            <v-col cols="8" sm="7">
                              <v-switch
                                v-model="form.enabledEmailNotification"
                                hide-details
                                inset
                                disabled
                                :label="`Payments emails`"
                              ></v-switch>
                            </v-col>
                          </v-row>

                          <v-divider></v-divider>

                          <v-row class="notifications-section">
                            <v-col cols="4" sm="5">
                              Push
                            </v-col>
                            <v-col cols="8" sm="7" class="switch-group">
                              <div>
                                <v-switch
                                  v-model="form.enabledPushNotificationNewPayment"
                                  hide-details
                                  inset
                                  disabled
                                  :label="`New Payment`"
                                ></v-switch>
                                <div class="switch-hint">You just got a new payments</div>
                              </div>

                              <div>
                                <v-switch
                                  v-model="form.enabledPushNotificationNewPaymentWhatsApp"
                                  hide-details
                                  inset
                                  disabled
                                  :label="`New Payment on WhatsApp`"
                                ></v-switch>
                                <div class="switch-hint">
                                  You will get a push notification of payment on WhatsApp
                                </div>
                              </div>
                            </v-col>
                          </v-row>

                          <v-divider></v-divider>

                          <v-row class="notifications-section align-center">
                            <v-col cols="4" sm="5">
                              Reviews
                            </v-col>
                            <v-col cols="8" sm="7">
                              <v-switch
                                v-model="form.allowReviews"
                                hide-details
                                inset
                                disabled
                                :label="`Allow to give reviews`"
                              ></v-switch>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </template>
                  </v-form>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-dialog
        v-model="confirmationDialog"
        :max-width="$device.isMobile ? '90vw' : '50vw'"
      >
        <v-card>
          <v-form
            ref="codeForm"
            v-model="validCode"
            @submit.prevent="handleCodeSubmit"
            lazy-validation
          >
            <v-toolbar>
              <v-toolbar-title>Phone number verification</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn
                  icon
                  @click="confirmationDialog = false"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>

            <v-card-text>
              A confirmation code was sent to the phone number {{form.phone}}
            </v-card-text>

            <v-card-text>
              <v-text-field
                id="code"
                v-model="code"
                :rules="codeRules"
                label="Verification code"
                v-mask="'####'"
                single-line
              ></v-text-field>

              <small v-if="smsSendPause > 0">Repeated SMS can be sent in {{ smsSendPause }} seconds</small>
              <v-btn
                v-else
                class="button"
                block
                @click="resendSms"
              >
                Resend code
              </v-btn>
            </v-card-text>

            <v-card-actions>
              <v-btn
                :disabled="!validCode || loading"
                @click="validateCode"
                type="submit"
                block
              >
                Confirm
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="imageDialog"
        :max-width="$device.isMobile ? '90vw' : '40vw'"
        persistent
      >
        <v-card class="upload-photo-dialog" elevation="0">
          <v-toolbar elevation="0">
            <v-toolbar-title>Upload a new avatar</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                icon
                @click="imageDialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <v-card-text
            class="text-center px-0 py-0 upload-block"
            :style="{ backgroundImage: 'url(' + require('~/static/img/pages/profile/edit/background-substrate.png') + ')'}"
          >
            <vue-avatar
              class="uploader"
              :width="$device.isMobile ? 200 : 400"
              :height="$device.isMobile ? 200 : 400"
              :scale="1"
              :borderRadius="200"
              ref="vueavatar"
              @vue-avatar-editor:image-ready="onImageReady"
            >
            </vue-avatar>
          </v-card-text>

          <v-card-actions class="d-flex justify-end">
            <v-btn
              class="btn"
              @click="imageDialog = false"
              block
              :style="{
                backgroundColor: '#F0F2F9 !important',
              }"
            >
              Cancel
            </v-btn>
            <v-btn
              class="btn"
              @click="saveClicked"
              :style="{
                backgroundColor: '#0666EB !important',
                color: '#FFFFFF !important'
              }"
              block
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="passwordDialog"
        :max-width="$device.isMobile ? '90vw' : '50vw'"
      >
        <v-card>
          <v-form
            ref="passwordForm"
            v-model="validPassword"
            @submit.prevent="handlePasswordSubmit"
            lazy-validation
          >
            <v-toolbar>
              <v-toolbar-title>Change password</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn
                  icon
                  @click="passwordDialog = false"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>

            <v-card-text>
              <v-text-field
                v-model="oldPassword"
                :rules="oldPasswordRules"
                label="Old password"
                type="password"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="New password"
                type="password"
                required
              ></v-text-field>
              <v-text-field
                v-model="confirmPassword"
                :rules="confirmPasswordRules"
                label="Confirm new password"
                type="password"
                required
              ></v-text-field>
            </v-card-text>

            <v-card-actions>
              <v-btn
                :disabled="!validPassword || loading"
                @click="validatePassword"
                type="submit"
                block
              >
                Submit
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="phoneDialog"
        :max-width="$device.isMobile ? '90vw' : '50vw'"
      >
        <v-card>
          <v-form
            ref="phoneForm"
            v-model="validPhone"
            @submit.prevent="handlePhoneSubmit"
            lazy-validation
          >
            <v-toolbar>
              <v-toolbar-title>Change phone number</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn
                  icon
                  @click="closePhoneDialog"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>

            <v-card-text>
              <v-text-field
                v-model="form.phone"
                :rules="form.phoneRules"
                label="Phone"
                required
              ></v-text-field>
            </v-card-text>

            <v-card-actions>
              <v-btn
                :disabled="!validPhone || loading"
                @click="validatePhone"
                type="submit"
                block
              >
                Submit
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="confirmPasswordDialog"
        :max-width="$device.isMobile ? '90vw' : '50vw'"
      >
        <v-card>
          <v-form
            ref="confirmPasswordForm"
            v-model="validConfirmPassword"
            @submit.prevent="handleConfirmPasswordSubmit"
            lazy-validation
          >
            <v-toolbar>
              <v-toolbar-title>Enter your password</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn
                  icon
                  @click="closeConfirmPasswordDialog"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>

            <v-card-text>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                type="password"
                required
              ></v-text-field>
            </v-card-text>

            <v-card-actions>
              <v-btn
                :disabled="!validConfirmPassword || loading"
                @click="validateConfirmPassword"
                type="submit"
                block
              >
                Submit
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <div class="py-1"></div>
    </v-container>
  </div>
</template>

<script>
  import ENV from '~/OLD_env';
  import { mapMutations } from 'vuex';
  import { mask } from "vue-the-mask";
  import {VueAvatar} from 'vue-avatar-editor-improved'

  export default {
    layout: 'authorized',
    directives: {mask},
    components: {
      VueAvatar,
    },
    data() {
      return {
        smsSendPause: 0,
        valid: false,
        validCode: false,
        validPassword: false,
        validConfirmPassword: false,
        validPhone: false,
        loading: false,
        phoneDialog: false,
        passwordDialog: false,
        confirmPasswordDialog: false,
        confirmationDialog: false,
        imageDialog: false,
        birthDatePickerMenu: false,
        colorSchemes: [
          { text: "Blue", value: "blue" },
          { text: "Red", value: "red" },
          { text: "Dark", value: "dark" },
        ],
        code: '',
        codeRules: [
          v => !!v || 'Code is required',
          v => v?.length === 4 || 'You entered the wrong code',
        ],
        oldPassword: '',
        oldPasswordRules: [
          v => !!v || 'Old password is required',
          v => v?.length >= 3 || 'The old password cannot contain less than 3 characters',
        ],
        password: '',
        passwordRules: [
          v => !!v || 'New password is required',
          v => v?.length >= 3 || 'The new password cannot contain less than 3 characters',
        ],
        confirmPassword: '',
        confirmPasswordRules: [
          v => !!v || 'Confirmation new password is required',
          v => v?.length >= 3 || 'The confirmation new password cannot contain less than 3 characters',
          v => v === this.password || 'The new password confirmation does not match',
        ],
        avatar: this.$auth.user.avatar ? ENV.backendUrl + this.$auth.user.avatar : ENV.backendUrl + '/images/defaultAvatar.png',
        form: {
          firstName: this.$auth.user.firstName ? this.$auth.user.firstName : '',
          firstNameRules: [
            v => !!v || 'First name is required',
            v => v?.length >= 3 || 'The first name cannot contain less than 3 characters',
          ],
          lastName: this.$auth.user.lastName ? this.$auth.user.lastName : '',
          lastNameRules: [
            v => !!v || 'Last name is required',
            v => v?.length >= 3 || 'The last name cannot contain less than 3 characters',
          ],
          userName: this.$auth.user.userName ? this.$auth.user.userName : '',
          userNameRules: [
            v => v?.length >= 3 || 'The username cannot contain less than 3 characters',
          ],
          email: this.$auth.user.email ? this.$auth.user.email : '',
          emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
          ],
          phone: this.$auth.user.phone ? this.$auth.user.phone : '',
          phoneRules: [
            v => !!v || 'Phone is required',
            v => v?.length === 11 || 'Phone must be valid',
          ],
          company: this.$auth.user.company ? this.$auth.user.company : '',
          companyRules: [
            v => v?.length >= 3 || 'The company field cannot contain less than 3 characters',
          ],
          profession: this.$auth.user.company ? this.$auth.user.company : '',
          professionRules: [
            v => v?.length >= 3 || 'The profession field cannot contain less than 3 characters',
          ],
          city: this.$auth.user.city ? this.$auth.user.city : '',
          cityRules: [
            v => v?.length >= 3 || 'The city field cannot contain less than 3 characters',
          ],
          region: this.$auth.user.region ? this.$auth.user.region : '',
          regionRules: [
            v => v?.length >= 3 || 'The region field cannot contain less than 3 characters',
          ],
          street_line1: this.$auth.user.street_line1 ? this.$auth.user.street_line1 : '',
          street_line2: this.$auth.user.street_line2 ? this.$auth.user.street_line2 : '',
          streetLineRules: [
            v => v?.length >= 3 || 'The street field cannot contain less than 3 characters',
          ],
          defaultAmount: this.$auth.user.defaultAmount ? this.$auth.user.defaultAmount : '',
          defaultAmountRules: [
            v => v > 0 || 'The default amount field cannot contain less than 1',
          ],
          minimumAmount: this.$auth.user.minimumAmount ? this.$auth.user.minimumAmount : '',
          minimumAmountRules: [
            v => v > 0 || 'The minimum amount field cannot contain less than 1',
          ],
          welcomePhrase: this.$auth.user.welcomePhrase ? this.$auth.user.welcomePhrase : '',
          welcomePhraseRules: [
            v => v?.length >= 3 || 'The welcome phrase field cannot contain less than 3 characters',
          ],
          thankYouPhrase: this.$auth.user.thankYouPhrase ? this.$auth.user.thankYouPhrase : '',
          thankYouPhraseRules: [
            v => v?.length >= 3 || 'The thank you phrase field cannot contain less than 3 characters',
          ],
          saveMoneyUpForPhrase: this.$auth.user.saveMoneyUpForPhrase ? this.$auth.user.saveMoneyUpForPhrase : '',
          saveMoneyUpForPhraseRules: [
            v => v?.length >= 3 || 'The save up for phrase field cannot contain less than 3 characters',
          ],
          colorScheme: this.$auth.user.colorScheme ? this.$auth.user.colorScheme : '',

          birthDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

          enabledEmailNotification: true,
          enabledPushNotificationNewPayment: false,
          enabledPushNotificationNewPaymentWhatsApp: false,
          allowReviews: true,
        },
        tab: 0,
      }
    },
    methods: {
      ...mapMutations({
        setSmsTime: 'sms/setSmsTime',
        setErrors: 'error/setErrors',
        addError: 'error/addError',
      }),
      async saveClicked () {
        try {
          this.loading = true;
          let img = this.$refs.vueavatar.getImageScaled();
          await this.$axios.$post(`${ENV.backendUrl}/profile/upload`, {
            phone: this.$auth.user.phone,
            image: img.toDataURL()
          })
            .then((result) => {
              this.loading = false;
              if (result.success) {
                this.avatar = ENV.backendUrl + result.fileName;
                this.$auth.fetchUser();
                this.imageDialog = false;
              } else {
                if (result.errors) {
                  this.setErrors(result.errors);
                  this.imageDialog = false;
                }
                if (result.message) {
                  this.addError(result.message);
                }
                console.error(result);
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
      async resetAvatar () {
        try {
          this.loading = true;
          await this.$axios.$post(`${ENV.backendUrl}/profile/reset-avatar`, {phone: this.$auth.user.phone })
            .then((result) => {
              this.loading = false;
              if (result.success) {
                this.avatar = ENV.backendUrl + result.fileName;
                this.$auth.fetchUser();
              } else {
                if (result.errors) {
                  this.setErrors(result.errors);
                  this.imageDialog = false;
                }
                if (result.message) {
                  this.addError(result.message);
                }
                console.error(result);
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
      onImageReady () {
        this.borderRadius = 200;
      },
      async handleSubmit() {
        try {
          this.loading = true;
          this.form.phone = this.$auth.user.phone;

          await this.$axios.$post(`${ENV.backendUrl}/profile/update`, this.form)
            .then((result) => {
              this.loading = false;
              if (result.success) {
                this.$auth.fetchUser();
                alert(result.message);
              } else {
                if (result.errors) {
                  this.setErrors(result.errors);
                  this.confirmationDialog = false;
                  this.$auth.fetchUser();
                }
                if (result.message) {
                  this.addError(result.message);
                }
                console.error(result);
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
      async handleCodeSubmit() {
        try {
          this.loading = true;
          await this.$axios.$post(`${ENV.backendUrl}/profile/update-phone`, {
            code: this.code,
            phone: this.$auth.user.phone,
            newPhone: this.form.phone,
          })
            .then(async (result) => {
              this.loading = false;
              if (result.success) {
                this.confirmationDialog = false;

                await this.$auth.loginWith('local', { data: {
                    phone: this.form.phone,
                    password: this.password,
                  }})
                  .then((result) => {
                    this.loading = false;
                    if (result.data.success) {
                      this.$router.replace({ path: '/profile/edit' })
                    } else {
                      console.error(result.data.message);
                    }
                  })
                  .catch((error) => {
                    this.loading = false;
                    console.error(error);
                  });
              } else {
                if (result.errors) {
                  this.setErrors(result.errors);
                  this.confirmationDialog = false;
                }
                if (result.message) {
                  this.addError(result.message);
                }
                console.error(result);
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
      async resendSms() {
        this.loading = true;
        await this.$axios.$post(`${ENV.backendUrl}/notification/confirmation-sms`, this.form)
          .then((result) => {
            console.log(result);
            this.loading = false;

            this.smsSendPause = ENV.smsLifeTime;
            this.setSmsTime(this.$moment().unix());

            const id = setInterval(() => {
              this.smsSendPause -= 1;
              if (this.smsSendPause <= 0) {
                clearInterval(id)
              }
            }, 1000);

            if (!result.success) {
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
      async handlePasswordSubmit() {
        try {
          this.loading = true;
          await this.$axios.$post(`${ENV.backendUrl}/profile/update-password`, {
            phone: this.$auth.user.phone,
            newPassword: this.password,
            oldPassword: this.oldPassword,
          })
            .then(async (result) => {
              this.loading = false;
              if (result.success) {
                this.passwordDialog = false;
                this.$auth.fetchUser();
              } else {
                if (result.errors) {
                  this.setErrors(result.errors);
                  this.passwordDialog = false;
                }
                if (result.message) {
                  this.addError(result.message);
                }
                console.error(result);
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
      handlePhoneSubmit() {
        this.resendSms()
          .then(() => {
            this.phoneDialog = false;
            this.confirmationDialog = true;
          })
          .catch((error) => {
            console.error(error);
          });

      },
      handleConfirmPasswordSubmit() {
        this.confirmPasswordDialog = false;
        this.phoneDialog = true;
      },
      closePhoneDialog() {
        this.phoneDialog = false;
        this.form.phone = this.$auth.user.phone;
      },
      closeConfirmPasswordDialog() {
        this.confirmPasswordDialog = false;
        this.form.password = '';
      },
      validate () {
        this.$refs.form.validate()
      },
      validateCode () {
        this.$refs.codeForm.validate()
      },
      validatePassword () {
        this.$refs.passwordForm.validate()
      },
      validateConfirmPassword () {
        this.$refs.confirmPasswordForm.validate()
      },
      validatePhone () {
        this.$refs.phoneForm.validate()
      },
    }
  }
</script>

<style scoped>

  /* Avatar styles block*/
 .edit-profile-photo-block {
   display: flex;
   flex-direction: column;
   /*align-items: flex-start;*/
   padding: 34px 30px;

   background: #FFFFFF;
   border-radius: 12px;
 }

 .edit-profile-photo-block .avatar >>> .v-image__image {
   border-radius: 50%;
 }

 .edit-profile-photo-block .actions >>> .v-btn__content {
   align-items: end;
 }

 .edit-profile-photo-block .actions .v-btn {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    border-radius: 8px;
    text-transform: none;
    box-shadow: unset;
    height: 48px !important;
    letter-spacing: unset;
    background-color: #F0F2F9 !important;
 }
 /* Avatar styles block end*/


 /* Photo dialog */
 .upload-photo-dialog {
   border-radius: 12px;
 }

 .upload-photo-dialog >>> .v-toolbar__title {
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 20px;
   color: #475569;
 }

 .upload-photo-dialog >>> .v-card__text {
   background-size: cover;
 }

 .upload-photo-dialog .btn {
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   border-radius: 8px;
   text-transform: none;
   box-shadow: unset;
   width: 140px;
   max-width: 140px;
   height: 48px !important;
   min-width: unset !important;
   letter-spacing: unset;
 }

  @media screen and (max-width: 425px) {
    .upload-photo-dialog .btn {
      width: 110px;
      max-width: 110px;
    }

    .edit-profile-photo-block .actions .v-btn {
      padding: 0;
    }
  }

  @media screen and (max-width: 600px) {
    .edit-profile-photo-block .avatar >>> .v-image {
      max-width: 144px !important;
    }
  }
  /* end */

  /* Tabs */
  .tabs {

  }

  .tabs >>> .v-slide-group__content {
    flex: unset;
    gap: 30px;
  }

  .tabs >>> .v-slide-group__wrapper {
    border-bottom: 1px solid #E2E8F0;
  }

  .tabs >>> .v-tab {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #0666EB;
    letter-spacing: unset;
    text-transform: unset;
    padding: 0;
  }

  /*.tabs >>> .v-tab:not(:first-child) {*/
  /*  font-family: 'Roboto';*/
  /*  font-style: normal;*/
  /*  font-weight: 600;*/
  /*  font-size: 14px;*/
  /*  line-height: 20px;*/
  /*  color: #0666EB;*/
  /*  text-transform: unset;*/
  /*  padding: 0;*/
  /*}*/

  .tabs >>> .v-item-group {
    background: transparent !important;
  }

  .tabs >>> .v-slide-group__prev,
  .tabs >>> .v-slide-group__next {
    display: none !important;
  }

  /*  Tabs end*/

  /* Inputs */
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

  .notifications >>> .v-input--selection-controls__input:hover {
    color: transparent !important;
  }

  .notifications >>> .primary--text {
    /*color: transparent !important;*/
  }

  .notifications >>> .v-input--switch__track {
    color: #E2E8F0;
    opacity: 1;
  }

  .notifications >>> .v-input--switch__thumb {
    background: #FFFFFF;
  }

  .notifications >>> .v-input {
    margin-top: 0;
  }
  /* Inputs end*/

  .section-header {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #000000;
  }

  .phrases .btn,
  .personal-info .btn {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    border-radius: 8px;
    text-transform: none;
    box-shadow: unset;
    width: 100%;
    height: 48px !important;
    letter-spacing: unset;
  }

  .notifications-section {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #64748B;
    padding: 40px 0;
  }

  .notifications-section >>> .v-input--selection-controls {
    margin-top: 0;
    padding-top: 0;
  }

  .switch-group {
    display: flex;
    gap: 30px;
    flex-direction: column;
  }

  .switch-hint {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    color: #64748B;
    margin-left: 56px;
    margin-top: 8px;
  }

  .cursor-block {
    cursor: not-allowed;
  }

</style>
