<template>
  <v-container class="main-container mt-15">

    <v-row justify="center" align="center">
      <v-col cols="12" md="6" sm="8" lg="4" class="text-center">
        <v-card :loading="loading" class="card-container">
          <template v-if="!loading">
            <div class="title">{{ thankYouPhrase }}</div>

            <div class="py-2"></div>

            <div class="details">{{ 'We got your tip!' }}</div>

            <div class="py-4"></div>

            <v-img
              :src="require('~/static/img/pages/payment/finish-payment.png')"
              max-height="240"
              max-width="240"
              class="mx-auto"
              contain
            ></v-img>

            <div class="py-4"></div>

            <v-btn
              class="btn"
              :to="localePath('/payment/' + this.$route.params.id)"
              :style="{ backgroundColor: ' #0666EB' }"
            >
              Leave a tip again
            </v-btn>
          </template>
        </v-card>
      </v-col>
    </v-row>

    <div class="py-11"></div>
  </v-container>
</template>

<script>
  import ENV from "~/OLD_env";

  export default {
    layout: 'empty',
    data() {
      return {
        loading: false,
        thankYouPhrase: 'Thanks for the tip!',
      }
    },
    async fetch() {
      this.loading = true;
      await this.$axios.$post(`${ENV.backendUrl}/get-profile`, {
        number: this.$route.params.id,
        language: this.$i18n.locale,
      })
        .then(async (result) => {
          this.loading = false;
          this.thankYouPhrase = result.translated ? result.translated.thankYouPhrase: result.profile.thankYouPhrase;
        })
        .catch((error) => {
          this.loading = false;
          console.error(error)
        });
    }
  }
</script>

<style scoped>
  .card-container {
    padding: 40px 30px;
    background: #FFFFFF;
    border-radius: 12px;
  }

  @media screen and (max-width: 425px) {
    .main-container {
      padding: 0 !important;
    }

    .card-container {
      width: 100%;
      padding: 40px 18px;
    }
  }

  .title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    align-items: center;
    text-align: center;
    color: #000000;
  }

  .title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    align-items: center;
    text-align: center;
    color: #000000;
  }

  .details {
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    align-items: center;
    text-align: center;
    color: #64748B;
  }

  .btn {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    padding: 10px 16px;
    border-radius: 8px;
    width: 100%;
    text-transform: unset;
    letter-spacing: 0;
    height: 44px;
    color: #FFFFFF;
  }
</style>
