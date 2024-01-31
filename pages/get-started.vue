<template>
  <div>
    <v-container style="max-width: 1440px" class="content-block">
      <div class="container-title">{{ $t('sign_up') }}</div>

      <div class="py-3"></div>

      <div class="container-subtitle">{{ $t('get_started_description') }}</div>

      <div class="py-5"></div>

      <v-row class="d-flex justify-center">
        <v-col
          lg="3"
          md="4"
          sm="5"
          cols="6"
          class="d-flex flex-column align-lg-start align-center"
        >
          <v-sheet
            elevation="0"
            color="white"
            height="auto"
            class="get-started-sheet rounded-xl"
            v-bind:class="[ selectedType === 'recipient' ? 'active' : '']"
            @click="selectType('recipient')"
          >
            <p class="get-started-block-title">{{ $t('get_started_receiver_title') }}</p>
            <p class="get-started-block-subtitle">{{ $t('get_started_receiver_subtitle') }}</p>

            <img src="../static/img/getStarted/get-started-receiver.png"
                 alt="Receiver"
                 class="get-started-img">
          </v-sheet>
        </v-col>

        <v-col
          lg="3"
          md="4"
          sm="5"
          cols="6"
          class="d-flex flex-column align-lg-center align-center"
        >
          <v-sheet
            elevation="0"
            color="white"
            height="auto"
            class="get-started-sheet rounded-xl"
            v-bind:class="[ selectedType === 'administrator' ? 'active' : '']"
            @click="selectType('administrator')"
          >
            <p class="get-started-block-title">{{ $t('get_started_administrator_title') }}</p>
            <p class="get-started-block-subtitle">{{ $t('get_started_administrator_subtitle') }}</p>

            <img src="../static/img/getStarted/get-started-administrator.png"
                 alt="Administrator"
                 class="get-started-img">
          </v-sheet>
        </v-col>
      </v-row>

      <div class="py-6"></div>

      <v-btn
        nuxt
        :to="navigate()"
        class="btn"
        :style="{ backgroundColor: ' #0666EB' }"
        :disabled="!selectedType"
      >
        {{ selectedType === 'administrator' ? $t('join_as_administrator_btn') : $t('join_as_receiver_btn') }}
      </v-btn>
    </v-container>
  </div>
</template>

<script>
  export default {
    middleware: ['unauthorized'],
    //middleware: ['unauthorized', 'registration'],  Arman
    data() {
      return {
        selectedType: null,
      }
    },
    methods: {
      selectType(item) {
        this.selectedType = item
      },
      navigate() {
        const path = this.selectedType === 'recipient' ? 'sign-up-as-recipient' : 'sign-up-as-administrator'
        return this.localePath(`/users/${path}`)
      },
    }
  }
</script>

<style scoped>
  .content-block {
    margin: 50px auto
  }

  .container-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    text-align: center;
  }

  .container-subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
  }

  .get-started-sheet {
    height: 100% !important;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 40px 25px 20px;
    min-height: 250px;
    transition: all .4s ease;
    cursor: pointer;
  }

  .get-started-sheet:hover {
    transform: scale(1.03);
    transition: all .4s ease;
  }

  .active {
    background: #5999F2 !important;
    color: #FFFFFF !important;
  }

  .get-started-img {
    width: 100%;
    border-radius: 12px;
    object-fit: contain;
  }

  .get-started-block-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 10px;
  }

  .get-started-block-subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    height: inherit;
    line-height: 24px;
  }

  .btn {
    font-family: 'Roboto';
    display: flex;
    margin: auto;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    border-radius: 8px;
    text-transform: none;
    box-shadow: unset;
    width: 330px;
    height: 44px;
    letter-spacing: unset;
  }

  @media screen and (max-width: 768px) {
    .get-started-block-title {
      font-size: 20px;
      line-height: 24px;
    }

    .get-started-block-subtitle {
      font-size: 14px;
      line-height: 18px;
    }
  }

  @media screen and (max-width: 425px) {
    .btn {
      width: 100%;
    }

    .get-started-sheet {
      padding: 30px 10px 10px;
    }

    .get-started-block-title {
      font-size: 16px;
      line-height: 20px;
    }

    .get-started-block-subtitle {
      font-size: 12px;
      line-height: 16px;
    }
  }

</style>
