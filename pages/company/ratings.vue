<template>
  <v-container style="max-width: 1440px">
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="4">
        <div class="filter-block">
          <div style="width: 100%">
            <div class="period mb-8">
              <div>
                <v-img
                  class="mr-3"
                  :src="require('~/static/img/pages/staff/average-rating.png')"
                  height="34"
                  width="34"
                  contain
                  alt="Average ratings"
                ></v-img>
              </div>
              Average rating for the period: <strong class="ml-1">{{ '0' }}</strong>
            </div>

            <h3>Date</h3>
            <v-row class="mt-3 md:my-0">
              <v-col cols="12" md="6" class="pb-0 pb-md-3">
                <v-menu
                  ref="fromDatePickerMenu"
                  v-model="fromDatePickerMenu"
                  :close-on-content-click="false"
                  :return-value.sync="dateFrom"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="dateFrom"
                      label="Date From"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="dateFrom"
                    no-title
                    scrollable
                  >
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      color="primary"
                      @click="fromDatePickerMenu = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.fromDatePickerMenu.save(dateFrom)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="12" md="6" class="pt-0 pt-md-3">
                <v-menu
                  ref="toDatePickerMenu"
                  v-model="toDatePickerMenu"
                  :close-on-content-click="false"
                  :return-value.sync="dateTo"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="dateTo"
                      label="Date To"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="dateTo"
                    no-title
                    scrollable
                  >
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      color="primary"
                      @click="toDatePickerMenu = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.toDatePickerMenu.save(dateTo)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>

            <v-tabs
              grow
              class="tabs"
              bg-color="indigo-darken-2"
            >
              <v-tab @click="todayFilter">
                Today
              </v-tab>
              <v-tab @click="weekFilter">
                Week
              </v-tab>
              <v-tab @click="monthFilter">
                Month
              </v-tab>
            </v-tabs>
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm="12" md="6" lg="8">
        <v-card :loading="loading" class="table" elevation="0">
          <v-card-title class="pt-10 px-8">
            Employee ratings
          </v-card-title>

          <v-card-text class="py-0 px-0">

            <v-data-table
              :headers="headers"
              :items="ratings"
              mobile-breakpoint="0"
            >
              <template v-slot:item.firstName="{ item }">
                <div class="d-flex align-center">
                  <div class="d-flex justify-center avatar mr-2">
                    <v-img
                      alt="Employee Avatar"
                      :src="backendUrl + $auth.user.avatar || '/images/defaultAvatar.png'"
                    ></v-img>
                  </div>
                  <div>
                    {{ item.firstName }}
                  </div>
                </div>
              </template>

              <template v-slot:item.rating="{ item }">
                <div class="rate">
                  {{ item.rating }}
                </div>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <div class="py-1"></div>
  </v-container>
</template>

<script>
import ENV from "~/OLD_env";

export default {
  layout: 'authorized',
  data() {
    return {
      backendUrl: ENV.backendUrl,
      loading: false,

      fromDatePickerMenu: false,
      toDatePickerMenu: false,
      dateFrom: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateTo: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

      dateStart: this.$moment().subtract(1, 'month').format("DD/MM/YYYY"),
      dateFinish: this.$moment().format("DD/MM/YYYY"),
      headers: [
        {
          text: 'First name',
          value: 'firstName',
        },
        {
          text: 'Last name',
          value: 'lastName',
        },
        {
          text: 'Date',
          value: 'date',
        },
        {
          text: 'Time',
          value: 'time',
        },
        {
          text: 'Average rating',
          value: 'rating',
        },
        {
          text: 'Comment',
          value: 'comment',
        },
      ],
      ratings: []
    }
  },
  methods: {
    todayFilter() {
      this.dateStart = this.$moment().format("DD/MM/YYYY");
      this.dateFinish = this.$moment().format("DD/MM/YYYY");
    },
    weekFilter() {
      this.dateStart = this.$moment().subtract(1, 'week').format("DD/MM/YYYY");
      this.dateFinish = this.$moment().format("DD/MM/YYYY");
    },
    monthFilter() {
      this.dateStart = this.$moment().subtract(1, 'month').format("DD/MM/YYYY");
      this.dateFinish = this.$moment().format("DD/MM/YYYY");
    },
    async getRatings() {
      this.loading = true;
      await this.$axios.$post(`${ENV.backendUrl}/get-ratings`, {
        number: this.$auth.user.number
      })
        .then((result) => {
          this.loading = false;
          this.ratings = result.ratings;
        })
        .catch((error) => {
          this.loading = false;
          console.error(error)
        });
    }
  },
  mounted() {
    this.getRatings();
  }
}
</script>

<style scoped>
  .filter-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 32px;
    gap: 50px;

    background: #FFFFFF;
    border-radius: 12px;
  }

  .tabs {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #475569;
  }

  .v-tabs >>> .v-slide-group__prev, .v-slide-group__next {
    display: none !important;
  }

  .v-tabs >>> .v-tab {
    min-width: unset;
    text-transform: none !important;
  }

  .v-tabs >>> .v-tab--active {
    color: #0666EB;
  }

  .v-btn >>> .v-btn__content {
    text-transform: none !important;
  }

  .v-btn {
    background-color: transparent !important;
    border-color: rgba(0, 0, 0, 0.12);
  }

  .v-btn.v-btn--active {
    background-color: #EEF5FF !important;
    color: #2F80EE;
  }

  .theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn--active {
    border: 1px solid #2F80EE !important;
  }

  .v-btn-toggle .v-btn:first-child {
    border-radius: 8px 0 0 8px !important;
  }

  .v-btn-toggle .v-btn:last-child {
    border-radius: 0 8px 8px 0 !important;
  }

  /* Table */

  .table, .v-data-table {
    box-shadow: unset;
    border-radius: 12px;
  }

  .theme--light.v-data-table >>> .v-data-table__wrapper .v-data-table-header {
    background-color: #F5F8FC;
  }

  .theme--light.v-data-table >>> .v-data-table__wrapper table {
    min-width: 640px;
  }

  .theme--light.v-data-table >>> .v-data-table__wrapper > table > thead > tr > th {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #64748B;
  }

  .theme--light.v-data-table >>> .v-data-table__wrapper > table > thead > tr > th:first-child,
  .theme--light.v-data-table >>> .v-data-table__wrapper > table > tbody > tr > td:first-child {
    padding-left: 32px;
  }

  .theme--light.v-data-table >>> .v-data-table__wrapper > table > thead > tr > th:last-child,
  .theme--light.v-data-table >>> .v-data-table__wrapper > table > tbody > tr > td:last-child {
    padding-right: 32px;
  }

  .avatar {
    width: 32px;
    height: 32px;
  }

  .avatar >>> .v-image__image {
    border-radius: 50%;
  }

  .rate {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #D97706;
  }

  .period {
    display: flex;
    background: #F5F8FC;
    border-radius: 8px;
    padding: 20px;
    align-items: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0F172A;
  }
</style>
