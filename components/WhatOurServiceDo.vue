<template>
  <div>
    <v-container style="max-width: 1440px">
      <div class="our-service">
        <h2 class="text-h4 text-lg-h3 block-title font-weight-bold text-center">{{ $t('what_does_our_service_do') }}</h2>
        <div class="py-4 py-sm-6"></div>
        <p class="text-h6 text-lr-h5 block-subtitle">{{ $t('often_guests_do_not_have_cash_or_small_denominations') }}</p>
        <v-row class="mt-5 mt-sm-15 d-flex justify-center">
          <v-col
            lg="5"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet class="block-sheet">
              <h4 class="block-sheet-title">{{ $t('easy_to_connect') }}</h4>
              <p class="mt-3 block-sheet-subtitle">{{ $t('easy_to_connect_subtitle') }}</p>
            </v-sheet>
          </v-col>

          <v-col
            lg="5"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet class="block-sheet">
              <h4 class="block-sheet-title">{{ $t('no_costs') }}</h4>
              <p class="mt-3 block-sheet-subtitle">{{ $t('no_costs_subtitle') }}</p>
            </v-sheet>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "WhatOurServiceDo",
  }
</script>

<style scoped>
  .our-service {
    margin: 100px auto;
  }

  .block-sheet {
    padding: 20px 24px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .block-sheet-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    text-align: center;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.2px;
    color: #0F172A;
  }

  .block-sheet-subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #0F172A;
  }

  .block-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    color: #18181B;
  }

  .block-subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #334155;
    max-width: 800px;
    margin: auto;
    line-height: 28px;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    .our-service {
      margin: 50px auto;
    }
  }
</style>
