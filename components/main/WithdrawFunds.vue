<template>
  <div>
    <v-container style="max-width: 1440px">
      <v-row class="withdraw-funds d-flex justify-lg-center">
        <v-col cols="12" sm="6" class="text-block">
          <p class="text-h4 text-lg-h3 block-title">{{ $t('withdraw_funds') }}</p>
          <div class="py-4 py-sm-6"></div>
          <p class="text-h6 text-lr-h5 block-subtitle">{{ $t('withdraw_funds_subtitle') }}</p>
        </v-col>
        <v-col
          sm="6"
          cols="12"
          class="d-flex flex-column justify-center img-block"
        >
          <img src="../../static/img/pages/main/withdrawFunds/withdraw-funds.png"
               alt="Tips"
               class="withdraw-funds-img">
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "WithdrawFunds",
  }
</script>

<style scoped>
  .withdraw-funds {
    margin: 100px auto;
    position: relative;
    background-color: #FFFFFF;
    color: #424242;
    border-radius: 20px;
  }

  .img-block {
    border-radius: 20px;
    padding: unset;
  }

  .withdraw-funds-img {
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  .text-block {
    padding: 60px;
    margin: auto;
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
  }

  @media screen and (max-width: 768px) {
    .withdraw-funds {
      margin: 50px auto;
    }
  }

  @media screen and (max-width: 425px) {
    .text-block {
      padding: 30px;
    }

    .block-subtitle {
      font-size: 18px;
    }
  }
</style>
