<template>
  <div>
    <v-container style="max-width: 1440px">
      <v-row class="withdraw-money-step d-flex justify-lg-center">
        <v-col cols="12">
          <p class="block-title">{{ $t('how_to_start_withdraw_money_step_title') }}</p>
        </v-col>

        <v-col cols="12" sm="7">
          <v-row class="d-flex">
            <v-col cols="12">
              <v-col cols="12" md="10" lg="8">
                <v-sheet class="withdraw-money-sheet rounded-xl d-flex"
                         rounded>
                  <v-row class="d-flex justify-space-around align-center">
                    <v-col lg="2"
                           sm="3"
                           cols="12"
                           class="image-block d-flex justify-center">
                      <img src="../../static/img/pages/howToStart/withdraw-immediately-icon.png"
                           alt="Withdraw Immediately Icon"
                           class="icon">
                    </v-col>
                    <v-col lg="9"
                           sm="8"
                           cols="12">
                      <p class="withdraw-money-sheet-subtitle">{{ $t('how_to_start_withdraw_money_step_subtitle_1') }}</p>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-col>
            </v-col>

            <v-col cols="12" class="d-flex justify-center">
              <v-col cols="12" md="10" lg="8">
                <v-sheet class="withdraw-money-sheet rounded-xl d-flex"
                         rounded>
                  <v-row class="d-flex justify-space-around align-center">
                    <v-col lg="2"
                           sm="3"
                           cols="12"
                           class="image-block d-flex justify-center">
                      <img src="../../static/img/pages/howToStart/system-automated-icon.png"
                           alt="Automated Icon"
                           class="icon">
                    </v-col>
                    <v-col lg="9"
                           sm="8"
                           cols="12">
                      <p class="withdraw-money-sheet-subtitle">{{ $t('how_to_start_withdraw_money_step_subtitle_2') }}</p>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-col>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          sm="5"
          cols="12"
          class="flex-column justify-center img-block"
        >
          <img src="../../static/img/pages/howToStart/how-to-start-withdraw-money.png"
               alt="Withdraw Money"
               class="payments-step-img">
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "WithdrawMoneyStep"
  }
</script>

<style scoped>
  .withdraw-money-step {
    margin: 20px auto 100px;
    background-color: #2F80EE;
    color: #FFFFFF;
    border-radius: 30px;
    overflow: hidden;
    padding: 50px;
  }

  .payments-step-img {
    height: 100%;
    max-height: 370px;
    object-fit: cover;
  }

  .block-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
  }

  .withdraw-money-sheet {
    padding: 24px 30px;
    width: 100%;
    height: 100%;
  }

  .withdraw-money-sheet-subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #334155;
  }

  .icon {
    width: 52px;
    height: 52px;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media screen and (max-width: 1024px) {
    .withdraw-money-sheet-subtitle {
      font-size: 16px;
      line-height: 18px;
    }
  }

  @media screen and (max-width: 768px) {
    .withdraw-money-step {
      margin: 10px auto 50px;
    }

    .block-title {
      font-size: 36px;
      line-height: 44px;
    }
  }

  @media screen and (max-width: 600px) {
    .withdraw-money-step {
      padding: 30px 10px;
    }

    .payments-step-img {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 425px) {
    .block-title {
      font-size: 26px;
      line-height: 34px;
    }

    .withdraw-money-sheet-subtitle {
      font-size: 12px;
      line-height: 14px;
    }

    .icon {
      width: 40px;
      height: 40px;
    }
  }
</style>
