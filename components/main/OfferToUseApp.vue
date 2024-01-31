<template>
  <div :style="{ backgroundColor: background }">
    <v-container style="max-width: 1440px">
      <v-row class="offer-to-use-app d-flex justify-lg-center">
        <v-col cols="12" sm="7" class="text-block">
          <div class="sub-block">
            <p class="text-h4 text-md-h3 text-lg-h2 block-title">{{ $t('offer_to_use_app_title') }}</p>
            <div class="py-3 py-sm-4"></div>
            <p class="text-h6 text-lr-h5 block-subtitle">{{ $t('offer_to_use_app_subtitle') }}</p>
            <div class="py-2 py-sm-3"></div>
            <v-btn
              nuxt
              :to="localePath('/get-started')"
              class="btn"
            >
              {{ $t('get_started_btn') }}
            </v-btn>
          </div>
        </v-col>
        <v-col
          sm="5"
          cols="12"
          class="flex-column justify-center img-block d-none d-sm-flex"
        >
          <img src="../../static/img/pages/main/offerToUseApp/offer-to-use-app-1.png"
               alt="Offer"
               class="offer-to-use-app-img">
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "OfferToUseApp",
    props: {
      background: {
        type: String,
        default: '#F0F2F9'
      },
    }
  }
</script>

<style scoped>
  .offer-to-use-app {
    margin: 100px auto;
    position: relative;
    background-color: #256BFD;
    border-radius: 20px;
  }

  .img-block {
    border-radius: 20px;
    padding: unset;
  }

  .offer-to-use-app-img {
    height: 100%;
    max-height: 530px;
    object-fit: cover;
    border-radius: 20px;
  }

  .text-block {
    padding: 60px;
    margin: auto;
  }

  .sub-block {
    width: 400px;
    margin: auto;
  }

  .block-title {
    display: block;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 60px;
    line-height: 72px;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
  }

  .block-subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.2px;
    color: #FFFFFF;
  }

  .btn {
    display: flex;
    margin: auto;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0F172A;
    border-radius: 8px;
    text-transform: none;
    box-shadow: unset;
    width: 160px;
    height: 44px;
    letter-spacing: unset;
  }

  @media screen and (max-width: 1024px) {
    .offer-to-use-app {
      margin: 60px auto;
    }
    .sub-block {
      width: auto;
      margin: auto;
    }

    .block-title {
      line-height: 44px;
    }

    .block-subtitle {
      font-size: 16px;
      line-height: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    .offer-to-use-app {
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
