<template>
  <div style="background-color: #256BFD">
    <v-container style="max-width: 1440px">
      <div class="join-our-service">
        <div class="container-title">{{ $t('join_our_service_title') }}</div>

        <div class="py-4 py-sm-6"></div>

        <div class="container-subtitle px-10">{{ $t('join_our_service_subtitle') }}</div>

        <div class="py-4 py-sm-6"></div>

        <v-btn
          nuxt
          :to="localePath('/get-started')"
          class="btn"
        >
          {{ $t('get_started_btn') }}
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "JoinOurService",
  }
</script>

<style scoped>
  .join-our-service {
    margin: 120px auto;
  }

  .container-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 48px;
    color: #FFFFFF;
    text-align: center;
  }

  .container-subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
    text-align: center;
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
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    .join-our-service {
      margin: 50px auto;
    }
  }

  @media screen and (max-width: 425px) {
    .container-title {
      font-size: 34px;
      line-height: 32px;
    }

    .container-subtitle {
      font-size: 18px;
      line-height: 22px;
    }
  }
</style>
