<template>
  <div :style="{ backgroundColor: background }">
    <v-container style="max-width: 1440px">
      <div class="content-block">
        <h2 class="text-sm-h3 text-h4 font-weight-bold text-center">{{ $t('how_it_works') }}</h2>
        <v-row class="d-flex justify-space-around mt-5 mt-sm-15">
          <v-col
            lg="4"
            sm="4"
            cols="12"
            class="d-flex flex-column align-lg-start align-center"
          >
            <v-sheet
              elevation="0"
              height="auto"
              max-width="370"
              class="how-it-works-sheet rounded-xl"
              :style="{ backgroundColor: blocksBackground }"
            >
              <img src="../../static/img/pages/main/howItWorks/how-it-works-registration.png"
                   alt="Registration image"
                   class="how-it-works-img">
              <div class="text-h5 my-6 counter-block">
                <span class="how-it-works-counter">01</span>
                <img src="../../static/img/icons/arrow.png"
                     alt="Arrow"
                     class="arrow-img">
              </div>
              <p class="how-it-works-title">{{ $t('registration') }}</p>
              <p class="how-it-works-text">{{ $t('registration_step') }}</p>
            </v-sheet>
          </v-col>

          <v-col
            lg="4"
            sm="4"
            cols="12"
            class="d-flex flex-column align-lg-center align-center"
          >
            <v-sheet
              elevation="0"
              height="auto"
              max-width="370"
              class="how-it-works-sheet rounded-xl"
              :style="{ backgroundColor: blocksBackground }"
            >
              <img src="../../static/img/pages/main/howItWorks/how-it-works-qr-code.png"
                   alt="Registration image"
                   class="how-it-works-img">
              <div class="text-h5 my-6 counter-block">
                <span class="how-it-works-counter">02</span>
                <img src="../../static/img/icons/arrow.png"
                     alt="Arrow"
                     class="arrow-img">
              </div>
              <p class="how-it-works-title">{{ $t('qr_code') }}</p>
              <p class="how-it-works-text">{{ $t('qr_code_step') }}</p>
            </v-sheet>
          </v-col>
          <v-col
            lg="4"
            sm="4"
            cols="12"
            class="d-flex flex-column align-lg-end align-center"
          >
            <v-sheet
              elevation="0"
              height="auto"
              max-width="370"
              class="how-it-works-sheet rounded-xl"
              :style="{ backgroundColor: blocksBackground }"
            >
              <img src="../../static/img/pages/main/howItWorks/how-it-works-payment.png"
                   alt="Registration image"
                   class="how-it-works-img">
              <div class="text-h5 my-6 counter-block">
                <span class="how-it-works-counter">03</span>
              </div>
              <p class="how-it-works-title">{{ $t('payment') }}</p>
              <p class="how-it-works-text">{{ $t('payment_step') }}</p>
            </v-sheet>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "HowDoesItWork",
    props: {
      background: {
        type: String,
        default: '#F0F2F9'
      },
      blocksBackground: {
        type: String,
        default: '#ffffff'
      }
    }
  }
</script>

<style scoped>
  .content-block {
    margin: 80px auto
  }

  .how-it-works-sheet {
    padding: 40px 35px;
  }

  .how-it-works-img {
    width: 100%;
    height: 450px;
    margin: auto;
    object-fit: contain;
  }

  .counter-block {
    display: flex;
    align-items: center;
    position: relative;
  }

  .arrow-img {
    width: 60px;
    height: 25px;

    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }

  .how-it-works-counter {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 75px;
    letter-spacing: 0.2px;
    color: #0666EB;
  }

  .how-it-works-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.2px;
    color: #0F172A;
  }

  .how-it-works-text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #1E293B;
  }

  @media screen and (max-width: 768px) {
    .content-block {
      margin: 60px auto
    }

    .how-it-works-img {
      height: 300px;
    }

    .how-it-works-counter {
      font-size: 40px;
      line-height: 44px;
    }

    .arrow-img {
      width: 40px;
      height: 14px;
    }

    .how-it-works-title {
      font-size: 20px;
      line-height: 24px;
    }

    .how-it-works-text {
      font-size: 14px;
      line-height: 18px;
    }
  }

</style>
