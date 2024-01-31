<template>
  <v-footer
    :absolute="true"
    class="footer d-flex justify-space-around"
    style="border-top: 1px solid #E5E5E5; padding: 0; height: 0"
    app
  >
    <v-container style="max-width: 100%; background: #FFFFFF">
      <v-row class="d-flex justify-space-between py-3 center">
        <v-col
          class="py-0 ma-auto"
          md="2"
          cols="12"
        >
          <nuxt-link :to="localePath('/')" class="d-flex justify-center justify-md-start">
            <img class="logo" src="../static/img/footer/logo.png" alt="Logo">
          </nuxt-link>
        </v-col>

<!--        <v-col-->
<!--          class="d-flex justify-center justify-sm-end markets"-->
<!--          lg="3"-->
<!--          md="6"-->
<!--          sm="6"-->
<!--          cols="12"-->
<!--        >-->
<!--          <a href="#" class="d-flex">-->
<!--            <img-->
<!--              src="../static/img/footer/apple_pay.svg"-->
<!--              alt="Apple App link"-->
<!--              class="pay-methods" />-->
<!--          </a>-->
<!--          <a href="#" class="d-flex justify-end">-->
<!--            <img-->
<!--              src="../static/img/footer/google_pay.svg"-->
<!--              alt="Google App link"-->
<!--              class="pay-methods ml-3" />-->
<!--          </a>-->
<!--        </v-col>-->

        <v-col
          class="d-flex my-auto"
          lg="9"
          md="10"
          cols="12"
        >
          <div class="details">
            <v-row class="d-flex justify-space-between">
              <v-col lg="3" md="3" sm="3" cols="12" class="d-flex justify-center justify-sm-start">
                <a class="d-flex">
                  <img src="../static/img/footer/organization.png"
                       alt="Company icon"
                       class="icon-img">
                  <span>HAY CONEXION S.L.</span>
                </a>
              </v-col>
              <v-col lg="3" md="3" sm="3" cols="12" class="d-flex justify-center justify-sm-start">
                <a class="d-flex"  href="tel: +34 617 145 050">
                  <img src="../static/img/footer/phone.svg"
                       alt="Phone icon"
                       class="icon-img">
                  <span>+34 617-145-050</span>
                </a>
              </v-col>
              <v-col lg="3" md="3" sm="3" cols="12" class="d-flex justify-center justify-sm-start">
                <a class="d-flex"  href="mailto:tipssi@tipssi.net">
                  <img src="../static/img/footer/email.svg"
                       alt="Email icon"
                       class="icon-img">
                  <span>tipssi@tipssi.net</span>
                </a>
              </v-col>
              <v-col lg="3" md="3" sm="3" cols="12" class="d-flex justify-center justify-sm-start">
                <a class="d-flex"  href="https://www.google.com/maps/@41.3880105,2.1611292,13z" target="_blank">
                  <img src="../static/img/footer/location.svg"
                       alt="Location icon"
                       class="icon-img">
                  <span class="text-14">Barcelona, Spain</span>
                </a>
              </v-col>
            </v-row>
          </div>
        </v-col>

        <v-col
          class="d-flex align-center justify-center justify-lg-end"
          lg="1"
          cols="12"
        >
          <div class="links">
            <a target="_blank"
               aria-label="Chat on WhatsApp"
               href="https://wa.me/34617145050">
              <img src="../static/img/footer/whatsapp.svg"
                   alt="Whatsapp"
                   class="icon-img">
            </a>
            <a href="#" target="_blank">
              <img src="../static/img/footer/facebook.svg"
                   alt="Facebook"
                   class="icon-img">
            </a>
            <a href="#" target="_blank">
              <img src="../static/img/footer/instagram.svg"
                   alt="Instagram"
                   class="icon-img">
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container style="max-width: 100%; background: #F8FAFC">
      <v-row class="d-flex justify-space-between center" style="height: 100%;">
        <v-col
          class="d-flex align-center copy-block align-sm-center py-2"
          lg="6"
          md="6"
          sm="6"
          cols="12"
        >
          <span>&copy; Copyright {{ new Date().getFullYear() }} by Hay Conexion. All Rights Reserved.</span>
        </v-col>

        <v-col
          class="d-flex justify-center align-start terms-links py-2"
          lg="6"
          md="6"
          sm="6"
          cols="12"
        >
          <v-row class="d-flex justify-space-between my-auto">
            <v-col lg="4" md="4" sm="4" cols="6" class="d-flex justify-start justify-sm-end text-sm-right">
              <nuxt-link class="d-flex" :to="localePath('/contact-us')">
                <span>Contact Us</span>
              </nuxt-link>
            </v-col>
            <v-col lg="4" md="4" sm="4" cols="6" class="d-flex justify-start justify-sm-end text-sm-right">
              <nuxt-link class="d-flex" :to="localePath('/privacy-policy')">
                <span>Privacy Policy</span>
              </nuxt-link>
            </v-col>
            <v-col lg="4" md="4" sm="4" cols="6" class="d-flex justify-start justify-sm-end text-sm-right">
              <nuxt-link class="d-flex" :to="localePath('/terms-and-conditions')">
                <span>Terms and Conditions</span>
              </nuxt-link>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: "Footer",
  }
</script>

<style scoped>
  .pay-methods {
    border-radius: 8px;
    height: fit-content;
  }

  .logo {
    width: 95px;
    cursor: pointer;
  }

  .icon-img {
    width: 20px;
    height: 20px;
    transition: all .2s ease-in-out;
  }
  .icon-img:hover {
    transform: scale(1.5);
    transition: all .2s ease-in-out;
  }

  .links {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .links a {
    font-size: 14px;
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

  .terms-links span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #000000;
  }

  .terms-links >>> v-col {

  }

  .copy-block span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #000000;
  }

  .terms-links a {
    text-decoration: none;
  }

  .markets a {
    width: 150px;
  }

  .center {
    max-width: 1440px;
    margin: -12px auto;
  }

  @media screen and (min-width: 1440px) {
    .footer >>> .Cookie {
      justify-content: inherit;
    }
  }

  @media screen and (max-width: 1264px) {
    .links {
      width: 300px;
    }
  }

  @media screen and (max-width: 600px) {
    .links {
      width: 300px;
      margin: auto;
    }
  }
</style>
