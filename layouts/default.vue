<template>
  <v-app dark>
    <AuthorizedNav v-if="$auth.loggedIn" />
    <Nav v-else />

    <v-main style="background: #F0F2F9">
      <v-container fluid class="center py-0 px-0" style="max-width: unset">
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
  data () {
    return {
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
