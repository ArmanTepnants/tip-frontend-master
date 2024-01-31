<template>
  <div :style="{ backgroundColor: background }">
    <v-container style="max-width: 1440px">
      <v-row
        class="how-to-pay d-flex justify-lg-center"
        :style="{ backgroundColor: blockBackground }"
      >
        <v-col
          sm="6"
          cols="12"
          class="d-flex flex-column justify-center img-block"
        >
          <img src="../../static/img/pages/main/howToPay/how-to-pay.png"
               alt="Payment"
               class="how-to-pay-img">
        </v-col>
        <v-col cols="12" sm="6" class="text-block">
          <p class="text-h4 text-lg-h3 block-title">{{ $t('how_to_pay') }}</p>
          <div class="py-4 py-sm-8"></div>
          <p class="text-h6 text-lr-h5 block-subtitle">{{ $t('how_to_pay_description') }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "HowToPay",
    props: {
      background: {
        type: String,
        default: '#ffffff'
      },
      blockBackground: {
        type: String,
        default: '#F0F2F9'
      }
    }
  }
</script>

<style scoped>
  .how-to-pay {
    margin: 100px auto;
    position: relative;
    color: #424242;
    border-radius: 20px;
  }

  .img-block {
    border-radius: 20px;
    background-color: #0666EB;
    padding: 95px 80px;
  }

  .how-to-pay-img {
    object-fit: contain;
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
    .how-to-pay {
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
