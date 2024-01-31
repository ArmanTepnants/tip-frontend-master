<template>
  <div>
    <v-container style="max-width: 1440px">
      <div
        style="background-color: #ffffff; border-radius: 12px"
        class="my-2 mx-auto main-block"
      >
        <v-row class="d-flex justify-center my-0 mx-0">
          <v-col
            cols="12"
            md="7"
            class="d-flex px-5 px-sm-15 pt-5 pt-sm-15 pb-10 flex-column align-start"
          >
            <h4 class="mb-4 text-h4 font-weight-black">Contact Us</h4>

            <v-card elevation="0" :style="{ width: '100%' }">
              <v-form
                ref="form"
                v-model="valid"
                @submit.prevent="handleSubmit"
                lazy-validation
                class="form"
              >
                <v-card-text class="px-0 py-0">
                  <v-row class="d-flex justify-center">
                    <v-col
                      cols="12"
                      sm="6"
                      class="d-flex pb-0 pb-sm-3 flex-column align-lg-start align-center"
                    >
                      <v-text-field
                        v-model="fullName"
                        :rules="fullNameRules"
                        label="Full Name"
                        required
                        outlined
                        :style="{ width: '100%' }"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      class="d-flex pt-0 pt-sm-3 flex-column align-lg-start align-center"
                    >
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Email Address"
                        required
                        outlined
                        :style="{ width: '100%' }"
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-text-field
                    v-model="subject"
                    :rules="subjectRules"
                    label="Subject"
                    required
                    outlined
                  ></v-text-field>
                  <v-textarea
                    v-model="message"
                    :rules="messageRules"
                    label="Message"
                    required
                    outlined
                    no-resize
                  ></v-textarea>
                </v-card-text>

                <v-card-actions class="d-flex justify-space-between px-0 py-0 flex-wrap"
                                style="gap: 16px">
                  <div class="recaptcha">
                    <recaptcha />
                  </div>

                  <div class="buttons d-flex justify-end flex-wrap-reverse flex-sm-nowrap"
                       style="gap: 16px">
                    <v-btn
                      v-if="!isEmptyForm"
                      class="btn"
                      @click="clear"
                      block
                      :style="{
                        backgroundColor: '#F0F2F9 !important',
                      }"
                    >
                      Clear
                    </v-btn>
                    <v-btn
                      class="btn"
                      :disabled="!valid || loading"
                      @click="validate"
                      type="submit"
                      :style="{
                        backgroundColor: '#0666EB !important',
                        color: '#FFFFFF !important'
                      }"
                      block
                    >
                      Send Message
                    </v-btn>
                  </div>
                </v-card-actions>
              </v-form>
            </v-card>

            <v-row class="d-flex justify-center mt-10 details">
              <v-col
                cols="12"
                sm="4"
                class="d-flex flex-column align-center"
              >
                <a class="d-flex flex-column align-center"  href="https://www.google.com/maps/@41.3939724,2.1667585,13z" target="_blank">
                  <div class="circle">
                    <img src="../static/img/footer/organization.png"
                         alt="Company icon"
                         class="icon-img">
                  </div>
                  <span class="mt-5 d-block">
                    <strong>Address:</strong>
                    Hay Conexion SL. NIF B44872653
                    Consell de Cent 383, 1-1, 08009 Barcelona, Spain
                  </span>
                </a>
              </v-col>

              <v-col
                cols="12"
                sm="4"
                class="d-flex flex-column align-center"
              >
                <a class="d-flex flex-column align-center"  href="tel: +34 617 145 050">
                  <div class="circle">
                    <img src="../static/img/footer/phone.svg"
                         alt="Phone icon"
                         class="icon-img">
                  </div>
                  <span class="mt-5 d-block">
                    <strong>Phone:</strong> +34 617-145-050
                  </span>
                </a>
              </v-col>

              <v-col
                cols="12"
                sm="4"
                class="d-flex flex-column align-center"
              >
                <a class="d-flex flex-column align-center"  href="mailto:tipssi@tipssi.net">
                  <div class="circle">
                    <img src="../static/img/footer/email.svg"
                         alt="Email icon"
                         class="icon-img">
                  </div>
                  <span class="mt-5 d-block">
                    <strong>Email:</strong> tipssi@tipssi.net
                  </span>
                </a>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            cols="12"
            md="5"
            class="d-flex py-0 px-0 flex-column align-lg-start align-center"
            style="min-height: 400px"
          >
            <iframe
              style="height: 100%; width: 100%; border: 0; border-radius: 0 12px 12px 0"
              title="GoogleMaps"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              :src="googleMapsUrl">
            </iframe>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <v-snackbar
      v-model="snackbar"
      :timeout="3000"
      :color="snackbarColor"
    >
      {{ snackbarMessage }}
    </v-snackbar>
  </div>
</template>

<script>
  import ENV from '~/OLD_env';

  export default {
    layout: 'default',
    data() {
      return {
        snackbarColor: 'primary', // primary | red
        snackbar: false,
        snackbarMessage: '',
        valid: false,
        loading: false,
        fullName: '',
        fullNameRules: [
          v => !!v || 'Full name is required',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        subject: '',
        subjectRules: [
          v => !!v || 'Subject is required',
        ],
        message: '',
        messageRules: [
          v => !!v || 'Message is required',
        ],
      }
    },
    computed: {
      isEmptyForm() {
        return !this.fullName && !this.email && !this.subject && !this.message
      },
      googleMapsUrl() {
        return `https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}` +
          `&zoom=13&q=C.+del+Consell+de+Cent,+383,+1-1,+08009+Barcelona,+Spain`
      }
    },
    methods: {
      async handleSubmit() {
        this.resetSnackbarColor()
        if(await this.isValidRecaptcha()) {
          try {
            this.loading = true;

            const result = await this.$axios.$post(`${ENV.backendUrl}/send-feedback`, {
              fullName: this.fullName,
              email: this.email,
              subject: this.subject,
              message: this.message,
            })

            if (result.success) {
              this.clear()
              this.snackbar = true;
              this.snackbarMessage = 'Message sent successfully'
            } else {
              if (result.message) {
                this.snackbar = true;
                this.snackbarMessage = result.message
              }
            }

            await this.$recaptcha.reset()
          } catch (e) {
            this.snackbar = true;
            this.snackbarMessage = 'Something went wrong...'
          } finally {
            this.loading = false;
          }
        }
      },
      async isValidRecaptcha () {
        try {
          return await this.$recaptcha.getResponse()
        } catch (e) {
          this.snackbarColor = 'red'
          this.snackbarMessage = 'Complete the captcha to continue'
          this.snackbar = true;
          return false
        }
      },
      validate() {
        this.$refs.form.validate()
      },
      resetSnackbarColor() {
        this.snackbarColor = 'primary'
      },
      clear() {
        this.$refs.form.reset()
      },
    },
  }
</script>

<style scoped>
  .main-block {
    color: #475569;
  }

  .btn {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    border-radius: 8px;
    text-transform: none;
    box-shadow: unset;
    width: 150px;
    max-width: 150px;
    height: 40px !important;
    min-width: unset !important;
    letter-spacing: unset;
  }

  .circle {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: relative;
    background-color: #F0F2F9;
  }

  .icon-img {
    position: absolute;
    top: 22px;
    left: 22px;
    height: 26px;
    width: 26px;
  }

  .details {
    width: 100%;
  }

  .details a {
    text-decoration: none;
  }

  .details span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    display: flex;
    margin-left: 6px;
    align-items: center;
    color: #475569;
  }

</style>
