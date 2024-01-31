<template>
  <div>
    <v-container style="max-width: 1440px">
      <article
        style="background-color: #ffffff; border-radius: 12px"
        class="article my-2 px-4 px-sm-15 py-6 py-sm-15 mx-auto"
      >
        <h4 class="mb-10 text-h4 font-weight-black" v-html="$t('privacy_policy__title')"></h4>

        <p class="my-2" v-html="$t('privacy_policy__title_1')"></p>
        <p class="my-2" v-html="$t('privacy_policy__title_2')"></p>
        <p class="my-2" v-html="$t('privacy_policy__title_3')"></p>

        <h5 class="mb-3 mt-8 text-h5">
          <strong v-html="$t('privacy_policy__1_title')"></strong>
        </h5>
        <p class="my-2" v-html="$t('privacy_policy__1_title_1')"></p>
        <p class="my-2" v-html="$t('privacy_policy__1_title_2')"></p>
        <p class="my-2" v-html="$t('privacy_policy__1_title_3')"></p>
        <p class="my-2" v-html="$t('privacy_policy__1_title_4')"></p>
        <p class="my-2" v-html="$t('privacy_policy__1_title_5')"></p>
        <p class="my-2" v-html="$t('privacy_policy__1_title_6')"></p>
        <p class="my-2" v-html="$t('privacy_policy__1_title_7')"></p>
        <p class="my-2" v-html="$t('privacy_policy__1_1_subtitle')"></p>

        <h5 class="mb-3 mt-8 text-h5">
          <strong v-html="$t('privacy_policy__2_title')"></strong>
        </h5>
        <p class="my-2" v-html="$t('privacy_policy__2_title_1')"></p>
        <p class="my-2" v-html="$t('privacy_policy__2_title_2')"></p>

        <ul class="pl-4">
          <li class="px-2" v-html="$t('privacy_policy__2_title_2_li_1')"></li>
          <li class="px-2" v-html="$t('privacy_policy__2_title_2_li_2')"></li>
          <li class="px-2" v-html="$t('privacy_policy__2_title_2_li_3')"></li>
          <li class="px-2" v-html="$t('privacy_policy__2_title_2_li_4')"></li>
          <li class="px-2" v-html="$t('privacy_policy__2_title_2_li_5')"></li>
          <li class="px-2" v-html="$t('privacy_policy__2_title_2_li_6')"></li>
          <li class="px-2" v-html="$t('privacy_policy__2_title_2_li_7')"></li>
        </ul>

        <p class="my-2" v-html="$t('privacy_policy__2_title_3')"></p>
        <p class="my-2" v-html="$t('privacy_policy__2_title_4')"></p>
        <p class="my-2" v-html="$t('privacy_policy__2_title_5')"></p>
        <p class="my-2" v-html="$t('privacy_policy__2_title_6')"></p>

        <h5 class="mb-3 mt-8 text-h5">
          <strong v-html="$t('privacy_policy__3_title')"></strong>
        </h5>
        <p class="my-2" v-html="$t('privacy_policy__3_title_1')"></p>

        <ul class="pl-4">
          <li class="px-2" v-html="$t('privacy_policy__3_title_1_li_1')"></li>
          <li class="px-2" v-html="$t('privacy_policy__3_title_1_li_2')"></li>
          <li class="px-2" v-html="$t('privacy_policy__3_title_1_li_3')"></li>
        </ul>

        <h5 class="mb-3 mt-8 text-h5">
          <strong v-html="$t('privacy_policy__4_title')"></strong>
        </h5>
        <p class="my-2" v-html="$t('privacy_policy__4_title_1')"></p>

        <ul class="pl-4">
          <li class="px-2" v-html="$t('privacy_policy__4_title_1_li_1')"></li>
          <li class="px-2" v-html="$t('privacy_policy__4_title_1_li_2')"></li>
          <li class="px-2" v-html="$t('privacy_policy__4_title_1_li_3')"></li>
        </ul>

        <h5 class="mb-3 mt-8 text-h5">
          <strong v-html="$t('privacy_policy__5_title')"></strong>
        </h5>
        <p class="my-2" v-html="$t('privacy_policy__5_title_1')"></p>

        <ul class="pl-4">
          <li class="px-2" v-html="$t('privacy_policy__5_title_1_li_1')"></li>
          <li class="px-2" v-html="$t('privacy_policy__5_title_1_li_2')"></li>
          <li class="px-2" v-html="$t('privacy_policy__5_title_1_li_3')"></li>
        </ul>

        <div class="my-4">
          <table class="text-sm">
            <tbody>
            <tr>
              <td class="border align-top">
                <p class="my-2">
                  <strong v-html="$t('privacy_policy__5_title_1_table_col_1_line_1')"></strong>
                </p>
              </td>
              <td class="border align-top">
                <p class="my-2">
                  <strong v-html="$t('privacy_policy__5_title_1_table_col_2_line_1')"></strong>
                </p>
              </td>
              <td class="border align-top">
                <p class="my-2">
                  <strong>
                    <strong v-html="$t('privacy_policy__5_title_1_table_col_3_line_1')"></strong>
                  </strong>
                </p>
              </td>
            </tr>
            <tr>
              <td class="border align-top">
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_1_line_2')"></p>
              </td>
              <td class="border align-top">
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_2_line_2_li_1')"></p>
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_2_line_2_li_2')"></p>
              </td>
              <td class="border align-top">
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_3_line_2')"></p>
              </td>
            </tr>
            <tr>
              <td class="border align-top">
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_1_line_3_ul')"></p>
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_1_line_3_li_1')"></p>
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_1_line_3_li_2')"></p>
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_1_line_3_li_3')"></p>
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_1_line_3_li_4')"></p>
              </td>
              <td class="border align-top">
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_2_line_3_li_1')"></p>
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_2_line_3_li_2')"></p>
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_2_line_3_li_3')"></p>
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_2_line_3_li_4')"></p>
              </td>
              <td class="border align-top">
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_3_line_3_li_1')"></p>
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_3_line_3_li_2')"></p>
              </td>
            </tr>
            <tr>
              <td class="border align-top">
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_1_line_4_ul')"></p>
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_1_line_4_li_1')"></p>
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_1_line_4_li_2')"></p>
              </td>
              <td class="border align-top">
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_2_line_4_li_1')"></p>
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_2_line_4_li_2')"></p>
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_2_line_4_li_3')"></p>
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_2_line_4_li_4')"></p>
              </td>
              <td class="border align-top">
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_3_line_4_li_1')"></p>
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_3_line_4_li_2')"></p>
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_3_line_4_li_3')"></p>
              </td>
            </tr>
            <tr>
              <td class="border align-top">
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_1_line_5')"></p>
              </td>
              <td class="border align-top">
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_2_line_5_li_1')"></p>
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_2_line_5_li_2')"></p>
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_2_line_5_li_3')"></p>
              </td>
              <td class="border align-top">
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_3_line_5_li_1')"></p>
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_3_line_5_li_2')"></p>
              </td>
            </tr>
            <tr>
              <td class="border align-top">
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_1_line_6')"></p>
              </td>
              <td class="border align-top">
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_2_line_6_li_1')"></p>
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_2_line_6_li_2')"></p>
              </td>
              <td class="border align-top">
                <p class="my-2" v-html="$t('privacy_policy__5_title_1_table_col_3_line_6')"></p>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <p class="my-2" v-html="$t('privacy_policy__5_title_2')"></p>
        <p class="my-2" v-html="$t('privacy_policy__5_title_3')"></p>
        <p class="my-2" v-html="$t('privacy_policy__5_title_4')"></p>
        <p class="my-2" v-html="$t('privacy_policy__5_title_5')"></p>

        <h5 class="mb-3 mt-8 text-h5">
          <strong v-html="$t('privacy_policy__6_title')"></strong>
        </h5>
        <p class="my-2" v-html="$t('privacy_policy__6_title_1')"></p>

        <ul class="pl-4">
          <li class="px-2" v-html="$t('privacy_policy__6_title_1_li_1')"></li>
          <li class="px-2" v-html="$t('privacy_policy__6_title_1_li_2')"></li>
        </ul>

        <h5 class="mb-3 mt-8 text-h5">
          <strong v-html="$t('privacy_policy__7_title')"></strong>
        </h5>
        <p class="my-2" v-html="$t('privacy_policy__7_title_1')"></p>
        <p class="my-2" v-html="$t('privacy_policy__7_title_2')"></p>

        <h5 class="mb-3 mt-8 text-h5">
          <strong v-html="$t('privacy_policy__8_title')"></strong>
        </h5>
        <p class="my-2" v-html="$t('privacy_policy__8_title_1')"></p>
        <p class="my-2" v-html="$t('privacy_policy__8_title_2')"></p>
        <p class="my-2" v-html="$t('privacy_policy__8_title_3')"></p>
        <p class="my-2" v-html="$t('privacy_policy__8_title_4')"></p>
        <p class="my-2" v-html="$t('privacy_policy__8_title_5')"></p>

        <h5 class="mb-3 mt-8 text-h5">
          <strong v-html="$t('privacy_policy__9_title')"></strong>
        </h5>
        <p class="my-2" v-html="$t('privacy_policy__9_title_1')"></p>
        <p class="my-2" v-html="$t('privacy_policy__9_title_2')"></p>

        <ul class="pl-4">
          <li class="px-2" v-html="$t('privacy_policy__9_title_2_li_1')"></li>
          <li class="px-2" v-html="$t('privacy_policy__9_title_2_li_2')"></li>
          <li class="px-2" v-html="$t('privacy_policy__9_title_2_li_3')"></li>
          <li class="px-2" v-html="$t('privacy_policy__9_title_2_li_4')"></li>
          <li class="px-2" v-html="$t('privacy_policy__9_title_2_li_5')"></li>
          <li class="px-2" v-html="$t('privacy_policy__9_title_2_li_6')"></li>
          <li class="px-2" v-html="$t('privacy_policy__9_title_2_li_7')"></li>
          <li class="px-2" v-html="$t('privacy_policy__9_title_2_li_8')"></li>
          <li class="px-2" v-html="$t('privacy_policy__9_title_2_li_9')"></li>
          <li class="px-2" v-html="$t('privacy_policy__9_title_2_li_10')"></li>
          <li class="px-2" v-html="$t('privacy_policy__9_title_2_li_11')"></li>
          <li class="px-2" v-html="$t('privacy_policy__9_title_2_li_12')"></li>
        </ul>
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

  .link {
    color: #475569;
    text-decoration: unset;
  }

  .align-top {
    vertical-align: top;
  }

  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
    min-width: 150px;
    padding: 5px 20px;
  }

  @media screen and (max-width: 600px) {
    table {
      font-size: 14px;
      line-height: 20px;
    }

    table, th, td {
      min-width: 70px;
      padding: 5px;
    }
  }

  @media screen and (max-width: 400px) {
    table {
      font-size: 10px;
      line-height: 14px;
    }
  }
</style>
