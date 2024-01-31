<template>
  <div>
    <v-container style="max-width: 1440px">
      <v-row class="business-owners d-flex">
        <v-col cols="12" md="5" class="text-block">
          <p class="text-h5 text-sm-h3 text-lg-h2 block-title">{{ $t('for_business_owners') }}</p>

          <div class="py-sm-2"></div>

          <p class="block-subtitle">{{ $t('for_business_owners_subtitle_1') }}</p>

          <div class="py-sm-2"></div>

          <ul>
            <li class="list-item">{{ $t('for_business_owners_subtitle_2') }}</li>
            <li class="list-item">{{ $t('for_business_owners_subtitle_3') }}</li>
            <li class="list-item">{{ $t('for_business_owners_subtitle_4') }}</li>
          </ul>

          <div class="py-3 py-sm-4"></div>

<!--          //TODO: change route to admin sign up-->
          <v-btn
            nuxt
            :to="localePath('/get-started')"
            class="btn"
            :style="{ backgroundColor: ' #0666EB' }"
          >
            {{ $t('sign_up_as_administrator') }}
          </v-btn>

          <div class="py-4 py-sm-7"></div>

          <p class="notes">
            {{ $t('for_business_owners_subtitle_5') }}
          </p>
        </v-col>
        <v-col
          md="6"
          cols="12"
          class="flex-column justify-center img-block d-none d-md-flex"
        >
          <img
            src="../../static/img/pages/main/businessOwners/business-owners.png"
            alt="Owners"
            class="business-owners-img"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "BusinessOwners",
  }
</script>

<style scoped>
  .business-owners {
    justify-content: space-between;
    margin: 100px auto;
  }

  .img-block {
    border-radius: 20px;
    padding: unset;
  }

  .business-owners-img {
    height: 570px;
    object-fit: contain;
    border-radius: 20px;
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

  .block-subtitle, .list-item {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #334155;
  }

  .notes {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.2px;
    color: #475569;
  }

  .btn {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    border-radius: 8px;
    text-transform: none;
    box-shadow: unset;
    width: 240px;
    height: 44px;
    letter-spacing: unset;
  }

  ul {
    list-style: none;
  }

  li {
    position: relative;

    margin: 0 0 5px 0;
  }

  li::before {
    position: absolute;
    top: 10px;
    left: -15px;

    content: '';
    width: 6px;
    height: 6px;
    background-color: #334155;
    border: 1px solid #334155;
    border-radius: 50%;
  }

  @media screen and (max-width: 600px) {
    .business-owners {
      margin: 50px auto;
    }

    .block-subtitle, .list-item {
      font-size: 14px;
      line-height: 20px;
    }
    .notes {
      font-size: 12px;
      line-height: 18px;
    }

    .text-block {
      padding: 0 30px;
    }

    .block-title {
      line-height: 40px;
    }
  }
</style>
