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
            class="nav-menu-item mx-2"
            v-for="(item, i) in items"
            :key="i"
            :to="localePath(item.link)"
            text
            nuxt
          >
            {{ $t(item.name) }}
          </v-btn>
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
          variant="text"
          class="sign-up-btn mx-1"
          nuxt
          :to="localePath('/get-started')"
          style="color: #0666EB"
          v-if="!DISABLED_REGISTRATION && !$device.isMobileOrTablet"
        >
          {{ $t('sign_up') }}
        </v-btn>

        <v-btn
          class="sign-in-btn ml-1"
          nuxt
          :to="localePath('/users/sign-in')"
          :style="{ backgroundColor: ' #0666EB' }"
          v-if="!$device.isMobileOrTablet"
        >
          {{ $t('sign_in') }}
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
            v-for="(item, i) in items"
            :key="i"
            :to="localePath(item.link)"
            nuxt
            class="my-2 px-2"
          >
            <v-list-item-content>
              <v-list-item-title>{{ $t(item.name) }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-list class="mt-5">
          <v-list-item class="my-1 px-0">
            <v-btn
              class="sign-in-btn"
              nuxt
              :to="localePath('/users/sign-in')"
              :style="{ backgroundColor: ' #0666EB', width: '100%', height: '44px' }"
            >
              {{ $t('sign_in') }}
            </v-btn>
          </v-list-item>

          <v-list-item class="my-1 px-0">
            <v-btn
              v-if="!DISABLED_REGISTRATION"
              variant="text"
              class="sign-up-btn"
              nuxt
              :to="localePath('/get-started')"
              style="width: 100%; color: #0666EB; height: 44px"
            >
              {{ $t('sign_up') }}
            </v-btn>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      DISABLE_LOCALE_FLAG: process.env.DISABLE_LOCALE_FLAG,
      DISABLED_REGISTRATION: process.env.DISABLE_REGISTRATION,
      drawer: false,
      title: "TipsSi",
      items: [
        {
          name: 'about_us',
          link: '/about',
        },
        {
          name: 'how_to_start',
          link: '/start',
        },
        {
          name: 'for_staff',
          link: '/staff',
        },
        {
          name: 'for_business',
          link: '/business',
        }
      ],
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

  .sign-in-btn, .sign-up-btn {
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

  .lang-btn {
    font-family: 'Roboto';
    font-style: normal;
    letter-spacing: 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
  }
</style>
