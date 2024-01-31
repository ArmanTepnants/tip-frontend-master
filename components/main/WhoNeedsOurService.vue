<template>
  <div style="background-color: #ffffff">
    <v-container style="max-width: 1440px">
      <div class="our-service">
        <h2 class="text-h4 text-lg-h3 block-title font-weight-bold text-center">{{ $t('who_needs_our_service') }}</h2>
        <div class="py-4 py-sm-6"></div>
        <p class="text-h6 text-lr-h5 block-subtitle">{{ $t('who_needs_our_service_description') }}</p>

        <v-row class="d-flex justify-center mt-15">
          <v-col
            cols="6"
            sm="3"
          >
            <v-row class="mx-auto row-block">
              <div class="custom-col-2 custom-col"></div>

              <v-sheet
                elevation="0"
                class="our-service-sheet rounded-xl custom-col custom-col-5 bg-image"
                :style="{ backgroundImage: 'url(' + require('~/static/img/pages/main/ourService/waiters.png') + ')'}"
              >
                <div class="our-service-sheet-block">
                  <p class="our-service-sheet-title">{{ $t('waiters') }}</p>
                </div>
              </v-sheet>

              <v-sheet
                elevation="0"
                class="our-service-sheet rounded-xl custom-col custom-col-4 bg-image"
                :style="{ backgroundImage: 'url(' + require('~/static/img/pages/main/ourService/couriers.png') + ')'}"
              >
                <div class="our-service-sheet-block">
                  <p class="our-service-sheet-title">{{ $t('couriers') }}</p>
                </div>
              </v-sheet>

              <div class="custom-col-1 custom-col d-none d-sm-flex"></div>
            </v-row>
          </v-col>
          <v-col
            cols="6"
            sm="3"
          >
            <v-row class="mx-auto row-block">
              <div class="custom-col-1 custom-col"></div>

              <v-sheet
                elevation="0"
                class="our-service-sheet rounded-xl custom-col custom-col-4 bg-image"
                :style="{ backgroundImage: 'url(' + require('~/static/img/pages/main/ourService/musicians.png') + ')'}"
              >
                <div class="our-service-sheet-block">
                  <p class="our-service-sheet-title">{{ $t('musicians') }}</p>
                </div>
              </v-sheet>

              <v-sheet
                elevation="0"
                class="our-service-sheet rounded-xl custom-col custom-col-7 bg-image"
                :style="{ backgroundImage: 'url(' + require('~/static/img/pages/main/ourService/taxi-drivers.png') + ')'}"
              >
                <div class="our-service-sheet-block">
                  <p class="our-service-sheet-title">{{ $t('taxi_drivers') }}</p>
                </div>
              </v-sheet>
            </v-row>
          </v-col>

          <v-col
            cols="6"
            sm="3"
          >
            <v-row class="mx-auto row-block">
              <v-sheet
                elevation="0"
                class="our-service-sheet rounded-xl custom-col custom-col-7 bg-image"
                :style="{ backgroundImage: 'url(' + require('~/static/img/pages/main/ourService/doormen.png') + ')'}"
              >
                <div class="our-service-sheet-block">
                  <p class="our-service-sheet-title">{{ $t('doormen') }}</p>
                </div>
              </v-sheet>

              <v-sheet
                elevation="0"
                class="our-service-sheet rounded-xl custom-col custom-col-4 bg-image"
                :style="{ backgroundImage: 'url(' + require('~/static/img/pages/main/ourService/bartenders.png') + ')'}"
              >
                <div class="our-service-sheet-block">
                  <p class="our-service-sheet-title">{{ $t('bartenders') }}</p>
                </div>
              </v-sheet>

              <div class="custom-col-1 custom-col"></div>
            </v-row>
          </v-col>

          <v-col
            cols="6"
            sm="3"
          >
            <v-row class="mx-auto row-block">
              <div class="custom-col-1 custom-col d-none d-sm-flex"></div>

              <v-sheet
                elevation="0"
                class="our-service-sheet rounded-xl custom-col custom-col-4 bg-image"
                :style="{ backgroundImage: 'url(' + require('~/static/img/pages/main/ourService/maids.png') + ')'}"
              >
                <div class="our-service-sheet-block">
                  <p class="our-service-sheet-title">{{ $t('maids') }}</p>
                </div>
              </v-sheet>

              <v-sheet
                elevation="0"
                class="our-service-sheet rounded-xl custom-col custom-col-5 bg-image"
                :style="{ backgroundImage: 'url(' + require('~/static/img/pages/main/ourService/hairdressers.png') + ')'}"
              >
                <div class="our-service-sheet-block">
                  <p class="our-service-sheet-title">{{ $t('hairdressers') }}</p>
                </div>
              </v-sheet>

              <div class="custom-col-2 custom-col"></div>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "WhoNeedsOurService",
  }
</script>

<style scoped>
  .our-service {
    margin: 100px auto;
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
    max-width: 700px;
    margin: auto;
  }

  .row-block {
    display: flex;
    flex-direction: column;
    height: 960px;
  }

  .our-service-sheet {
    background-size: cover !important;
    display: flex;
    align-items: flex-end;
  }

  .our-service-sheet-block {
    width: 80%;
    margin: 20px auto;
    height: 80px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    display: flex;
    justify-content: center;
  }

  .our-service-sheet-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #0F172A;
    margin: unset;
  }

  .custom-col {
    width: 100%;
    margin: 2% auto;
    transition: all .4s ease;
  }

  .custom-col:hover {
    transform: scale(1.05);
    transition: all .7s ease;
  }

  .custom-col-1 {
    height: calc(8.3333333333% - 4%) !important;
  }

  .custom-col-2 {
    height: calc(16.6666666667% - 4%) !important;
  }

  .custom-col-4 {
    height: calc(33.3333333333% - 4%) !important;
  }

  .custom-col-5 {
    height: calc(41.6666666667% - 4%) !important;
  }

  .custom-col-7 {
    height: calc(58.3333333333% - 4%) !important;
  }

  @media screen and (max-width: 1200px) {
    .row-block {
      height: 650px;
    }

    .our-service-sheet-block {
      height: 60px;
    }

    .our-service-sheet-title {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 768px) {
    .our-service {
      margin: 50px auto;
    }

    .row-block {
      height: 500px;
    }

    .our-service-sheet-block {
      height: 40px;
    }

    .our-service-sheet-title {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 600px) {
    .row-block {
      flex-direction: unset;
    }

    .custom-col-2 {
      height: calc(16.6666666667% + 8.3333333333% - 4%) !important;
    }

    .block-subtitle {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 425px) {
    .row-block {
      height: 400px;
    }

    .our-service-sheet-block {
      margin: 10px auto;
    }

    .our-service-sheet-block {
      height: 30px;
    }

    .block-subtitle {
      font-size: 14px;
    }
  }
</style>
