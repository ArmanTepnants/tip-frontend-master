<template>
  <div>
    <v-container style="max-width: 1440px">
      <div class="why-use-our-service">
        <div class="container-title">{{ $t('why_you_should_use_our_service') }}</div>

        <v-row class="mt-10 d-flex justify-center">
          <v-col
            md="3"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet class="block-sheet">
              <v-row class="d-flex justify-space-around">
                <v-col cols="12 d-flex">
                  <img src="../../static/img/pages/aboutUs/why-use-our-service-1.png"
                       alt="Check Circle"
                       class="block-sheet-image">
                </v-col>
                <v-col cols="12">
                  <p class="block-sheet-subtitle">{{ $t('why_you_should_use_our_service_l_1') }}</p>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>

          <v-col
            md="3"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet class="block-sheet">
              <v-row class="d-flex justify-space-around">
                <v-col cols="12 d-flex">
                  <img src="../../static/img/pages/aboutUs/why-use-our-service-2.png"
                       alt="Check Circle"
                       class="block-sheet-image">
                </v-col>
                <v-col cols="12">
                  <p class="block-sheet-subtitle">{{ $t('why_you_should_use_our_service_l_2') }}</p>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>

          <v-col
            md="3"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet class="block-sheet">
              <v-row class="d-flex justify-space-around">
                <v-col cols="12 d-flex">
                  <img src="../../static/img/pages/aboutUs/why-use-our-service-3.png"
                       alt="Check Circle"
                       class="block-sheet-image">
                </v-col>
                <v-col cols="12">
                  <p class="block-sheet-subtitle">{{ $t('why_you_should_use_our_service_l_3') }}</p>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>

          <v-col
            md="3"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet class="block-sheet">
              <v-row class="d-flex justify-space-around">
                <v-col cols="12 d-flex">
                  <img src="../../static/img/pages/aboutUs/why-use-our-service-4.png"
                       alt="Check Circle"
                       class="block-sheet-image">
                </v-col>
                <v-col cols="12">
                  <p class="block-sheet-subtitle">{{ $t('why_you_should_use_our_service_l_4') }}</p>
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
    name: "WhyUseOurService",
  }
</script>

<style scoped>
  .why-use-our-service {
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

  .block-sheet {
    padding: 20px 30px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    min-height: 220px;
    background: #FFFFFF;
  }

  .block-sheet-image {
    width: 40px;
    height: 40px;
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
    .why-use-our-service {
      margin: 50px auto;
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
