<template>
  <v-app dark>
    <v-main style="background: #F0F2F9">
      <v-container fluid class="center py-0 px-0" style="max-width: unset">
        <nuxt />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<style scoped>
  .center {
    max-width: 1440px;
    margin: auto;
  }
</style>
