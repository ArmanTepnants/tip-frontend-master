<template>
  <div style="background-color: #ffffff">
    <v-container style="max-width: 1440px">
      <div class="our-vision-and-mission">
        <div class="container-title">{{ $t('our_vision_and_mission_title') }}</div>

        <div class="py-4 py-sm-6"></div>

        <div class="container-subtitle px-10 d-none d-md-block">{{ $t('our_vision_and_mission_subtitle_desktop_1') }}</div>
        <div class="container-subtitle px-10 d-none d-sm-flex d-md-none">{{ $t('our_vision_and_mission_subtitle_tablet') }}</div>

        <div class="py-sm-10"></div>

        <div class="block-title d-none d-md-block">{{ $t('our_vision_and_mission_subtitle_desktop_2') }}</div>

        <v-row class="mt-md-10 d-flex justify-center">
          <v-col
            lg="5"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet class="block-sheet">
              <v-row class="d-flex justify-space-around">
                <v-col lg="1" cols="2 d-flex justify-center">
                  <img src="../../static/img/pages/aboutUs/check-circle-about-us.png"
                       alt="Check Circle"
                       class="block-sheet-image">
                </v-col>
                <v-col lg="11" cols="10">
                  <p class="block-sheet-subtitle">{{ $t('our_vision_and_mission_block_1') }}</p>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>

          <v-col
            lg="5"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet class="block-sheet">
              <v-row class="d-flex justify-space-around">
                <v-col lg="1" cols="2 d-flex justify-center">
                  <img src="../../static/img/pages/aboutUs/check-circle-about-us.png"
                       alt="Check Circle"
                       class="block-sheet-image">
                </v-col>
                <v-col lg="11" cols="10">
                  <p class="block-sheet-subtitle">{{ $t('our_vision_and_mission_block_2') }}</p>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>

          <v-col
            lg="5"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet class="block-sheet">
              <v-row class="d-flex justify-space-around">
                <v-col lg="1" cols="2 d-flex justify-center">
                  <img src="../../static/img/pages/aboutUs/check-circle-about-us.png"
                       alt="Check Circle"
                       class="block-sheet-image">
                </v-col>
                <v-col lg="11" cols="10">
                  <p class="block-sheet-subtitle">{{ $t('our_vision_and_mission_block_3') }}</p>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>

          <v-col
            lg="5"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet class="block-sheet">
              <v-row class="d-flex justify-space-around">
                <v-col lg="1" cols="2 d-flex justify-center">
                  <img src="../../static/img/pages/aboutUs/check-circle-about-us.png"
                       alt="Check Circle"
                       class="block-sheet-image">
                </v-col>
                <v-col lg="11" cols="10">
                  <p class="block-sheet-subtitle">{{ $t('our_vision_and_mission_block_4') }}</p>
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
    name: "OurVisionAndMission",
  }
</script>

<style scoped>
  .our-vision-and-mission {
    margin: 100px auto;
  }

  .container-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 48px;
    color: #18181B;
    text-align: center;
  }

  .container-subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #334155;
    text-align: center;
  }

  .block-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #334155;
    text-align: center;
  }

  .block-sheet {
    padding: 20px 30px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    min-height: 160px;
    background: #F0F2F9;
  }

  .block-sheet-image {
    width: 32px;
    height: 32px;
  }

  .block-sheet-subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin: 0;
    line-height: 28px;
    color: #0F172A;
  }

  @media screen and (max-width: 768px) {
    .our-vision-and-mission {
      margin: 50px auto;
    }

    .block-sheet-subtitle {
      font-size: 18px;
      line-height: 24px;
    }

    .block-sheet {
      padding: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    .container-title {
      font-size: 30px;
      line-height: 36px;
    }

    .block-sheet-subtitle {
      font-size: 14px;
      line-height: 18px;
    }

    .block-sheet-image {
      width: 20px;
      height: 20px;
    }

    .block-sheet {
      padding: 20px 10px;
      min-height: 100px;
    }
  }
</style>
