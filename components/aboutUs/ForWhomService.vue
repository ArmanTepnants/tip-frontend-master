<template>
  <div>
    <v-container style="max-width: 1440px" class="content-block">
      <div class="container-title">{{ $t('for_whom_this_service') }}</div>

      <div class="py-5"></div>

      <v-row class="d-flex justify-center">
        <v-col
          md="4"
          sm="5"
          cols="6"
          class="d-flex flex-column align-lg-start align-center"
        >
          <v-sheet
            elevation="0"
            color="white"
            height="auto"
            class="for-whom-service-sheet rounded-xl"
          >
            <img src="../../static/img/pages/aboutUs/business-owners-about-us.png"
                 alt="Business owners"
                 class="for-whom-service-img">

            <p class="for-whom-service-block-title mt-7 mb-5">{{ $t('for_whom_this_service_business_owners_title') }}</p>
            <p class="for-whom-service-block-subtitle">{{ $t('for_whom_this_service_business_owners_subtitle') }}</p>
          </v-sheet>
        </v-col>

        <v-col
          md="4"
          sm="5"
          cols="6"
          class="d-flex flex-column align-lg-center align-center"
        >
          <v-sheet
            elevation="0"
            color="white"
            height="auto"
            class="for-whom-service-sheet rounded-xl"
          >
            <img src="../../static/img/pages/aboutUs/staff-about-us.png"
                 alt="Staff of the institution"
                 class="for-whom-service-img">

            <p class="for-whom-service-block-title mt-7 mb-5">{{ $t('for_whom_this_service_staff_of_the_institution_title') }}</p>
            <p class="for-whom-service-block-subtitle">{{ $t('for_whom_this_service_staff_of_the_institution_subtitle') }}</p>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "ForWhomService",
  }
</script>

<style scoped>
  .content-block {
    margin: 100px auto
  }

  .container-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    text-align: center;
  }

  .for-whom-service-sheet {
    height: 100% !important;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 25px 25px 20px;
    min-height: 250px;
    transition: all .4s ease;
    cursor: pointer;
  }

  .for-whom-service-sheet:hover {
    transform: scale(1.03);
    transition: all .4s ease;
  }

  .for-whom-service-img {
    width: 100%;
    border-radius: 12px;
    object-fit: contain;
  }

  .for-whom-service-block-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    color: #18181B;
  }

  .for-whom-service-block-subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #334155;
    height: inherit;
  }

  @media screen and (max-width: 768px) {
    .content-block {
      margin: 50px auto
    }

    .for-whom-service-block-title {
      font-size: 20px;
      line-height: 24px;
    }

    .for-whom-service-block-subtitle {
      font-size: 14px;
      line-height: 18px;
    }
  }

  @media screen and (max-width: 425px) {
    .for-whom-service-sheet {
      padding: 30px 10px 10px;
    }

    .for-whom-service-block-title {
      font-size: 16px;
      line-height: 20px;
    }

    .for-whom-service-block-subtitle {
      font-size: 12px;
      line-height: 16px;
    }
  }
</style>
