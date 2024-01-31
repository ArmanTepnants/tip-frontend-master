<template>
  <div>
    <v-app-bar
      class="elevation-0"
      fixed
      app
      style="background: #FFFFFF; border-bottom: 1px solid #E5E5E5; z-index: 1001"
    >
      <v-container class="center">
        <v-img
          class="mr-10 logo"
          :src="require('~/static/img/footer/logo.png')"
          alt="Logo"
          max-height="40"
          max-width="95"
          @click="$router.push(localePath('/'))"
          contain
        ></v-img>

        <div v-if="!$device.isMobileOrTablet">
          <v-btn
            class="nav-menu-item"
            :to="localePath('/profile')"
            text
            nuxt
          >
            Profile
          </v-btn>

          <v-btn
            class="nav-menu-item"
            :to="localePath('/transactions')"
            text
            nuxt
          >
            Transactions
          </v-btn>

          <v-btn
            class="nav-menu-item"
            :to="localePath('/transfer')"
            text
            nuxt
          >
            Transfer
          </v-btn>

          <v-btn
            class="nav-menu-item"
            :to="localePath('/print')"
            text
            nuxt
          >
            Print
          </v-btn>

          <v-menu offset-y
                  transition="slide-y-transition"
                  content-class="v-menu-tools">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="nav-menu-item"
                text
                v-bind="attrs"
                v-on="on"
              >
                Company
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                class="tools-item"
                nuxt
                :to="localePath('/company/staff')"
              >
                <v-list-item-title style="z-index: 11">Employees</v-list-item-title>
              </v-list-item>
              <v-list-item
                class="tools-item"
                nuxt
                :to="localePath('/company/ratings')"
              >
                <v-list-item-title style="z-index: 11">Employee Ratings</v-list-item-title>
              </v-list-item>
              <v-list-item
                class="tools-item"
                nuxt
                :to="localePath('/company/transactions')"
              >
                <v-list-item-title style="z-index: 11">All Transactions</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <v-spacer />

        <v-menu transition="scroll-y-transition" offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-1 lang-btn my-auto"
              text
              v-bind="attrs"
              v-on="on"
            >
              <v-img
                v-if="!DISABLE_LOCALE_FLAG"
                class="mr-1 rounded-circle"
                :src="require('~/static/img/navigation/locales/' + $i18n.locale + '.svg')"
                alt="Country"
                height="14"
                width="14"
                cover
              ></v-img>

              {{ $i18n.localeProperties.name }}
            </v-btn>
          </template>
          <v-list class="py-0">
            <template v-for="(locale) in availableLocales">
              <v-list-item
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
                nuxt
                style="min-height: 36px"
              >
                <v-list-item-content
                  class="py-0 lang-btn justify-center"
                  style="cursor: pointer; flex-wrap: unset"
                >
                  <v-img
                    v-if="!DISABLE_LOCALE_FLAG"
                    class="mr-1 rounded-circle"
                    :src="require('~/static/img/navigation/locales/' + locale.code + '.svg')"
                    alt="Country"
                    height="14"
                    max-width="14"
                    cover
                  ></v-img>

                  {{ locale.name.toUpperCase() }}
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-menu>

        <v-btn
          class="sign-out-btn"
          @click="signOut"
          :style="{ backgroundColor: ' #0666EB' }"
          v-if="!$device.isMobileOrTablet"
        >
          <v-img
            class="mr-1"
            :src="require('~/static/img/navigation/exit-icon.svg')"
            height="16"
            width="16"
            contain
          ></v-img>
          Sign out
<!--          {{ $t('sign_out') }}-->
        </v-btn>

        <v-app-bar-nav-icon
          v-if="$device.isMobileOrTablet"
          @click.stop="drawer = !drawer"
        />
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      v-if="$device.isMobileOrTablet"
      width="220"
      app
      fixed
      :right="true"
      class="py-5 px-6"
    >
      <div class="d-flex justify-end">
        <v-btn icon @click="drawer = !drawer">
          <v-icon>
            mdi-window-close
          </v-icon>
        </v-btn>
      </div>

      <div class="sidebar">
        <v-list>
          <v-list-item
            class="my-2"
            :to="localePath('/profile')"
            nuxt
          >
            <v-list-item-content>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            class="my-2"
            :to="localePath('/transactions')"
            nuxt
          >
            <v-list-item-content>
              <v-list-item-title>Transactions</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            class="my-2"
            :to="localePath('/print')"
            nuxt
          >
            <v-list-item-content>
              <v-list-item-title>Print</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            class="my-2"
            :to="localePath('/transfer')"
            nuxt
          >
            <v-list-item-content>
              <v-list-item-title>Transfer</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-group class="my-2">
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-title>Company</v-list-item-title>
              </v-list-item>
            </template>

            <v-list-item :to="localePath('/company/staff')">
              <v-list-item-title>Employees</v-list-item-title>
            </v-list-item>
            <v-list-item :to="localePath('/company/ratings')" >
              <v-list-item-title>Employee Ratings</v-list-item-title>
            </v-list-item>
            <v-list-item :to="localePath('/company/transactions')">
              <v-list-item-title>All Transactions</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>

        <v-list class="mt-5">
          <v-list-item class="my-1 px-0">
            <v-btn
              class="sign-out-btn"
              @click="signOut"
              :style="{ backgroundColor: ' #0666EB', width: '100%', height: '44px' }"
            >
              <v-img
                class="mr-1"
                :src="require('~/static/img/navigation/exit-icon.svg')"
                height="16"
                width="16"
                contain
              ></v-img>
              Sign out
              <!--          {{ $t('sign_out') }}-->
            </v-btn>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    name: "AuthorizedNav",
    data () {
      return {
        DISABLE_LOCALE_FLAG: process.env.DISABLE_LOCALE_FLAG,
        title: "TipsSi",
        drawer: false,
      }
    },
    methods: {
      signOut() {
        this.$auth.logout()
          .then(() => {
            this.$router.push(this.localePath('/'));
          })
        .catch((error) => {
          console.error(error);
        });
      }
    },
    computed: {
      availableLocales() {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      }
    }
  }
</script>

<style scoped>
  .center {
    max-width: 1440px;
    display: flex;
  }

  .logo {
    cursor: pointer;
    margin: auto;
  }

  /deep/ .v-toolbar__content {
    padding: 4px 12px !important;
  }

  .nav-menu-item {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    color: #475569;
    text-transform: none;
  }

  .sign-out-btn {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    border-radius: 8px;
    text-transform: none;
    box-shadow: unset;
  }

  /deep/ .sign-up-btn.v-btn--active::before {
    opacity: 0;
  }

  /deep/ .v-btn__content {
    flex: unset;
  }

  /deep/ .sidebar .v-list-group__header {
    padding: 0;
  }

  /deep/ .sidebar .v-list-group__items .v-list-item {
    padding-left: 36px;
  }

  .lang-btn {
    font-family: 'Roboto';
    font-style: normal;
    letter-spacing: 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
  }

  .v-menu-tools {
    box-sizing: border-box;
    padding: 4px;
    gap: 2px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    box-shadow: 0 10px 22px rgba(45, 77, 108, 0.15);
    border-radius: 8px;
  }

  .tools-item:before {
    background-color: #F0F2F9;
    border-radius: 8px;
  }

  .tools-item:hover::before {
    opacity: 1 !important;
  }
</style>
