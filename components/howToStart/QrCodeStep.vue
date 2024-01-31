<template>
  <div>
    <v-container style="max-width: 1440px">
      <v-row class="qr-code-step d-flex justify-lg-center">
        <v-col cols="12" sm="7" class="main-block">
          <v-row class="d-flex">
            <v-col cols="12">
              <p class="block-title">{{ $t('how_to_start_qr_code_step_title_1') }}</p>
            </v-col>

            <v-col cols="12" md="12" lg="5" class="d-flex justify-center">
              <img src="../../static/img/pages/main/howItWorks/how-it-works-qr-code.png"
                   alt="Qr Code"
                   class="qr-code-step-img">
            </v-col>

            <v-col cols="12" md="12" lg="5" class="my-auto">
              <p class="block-subtitle pb-5">{{ $t('how_to_start_qr_code_step_subtitle_1') }}</p>

              <div class="d-flex justify-center justify-lg-start">
                <img src="../../static/img/icons/arrow.png"
                     alt="Arrow"
                     class="arrow-img mt-2">
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          sm="5"
          cols="12"
          class="flex-column justify-center img-block aux-block"
        >
          <v-row class="d-flex">
            <v-col cols="12" class="d-flex align-end justify-center">
              <p class="aux-block-title">{{ $t('how_to_start_qr_code_step_title_2') }}</p>
            </v-col>
            <v-col cols="12" class="px-lg-15">
              <p class="block-subtitle">{{ $t('how_to_start_qr_code_step_subtitle_2_1') }}</p>
              <p class="block-subtitle pb-5">{{ $t('how_to_start_qr_code_step_subtitle_2_2') }}</p>
            </v-col>
            <v-col cols="12" class="d-flex align-end justify-center">
              <img src="../../static/img/pages/howToStart/how-to-start-tablet.png"
                   alt="Tablet"
                   class="tablet-step-img">
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "QrCodeStep",
  }
</script>

<style scoped>
  .qr-code-step {
    margin: 20px auto;
    background-color: #2F80EE;
    color: #FFFFFF;
    border-radius: 30px;
    overflow: hidden;
  }

  .qr-code-step-img {
    height: 100%;
    max-height: 400px;
    object-fit: contain;
  }

  .tablet-step-img {
    height: 100%;
    max-height: 160px;
    object-fit: cover;
  }

  .arrow-img {
    width: 60px;
    height: 25px;
    transform: rotate(90deg);
  }

  .main-block {
    padding: 50px;
  }

  .aux-block {
    padding: 50px;
    border-radius: 30px;
    background-color: #FFFFFF;
    color: #1E293B;
  }

  .aux-block-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.2px;
    color: #0F172A;
  }

  .block-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
  }

  .block-subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
  }

  @media screen and (max-width: 768px) {
    .qr-code-step {
      margin: 10px auto;
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

  @media screen and (max-width: 425px) {
    .block-title {
      font-size: 26px;
      line-height: 34px;
    }

    .qr-code-step-img {
      max-width: 100%;
    }
  }
</style>
