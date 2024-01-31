<template>
  <div>
    <v-container style="max-width: 1440px">
      <div class="faq">
        <h2 class="text-h4 text-lg-h3 block-title font-weight-bold text-center">{{ $t('faq_title') }}</h2>
        <div class="py-4 py-sm-6"></div>

          <v-expansion-panels accordion>
            <v-expansion-panel
              v-for="(item, index) in itemsKeys"
              class="item"
              :key="index"
            >
              <v-expansion-panel-header class="item-title" disable-icon-rotate>>
                <template v-slot:default="{ open }">
                  <div class="d-flex">
                    <v-icon large class="mr-3">
                      <template v-if="open">mdi-chevron-up</template>
                      <template v-else>mdi-chevron-down</template>
                    </v-icon>
                    <p class="mb-0">
                      {{ $t(item.title) }}
                    </p>
                  </div>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="item-subtitle">
                {{ $t(item.subtitle) }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "Faq",
    data() {
      return {
        itemsKeys: [
          {
            title: 'faq_section_1_title',
            subtitle: 'faq_section_1_subtitle',
          },
          {
            title: 'faq_section_2_title',
            subtitle: 'faq_section_2_subtitle',
          },
          {
            title: 'faq_section_3_title',
            subtitle: 'faq_section_3_subtitle',
          },
          {
            title: 'faq_section_4_title',
            subtitle: 'faq_section_4_subtitle',
          },
          {
            title: 'faq_section_5_title',
            subtitle: 'faq_section_5_subtitle',
          },
          {
            title: 'faq_section_6_title',
            subtitle: 'faq_section_6_subtitle',
          },
          {
            title: 'faq_section_7_title',
            subtitle: 'faq_section_7_subtitle',
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .faq {
    margin: 100px auto;
  }

  .block-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    color: #18181B;
  }

  .item {
    padding: 25px 0;
    background: transparent !important;
    border-radius: unset;
  }

  .item:before {
    box-shadow: unset;
    border-bottom: 1px solid #CBD5E1;
  }

  .item >>> .v-expansion-panel-header {
    align-items: flex-end;
    padding: unset;
  }

  .item >>> .v-icon {
    top: -5px;
    align-items: unset;
  }

  .item >>> .v-expansion-panel-header__icon {
    display: none;
  }

  .item >>> .v-expansion-panel-content__wrap {
    padding: 0 10px 0px;
  }

  .item-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: #0F172A;
  }

  .item-subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.2px;
    color: #171725;
  }

  @media screen and (max-width: 1200px) {
    .faq {
      margin: 50px auto;
    }
  }

  @media screen and (max-width: 600px) {
    .item {
      padding: 15px 0;
    }

    .item-title {
      font-size: 20px;
    }

    .item-subtitle {
      font-size: 16px;
    }
  }
</style>
