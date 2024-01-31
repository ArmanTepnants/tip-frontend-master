<template>
  <v-app dark>
    <AuthorizedNav />
    <v-main style="background: #F0F2F9">
      <div class="py-1"></div>

      <ProfileBar />

      <v-container fluid class="center px-0 py-0">
        <nuxt />
      </v-container>

      <v-snackbar
        v-model="hasError"
        :timeout="5000"
        top
        color="error"
      >
        {{$store.getters['error/firstError']}}
        <template v-slot:action="{ attrs }">
          <v-btn
            text
            v-bind="attrs"
            @click="clearErrors"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-main>

    <CookieControl />
    <Footer />
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  middleware: 'authorized',
  data () {
    return {
      title: "Tip",
      timeout: 3000,
    }
  },
  methods: {
    ...mapMutations({
      clearErrors: 'error/clearErrors'
    }),
  },
  computed: {
    hasError() {
      if (this.$store.getters['error/hasError']) {
        const id = setInterval(() => {
          this.clearErrors();
          clearInterval(id);
        }, this.timeout);
      }
      return !!this.$store.getters['error/hasError'];
    }
  }
}
</script>

<style scoped>
  .center {
    max-width: 1440px;
    margin: auto;
  }

  >>> .cookieControl__BarButtons button:nth-of-type(1) {
    display:none;
  }
</style>
