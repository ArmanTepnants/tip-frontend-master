<template>
  <div :style="{ backgroundColor: background }">
    <v-container style="max-width: 1440px">
      <v-row class="how-much-it-costs d-flex">
        <v-col cols="12" sm="6" md="5" class="text-block mt-sm-13">
          <p class="text-h4 text-sm-h3 text-lg-h2 block-title">{{ $t('how_much_is_it') }}</p>

          <div class="py-sm-2"></div>

          <p class="block-subtitle">{{ $t('service_commission') }}</p>
          <p class="block-subtitle">{{ $t('service_commission_subtitle_1') }}</p>
          <p class="block-subtitle">{{ $t('service_commission_subtitle_2') }}</p>
        </v-col>
        <v-col
          md="6"
          sm="6"
          cols="12"
          class="flex-column justify-center img-block d-none d-sm-flex"
        >
          <img
            src="../../static/img/pages/main/howMuchItCosts/how-much-it-costs-1.png"
            alt="How much it costs icon"
            class="how-much-it-costs-img"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "HowMuchItCosts",
    props: {
      background: {
        type: String,
        default: '#FFFFFF'
      },
    }
  }
</script>

<style scoped>
  .how-much-it-costs {
    justify-content: space-between;
    margin: 100px auto;
  }

  .img-block {
    border-radius: 20px;
    padding: unset;
  }

  .how-much-it-costs-img {
    object-fit: contain;
    border-radius: 20px;
    max-height: 570px;
  }

  .text-block {
    padding: unset;
  }

  .block-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 60px;
    line-height: 72px;
    color: #191C1E;
  }

  .block-subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #334155;
    margin: unset;
  }

  @media screen and (max-width: 1024px) {
    .how-much-it-costs {
      margin: 60px auto;
    }

    .block-title {
      line-height: 44px;
    }

    .block-subtitle {
      font-size: 16px;
      line-height: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    .how-much-it-costs {
      margin: 50px auto;
    }

    .block-subtitle {
      font-size: 14px;
      line-height: 20px;
    }
    .text-block {
      padding: 0 30px;
    }

    .block-title {
      line-height: 40px;
    }
  }
</style>
