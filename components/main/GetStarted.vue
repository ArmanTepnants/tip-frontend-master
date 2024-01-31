<template>
<!--  <div style="background-color: #ffffff; min-height: 100vh">-->
  <div :style="{ backgroundColor: background }">
    <v-container style="max-width: 1440px">
      <div class="content-block">
        <v-row class="d-flex align-lg-center justify-lg-center">
          <v-col
            :sm="`${!hideImage ? '6' : '12'}`"
            cols="12"
          >
            <div class="main-block">
              <h1 class="main-title">{{ $t(titleKey) }}</h1>
              <h2 class="subtitle mt-6">{{ $t(subtitleKey) }}</h2>

              <v-btn
                nuxt
                :to="localePath('/get-started')"
                class="nav-link mt-12 btn"
                :style="{ backgroundColor: ' #0666EB' }"
              >
                {{ $t('get_started_btn') }}
              </v-btn>
            </div>

            <div v-if="!DISABLE_APPLICATION_BUTTONS && !hideApplicationsLinks">
              <a href="#">
                <img src="../../static/img/icons/app-store-v2.svg"
                     alt="Apple App link"
                     class="app-img">
              </a>
              <a href="#">
                <img src="../../static/img/icons/google-play-v2.svg"
                     alt="Google App link"
                     class="app-img ml-5">
              </a>
            </div>
          </v-col>

          <v-col
            sm="6"
            cols="12"
            class="d-none d-sm-flex"
            v-if="!hideImage"
          >
            <img :src="require(`~/static/img/${imagePath}.png`)"
                 alt="Application"
                 class="start-img">
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "GetStarted",
    props: {
      background: {
        type: String,
        default: '#FFFFFF'
      },
      titleKey: {
        type: String,
        default: 'accept_tips_from_the_card'
      },
      subtitleKey: {
        type: String,
        default: 'accept_tips_from_the_card_subtitle'
      },
      imagePath: {
        type: String,
        default: 'pages/main/getStartedSection/start-img'
      },
      hideImage: {
        type: Boolean,
        default: false
      },
      hideApplicationsLinks: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        DISABLE_APPLICATION_BUTTONS: process.env.DISABLE_APPLICATION_BUTTONS,
      }
    }
  }
</script>

<style scoped>
  .content-block {
    margin: 80px auto
  }

  .main-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 72px;
    letter-spacing: -0.04em;
    color: #0F172A;
  }

  .main-block {
    margin-bottom: 152px;
  }

  .subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #334155;
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
    width: 160px;
    height: 44px;
    letter-spacing: unset;
  }

  .app-img {
    width: 150px;
    height: 40px;
  }

  .start-img {
    max-height: 650px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media screen and (max-width: 768px) {
    .content-block {
      margin: 60px auto
    }

    .main-title {
      font-size: 50px;
      line-height: 52px;
    }

    .subtitle {
      font-size: 14px;
      line-height: 22px;
    }

    .applications {
      margin-top: 70px;
    }

    .app-img {
      width: 120px;
      height: 30px;
    }
  }

</style>
