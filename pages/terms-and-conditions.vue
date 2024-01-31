<template>
  <div>
    <v-container style="max-width: 1440px">
      <article
        style="background-color: #ffffff; border-radius: 12px"
        class="article my-2 px-4 px-sm-15 py-6 py-sm-15 mx-auto"
      >

        <!--Terms and Conditions-->
        <h4 class="mb-10 text-h4 font-weight-black" v-html="$t('terms_and_conditions__title')"></h4>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('terms_and_conditions__1_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('terms_and_conditions__1_1_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__1_2_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__1_2_subtitle_2')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__1_3_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__1_4_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('terms_and_conditions__2_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('terms_and_conditions__2_1_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__2_1_subtitle_2')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__2_2_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__2_3_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__2_4_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__2_4_subtitle_2')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('terms_and_conditions__3_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('terms_and_conditions__3_1_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__3_2_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('terms_and_conditions__4_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('terms_and_conditions__4_1_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('terms_and_conditions__5_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('terms_and_conditions__5_1_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__5_1_1_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__5_1_2_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__5_1_3_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__5_1_4_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__5_1_5_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__5_1_6_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__5_1_7_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('terms_and_conditions__6_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('terms_and_conditions__6_1_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__6_2_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__6_3_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__6_3_1_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__6_3_2_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__6_3_3_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__6_3_4_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__6_3_5_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__6_3_6_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__6_3_7_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__6_3_8_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__6_4_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('terms_and_conditions__7_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('terms_and_conditions__7_1_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__7_2_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__7_3_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__7_4_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__7_5_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('terms_and_conditions__8_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('terms_and_conditions__8_1_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__8_2_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('terms_and_conditions__9_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('terms_and_conditions__9_1_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__9_2_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__9_3_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__9_4_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__9_5_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('terms_and_conditions__10_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('terms_and_conditions__10_1_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__10_2_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__10_3_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__10_4_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__10_5_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__10_6_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__10_7_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('terms_and_conditions__11_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('terms_and_conditions__11_1_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__11_2_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__11_3_subtitle')"></p>
        <p class="my-2" v-html="$t('terms_and_conditions__11_4_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('terms_and_conditions__12_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('terms_and_conditions__12_1_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('terms_and_conditions__13_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('terms_and_conditions__13_1_subtitle')"></p>


        <!--Professional Terms and Conditions-->
        <h4 class="my-10 text-h4 font-weight-black" v-html="$t('professional_terms_and_conditions__title')"></h4>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('professional_terms_and_conditions__title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('professional_terms_and_conditions__1_1_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__1_2_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__1_2_subtitle_2')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__1_3_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__1_4_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('professional_terms_and_conditions__2_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('professional_terms_and_conditions__2_1_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__2_2_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__2_3_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__2_4_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('professional_terms_and_conditions__3_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('professional_terms_and_conditions__3_1_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__3_1_1_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__3_1_2_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__3_1_3_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__3_1_4_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__3_1_5_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__3_1_6_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__3_1_7_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__3_1_8_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__3_1_9_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__3_2_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__3_3_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__3_4_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('professional_terms_and_conditions__4_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('professional_terms_and_conditions__4_1_subtitle')"></p>
<!--        <p class="my-2" v-html="$t('professional_terms_and_conditions__4_1_1_subtitle')"></p>-->
        <p class="my-2" v-html="$t('professional_terms_and_conditions__4_1_2_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__4_1_3_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__4_2_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__4_2_1_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__4_2_2_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__4_2_3_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__4_2_4_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__4_2_5_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__4_2_6_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__4_2_7_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__4_3_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('professional_terms_and_conditions__5_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('professional_terms_and_conditions__5_1_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__5_2_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__5_3_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__5_4_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__5_5_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__5_5_1_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__5_5_2_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__5_5_3_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__5_6_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__5_6_1_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__5_6_2_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('professional_terms_and_conditions__6_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('professional_terms_and_conditions__6_1_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__6_2_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__6_2_1_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__6_2_2_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__6_3_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__6_4_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('professional_terms_and_conditions__7_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('professional_terms_and_conditions__7_1_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__7_2_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__7_3_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('professional_terms_and_conditions__8_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('professional_terms_and_conditions__8_1_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__8_1_1_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__8_2_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__8_2_1_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__8_2_2_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__8_3_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('professional_terms_and_conditions__9_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('professional_terms_and_conditions__9_1_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('professional_terms_and_conditions__10_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('professional_terms_and_conditions__10_1_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__10_2_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('professional_terms_and_conditions__11_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('professional_terms_and_conditions__11_1_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('professional_terms_and_conditions__12_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('professional_terms_and_conditions__12_1_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__12_2_subtitle')"></p>
        <p class="my-2" v-html="$t('professional_terms_and_conditions__12_3_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('professional_terms_and_conditions__13_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('professional_terms_and_conditions__13_1_subtitle')"></p>


        <!--Client Terms and Conditions-->
        <h4 class="my-10 text-h4 font-weight-black" v-html="$t('client_terms_and_conditions__title')"></h4>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('client_terms_and_conditions__1_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('client_terms_and_conditions__1_1_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__1_2_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__1_2_subtitle_2')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__1_3_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__1_4_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('client_terms_and_conditions__2_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('client_terms_and_conditions__2_1_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__2_2_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__2_2_1_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__2_2_2_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__2_3_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__2_4_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__2_5_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('client_terms_and_conditions__3_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('client_terms_and_conditions__3_1_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__3_2_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__3_3_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('client_terms_and_conditions__4_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('client_terms_and_conditions__4_1_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__4_2_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__4_3_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__4_4_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__4_4_1_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__4_4_2_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__4_5_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__4_6_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__4_7_subtitle')"></p>
<!--        <p class="my-2" v-html="$t('client_terms_and_conditions__4_8_subtitle')"></p>-->
        <p class="my-2" v-html="$t('client_terms_and_conditions__4_9_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__4_10_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__4_11_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('client_terms_and_conditions__5_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('client_terms_and_conditions__5_1_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__5_2_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('client_terms_and_conditions__6_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('client_terms_and_conditions__6_1_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__6_2_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__6_3_subtitle')"></p>
        <p class="my-2" v-html="$t('client_terms_and_conditions__6_4_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('client_terms_and_conditions__7_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('client_terms_and_conditions__7_1_subtitle')"></p>


        <!--Operator Terms-->
        <h4 class="my-10 text-h4 font-weight-black" v-html="$t('operator_terms__title')"></h4>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('operator_terms__1_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('operator_terms__1_title_1')"></p>
        <p class="my-2" v-html="$t('operator_terms__1_1_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__1_2_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__1_3_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__1_4_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__1_5_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__1_6_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('operator_terms__2_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('operator_terms__2_1_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('operator_terms__3_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('operator_terms__3_1_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__3_1_1_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__3_1_2_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__3_2_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__3_2_1_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__3_2_2_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__3_2_3_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__3_2_4_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__3_2_5_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__3_3_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__3_4_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__3_5_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__3_6_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__3_6_1_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__3_6_2_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('operator_terms__4_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('operator_terms__4_1_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__4_2_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__4_3_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__4_4_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__4_4_1_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__4_4_2_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__4_5_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__4_6_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('operator_terms__5_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('operator_terms__5_1_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__5_2_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__5_3_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__5_3_1_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__5_3_2_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__5_3_3_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__5_3_4_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__5_3_5_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__5_3_6_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__5_3_7_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('operator_terms__6_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('operator_terms__6_1_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__6_1_1_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__6_1_2_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__6_1_3_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__6_1_4_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__6_1_5_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('operator_terms__7_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('operator_terms__7_1_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__7_2_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__7_3_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('operator_terms__8_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('operator_terms__8_1_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__8_2_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__8_3_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__8_4_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__8_5_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('operator_terms__9_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('operator_terms__9_1_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__9_2_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__9_3_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__9_4_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__9_5_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__9_6_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__9_7_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__9_8_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('operator_terms__10_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('operator_terms__10_1_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__10_1_1_subtitle')"></p>
        <p class="my-2" v-html="$t('operator_terms__10_1_2_subtitle')"></p>

        <h5 class="my-3 text-h5">
          <strong v-html="$t('operator_terms__11_title')"></strong>
        </h5>

        <p class="my-2" v-html="$t('operator_terms__11_1_subtitle')"></p>
      </article>
    </v-container>
  </div>
</template>

<script>
  export default {
    layout: 'default'
  }
</script>

<style scoped>
  .article {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #475569;
  }
</style>
