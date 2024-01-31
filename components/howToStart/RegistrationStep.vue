<template>
  <div>
    <v-container style="max-width: 1440px">
      <v-row class="registration-step d-flex justify-lg-center">
        <img src="../../static/img/pages/howToStart/substrate.png"
             alt="Substrate"
             class="substrate-img d-none d-sm-block">

        <v-col cols="12" style="z-index: 11" class="px-0">
          <div class="block-title">{{ $t('how_to_start_registration_step_title') }}</div>
        </v-col>

        <v-col cols="12" class="d-flex flex-column justify-center" >
          <v-row class="d-flex">
            <v-col cols="12" sm="4" class="text-block d-flex justify-center">
              <img src="../../static/img/pages/main/howItWorks/how-it-works-registration.png"
                   alt="Registration"
                   class="registration-step-img">
            </v-col>

            <v-col cols="12" sm="8" class="text-block">
              <v-col cols="12" sm="10" md="8" lg="6" class="pos-r">
                <p class="block-subtitle">{{ $t('how_to_start_registration_step_subtitle_1') }}</p>
                <p class="block-subtitle pb-5">{{ $t('how_to_start_registration_step_subtitle_2') }}</p>

                <div class="d-flex justify-center justify-sm-start">
                  <img src="../../static/img/icons/arrow.png"
                       alt="Arrow"
                       class="arrow-img mt-2">
                </div>
              </v-col>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "RegistrationStep",
  }
</script>

<style scoped>
  .registration-step {
    margin: 100px auto 20px;
    position: relative;
    background-color: #FFFFFF;
    color: #424242;
    border-radius: 20px;
    padding: 50px 50px 0;
    overflow: hidden;
  }

  .registration-step-img {
    height: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 20px;
  }

  .substrate-img {
    position: absolute;
    z-index: 1;
    width: 100%;
  }

  .arrow-img {
    width: 60px;
    height: 25px;
    transform: rotate(90deg);
  }

  .text-block {
    padding: 60px 60px 120px;
    margin: auto;
    z-index: 11;
  }

  .block-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    color: #0F172A;
  }

  .block-subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #1E293B;
  }

  @media screen and (max-width: 768px) {
    .registration-step {
      margin: 50px auto 10px;
      padding: 30px 30px 0;
    }

    .block-title {
      font-size: 36px;
      line-height: 44px;
    }

    .block-subtitle {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media screen and (max-width: 600px) {
    .registration-step {
      padding: 20px;
    }

    .text-block {
      padding: 10px 0;
    }
  }

  @media screen and (max-width: 425px) {
    .block-title {
      font-size: 26px;
      line-height: 34px;
    }

    .registration-step-img {
      max-width: 100%;
    }
  }
</style>
