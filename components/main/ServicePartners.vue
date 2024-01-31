<template>
  <div style="background-color: #ffffff">
    <v-container style="max-width: 1440px">
      <div class="service-partners">
        <h2 class="text-h4 text-lg-h3 block-title font-weight-bold text-center">{{ $t('service_partners') }}</h2>
        <div class="py-4 py-sm-6"></div>
        <p class="block-subtitle">{{ $t('service_partners_description') }}</p>

        <v-row class="d-flex justify-center mt-15">
          <v-col cols="6" sm="4" lg="2" class="item px-4 px-sm-8">
            <img src="../../static/img/pages/main/partners/img.png"
                 alt="Partner"
                 class="partner-img">
          </v-col>
          <v-col cols="6" sm="4" lg="2" class="item px-4 px-sm-8">
            <img src="../../static/img/pages/main/partners/img_1.png"
                 alt="Partner"
                 class="partner-img">
          </v-col>
          <v-col cols="6" sm="4" lg="2" class="item px-4 px-sm-8">
            <img src="../../static/img/pages/main/partners/img_2.png"
                 alt="Partner"
                 class="partner-img">
          </v-col>
          <v-col cols="6" sm="4" lg="2" class="item px-4 px-sm-8">
            <img src="../../static/img/pages/main/partners/img_3.png"
                 alt="Partner"
                 class="partner-img">
          </v-col>
          <v-col cols="6" sm="4" lg="2" class="item px-4 px-sm-8">
            <img src="../../static/img/pages/main/partners/img_4.png"
                 alt="Partner"
                 class="partner-img">
          </v-col>
          <v-col cols="6" sm="4" lg="2" class="item px-4 px-sm-8">
            <img src="../../static/img/pages/main/partners/img_5.png"
                 alt="Partner"
                 class="partner-img">
          </v-col>
<!--          <v-carousel-->
<!--            hide-delimiters-->
<!--            height="60px"-->
<!--            class="custom-carousel"-->
<!--          >-->
<!--            <v-carousel-item class="custom-carousel-item">-->
<!--              <img src="../../static/img/partners/img.png"-->
<!--                   alt="Partner"-->
<!--                   class="partner-img">-->
<!--              <img src="../../static/img/partners/img_1.png"-->
<!--                   alt="Partner"-->
<!--                   class="partner-img">-->
<!--              <img src="../../static/img/partners/img_2.png"-->
<!--                   alt="Partner"-->
<!--                   class="partner-img">-->
<!--              <img src="../../static/img/partners/img_3.png"-->
<!--                   alt="Partner"-->
<!--                   class="partner-img">-->
<!--              <img src="../../static/img/partners/img_4.png"-->
<!--                   alt="Partner"-->
<!--                   class="partner-img">-->
<!--              <img src="../../static/img/partners/img_5.png"-->
<!--                   alt="Partner"-->
<!--                   class="partner-img">-->
<!--            </v-carousel-item>-->

<!--            <v-carousel-item class="custom-carousel-item">-->
<!--            </v-carousel-item>-->
<!--          </v-carousel>-->
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "ServicePartners",
  }
</script>

<style scoped>
  .service-partners {
    margin: 100px auto;
  }

  /*.custom-carousel {*/
  /*  padding: unset;*/
  /*}*/

  /*.custom-carousel >>> .v-window__container {*/
  /*  padding: 0 100px;*/
  /*  flex-direction: row;*/
  /*}*/

  /*.custom-carousel-item {*/
  /*}*/

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
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.2px;
    color: #475569;
    margin: auto;
  }

  .item {
    align-items: center;
    display: flex;
    max-height: 70px;
  }

  .partner-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media screen and (max-width: 425px) {
    .item {
      padding: 15px 0;
    }
  }
</style>
