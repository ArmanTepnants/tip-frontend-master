<template>
  <div style="background-color: #ffffff">
    <v-container style="max-width: 1440px">
      <div class="content-block">
        <h2 class="text-h4 text-sm-h3 text-lg-h2 block-title text-center">{{ $t('where_to_place_the_QR_code') }}</h2>
        <v-row class="blocks d-flex">
          <v-col
            md="4"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet
              class="qr-sheet"
              max-width="325"
              height="auto"
            >
              <img src="../../static/img/pages/main/setupQrCode/set-up-qr-code-1.png"
                   alt="Where to place the QR code"
                   class="qr-img">
              <div class="qr-sheet-text">
                {{ $t('attach_business_cards_to_the_counter') }}
              </div>
            </v-sheet>
          </v-col>

          <v-col
            md="4"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet
              class="qr-sheet"
              max-width="325"
              height="auto"
            >
              <img src="../../static/img/pages/main/setupQrCode/set-up-qr-code-2.png"
                   alt="Where to place the QR code"
                   class="qr-img">
              <div class="qr-sheet-text">
                {{ $t('qr_code_stickers_on_tables') }}
              </div>
            </v-sheet>
          </v-col>

          <v-col
            md="4"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet
              class="qr-sheet"
              max-width="325"
              height="auto"
            >
              <img src="../../static/img/pages/main/setupQrCode/set-up-qr-code-3.png"
                   alt="Where to place the QR code"
                   class="qr-img">
              <div class="qr-sheet-text">
                {{ $t('place_on_checks') }}
              </div>
            </v-sheet>
          </v-col>

          <v-col
            md="4"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet
              class="qr-sheet"
              max-width="325"
              height="auto"
            >
              <img src="../../static/img/pages/main/setupQrCode/set-up-qr-code-4.png"
                   alt="Where to place the QR code"
                   class="qr-img">
              <div class="qr-sheet-text">
                {{ $t('show_on_phone') }}
              </div>
            </v-sheet>
          </v-col>

          <v-col
            md="4"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet
              class="qr-sheet"
              max-width="325"
              height="auto"
            >
              <img src="../../static/img/pages/main/setupQrCode/set-up-qr-code-5.png"
                   alt="Where to place the QR code"
                   class="qr-img">
              <div class="qr-sheet-text">
                {{ $t('place_on_badge') }}
              </div>
            </v-sheet>
          </v-col>

          <v-col
            md="4"
            sm="6"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <v-sheet
              class="qr-sheet"
              max-width="325"
              height="auto"
            >
              <img src="../../static/img/pages/main/setupQrCode/set-up-qr-code-6.png"
                   alt="Where to place the QR code"
                   class="qr-img">
              <div class="qr-sheet-text">
                {{ $t('place_on_table_tents') }}
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "WhereSetUpQRCode",
  }
</script>

<style scoped>
  .content-block {
    margin: 100px auto;
  }

  .blocks {
    margin: 50px auto;
  }

  .block-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 60px;
    line-height: 72px;
    color: #191C1E;
  }

  .qr-sheet {
    min-width: 100%;
    background: #F0F2F9;
    border-radius: 14px;
    max-height: 340px;
  }

  .qr-img {
    width: 100%;
    height: 75%;
    border-radius: 14px;
    object-fit: cover;
  }

  .qr-sheet-text {
    display: flex;
    align-items: center;
    height: 20%;
    padding: 0 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.2px;
    color: #0F172A;
  }

  @media screen and (max-width: 1024px) {
    .qr-sheet-text {
      font-size: 20px;
      line-height: 24px;
    }

    .block-title {
      line-height: 40px;
    }
  }

  @media screen and (max-width: 600px) {
    .content-block {
      margin: 50px auto;
    }

    .blocks {
      margin: 20px auto;
    }
  }

  @media screen and (max-width: 425px) {
    .qr-sheet-text {
      font-size: 16px;
      line-height: 0;
    }
  }
</style>
