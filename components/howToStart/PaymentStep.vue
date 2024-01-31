<template>
  <div>
    <v-container style="max-width: 1440px">
      <v-row class="payment-step d-flex justify-space-between">
        <v-col cols="12" sm="6" class="instruction-block d-flex custom-flex-width">
          <v-row class="d-flex">
            <v-col cols="12">
              <p class="block-title">{{ $t('how_to_start_payment_step_title_1') }}</p>
            </v-col>

            <v-col cols="12" md="12" lg="5" class="d-flex justify-center">
              <img src="../../static/img/pages/main/howItWorks/how-it-works-payment.png"
                   alt="Payment"
                   class="payment-step-img">
            </v-col>

            <v-col cols="12" md="12" lg="5" class="my-auto">
              <p class="block-subtitle">{{ $t('how_to_start_payment_step_subtitle_1_1') }}</p>
              <p class="block-subtitle pb-5">{{ $t('how_to_start_payment_step_subtitle_1_2') }}</p>

              <div class="d-flex justify-center justify-lg-start">
                <img src="../../static/img/icons/arrow.png"
                     alt="Arrow"
                     class="arrow-img mt-2">
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          sm="6"
          cols="12"
          class="d-flex img-block how-pay-block custom-flex-width mt-5 mt-sm-0"
        >
          <v-row class="d-flex" style="height: 100%">

            <v-col cols="12" md="6" class="d-flex flex-column mt-10">
              <p class="how-pay-block-title">{{ $t('how_to_start_payment_step_title_2') }}</p>
              <p class="how-pay-block-subtitle pb-5">{{ $t('how_to_start_payment_step_subtitle_2') }}</p>
            </v-col>

            <v-col cols="12" md="6" class="d-flex justify-center align-end">
              <img src="../../static/img/pages/howToStart/how-to-start-payments.png"
                   alt="Payment"
                   class="payment-step-img">
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "PaymentStep",
  }
</script>

<style scoped>
  .payment-step {
    margin: 20px auto;
    overflow: hidden;
  }

  .payment-step-img {
    height: 100%;
    max-height: 400px;
    object-fit: contain;
  }

  .arrow-img {
    width: 60px;
    height: 25px;
    transform: rotate(90deg);
  }

  .instruction-block {
    padding: 50px;
    border-radius: 30px;
    background-color: #FFFFFF;
  }

  .block-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    color: #0666EB;
  }

  .block-subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
  }

  .custom-flex-width {
    flex: 0 0 49%;
  }

  .how-pay-block {
    padding: 50px;
    border-radius: 30px;
    background-color: #64748B;
  }

  .how-pay-block-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.2px;
    color: #FFFFFF;
  }

  .how-pay-block-subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #FFFFFF;
  }

  @media screen and (max-width: 768px) {
    .payment-step {
      margin: 10px auto;
    }

    .payment-step-img {
      max-width: 100%;
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
    .custom-flex-width {
      flex: unset;
    }
  }

  @media screen and (max-width: 425px) {
    .block-title {
      font-size: 26px;
      line-height: 34px;
    }
  }
</style>
