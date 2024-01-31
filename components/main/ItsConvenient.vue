<template>
  <div :style="{ backgroundColor: background }">
    <v-container style="max-width: 1440px">
      <div class="content-block">
        <h2 class="text-h4 text-sm-h3 text-lg-h2 title text-center">{{ $t('its_convenient') }}</h2>
        <v-row class="mt-5 mt-sm-15 d-flex justify-center">
          <v-col
            lg="6"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet class="convenient-sheet rounded-xl d-flex"
                     rounded
                     :style="{ backgroundColor: blocksBackground }">
              <v-row class="d-flex justify-space-around align-center">
                <v-col lg="2"
                       cols="3"
                       class="image-block"
                       :style="{ backgroundColor: iconsBackground }">
                  <img src="../../static/img/pages/main/convenient/its-convenient-clock.png"
                       alt="Timer Icon"
                       class="icon">
                </v-col>
                <v-col lg="9" cols="8">
                  <h4 class="convenient-sheet-title">{{ $t('instant_withdrawal') }}</h4>
                  <p class="mt-3 convenient-sheet-subtitle">{{ $t('instant_withdrawal_subtitle') }}</p>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>

          <v-col
            lg="6"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet class="convenient-sheet rounded-xl d-flex"
                     rounded
                     :style="{ backgroundColor: blocksBackground }">
              <v-row class="d-flex justify-space-around align-center">
                <v-col lg="2"
                       cols="3"
                       class="image-block"
                       :style="{ backgroundColor: iconsBackground }">
                  <img src="../../static/img/pages/main/convenient/its-convenient-privacy.png"
                       alt="Privacy Icon"
                       class="icon">
                </v-col>
                <v-col lg="9" cols="8">
                  <h4 class="convenient-sheet-title">{{ $t('privacy') }}</h4>
                  <p class="mt-3 convenient-sheet-subtitle">{{ $t('privacy_subtitle') }}</p>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>

          <v-col
            lg="6"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet class="convenient-sheet rounded-xl d-flex"
                     rounded
                     :style="{ backgroundColor: blocksBackground }">
              <v-row class="d-flex justify-space-around align-center">
                <v-col lg="2"
                       cols="3"
                       class="image-block"
                       :style="{ backgroundColor: iconsBackground }">
                  <img src="../../static/img/pages/main/convenient/its-convenient-print.png"
                       alt="Print Icon"
                       class="icon">
                </v-col>
                <v-col lg="9" cols="8">
                  <h4 class="convenient-sheet-title">{{ $t('printed_materials') }}</h4>
                  <p class="mt-3 convenient-sheet-subtitle">{{ $t('printed_materials_subtitle') }}</p>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>

          <v-col
            lg="6"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet class="convenient-sheet rounded-xl d-flex"
                     rounded
                     :style="{ backgroundColor: blocksBackground }">
              <v-row class="d-flex justify-space-around align-center">
                <v-col lg="2"
                       cols="3"
                       class="image-block"
                       :style="{ backgroundColor: iconsBackground }">
                  <img src="../../static/img/pages/main/convenient/its-convenient-control.png"
                       alt="Control Icon"
                       class="icon">
                </v-col>
                <v-col lg="9" cols="8">
                  <h4 class="convenient-sheet-title">{{ $t('transparency_control') }}</h4>
                  <p class="mt-3 convenient-sheet-subtitle">{{ $t('transparency_control_subtitle') }}</p>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>

          <v-col
            lg="6"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet class="convenient-sheet rounded-xl d-flex"
                     rounded
                     :style="{ backgroundColor: blocksBackground }">
              <v-row class="d-flex justify-space-around align-center">
                <v-col lg="2"
                       cols="3"
                       class="image-block"
                       :style="{ backgroundColor: iconsBackground }">
                  <img src="../../static/img/pages/main/convenient/its-convenient-security.png"
                       alt="Security Icon"
                       class="icon">
                </v-col>
                <v-col lg="9" cols="8">
                  <h4 class="convenient-sheet-title">{{ $t('payment_security') }}</h4>
                  <p class="mt-3 convenient-sheet-subtitle">{{ $t('payment_security_subtitle') }}</p>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>

          <v-col
            lg="6"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet class="convenient-sheet rounded-xl d-flex"
                     rounded
                     :style="{ backgroundColor: blocksBackground }">
              <v-row class="d-flex justify-space-around align-center">
                <v-col lg="2"
                       cols="3"
                       class="image-block"
                       :style="{ backgroundColor: iconsBackground }">
                  <img src="../../static/img/pages/main/convenient/its-convenient-mobile-app.png"
                       alt="Mobile App Icon"
                       class="icon">
                </v-col>
                <v-col lg="9" cols="8">
                  <h4 class="convenient-sheet-title">{{ $t('mobile_app') }}</h4>
                  <p class="mt-3 convenient-sheet-subtitle">{{ $t('mobile_app_subtitle') }}</p>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "ItsConvenient",
    props: {
      background: {
        type: String,
        default: '#ffffff'
      },
      blocksBackground: {
        type: String,
        default: '#F0F2F9'
      },
      iconsBackground: {
        type: String,
        default: '#ffffff'
      }
    }
  }
</script>

<style scoped>
  .content-block {
    margin: 80px auto
  }

  .title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 60px;
    line-height: 72px;
    color: #191C1E;
  }

  .convenient-sheet {
    padding: 24px 30px;
    width: 100%;
    height: 100%;
  }

  .convenient-sheet-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #0F172A;
  }

  .convenient-sheet-subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #334155;
  }

  .image-block {
    position: relative;
    width: 100px;
    height: 100px;
    background: #F0F2F9;
    border-radius: 16px;
  }

  .icon {
    width: 52px;
    height: 52px;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media screen and (max-width: 768px) {
    .content-block {
      margin: 60px auto
    }
  }

  @media screen and (max-width: 1024px) {
    .convenient-sheet-title {
      font-size: 16px;
      line-height: 18px;
    }

    .convenient-sheet-subtitle {
      font-size: 16px;
      line-height: 18px;
    }
  }

  @media screen and (max-width: 425px) {
    .convenient-sheet-title {
      font-size: 14px;
      line-height: 18px;
    }

    .convenient-sheet-subtitle {
      font-size: 12px;
      line-height: 14px;
    }

    .image-block {
      width: 70px;
      height: 70px;
    }

    .icon {
      width: 40px;
      height: 40px;
    }
  }
</style>
