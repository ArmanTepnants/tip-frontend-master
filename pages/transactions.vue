<template>
  <v-container style="max-width: 1440px">
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="4">
        <div class="filter-block">
          <div style="width: 100%">
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

          <div>
            <h3>Type</h3>

            <v-btn-toggle v-model="type" class="mt-5" mandatory>
              <v-btn :value="'receipts'">
                Tip
              </v-btn>
              <v-btn :value="'withdraw'">
                Transfer
              </v-btn>
              <v-btn :value="'all'">
                All
              </v-btn>
            </v-btn-toggle>
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm="12" md="6" lg="8">
        <v-card :loading="loading" class="table" elevation="0">
          <v-card-title class="pt-10 px-8">
            Transactions
          </v-card-title>

          <v-card-text class="py-0 px-0">

            <v-data-table
              :headers="headers"
              :items="transactions"
              mobile-breakpoint="0"
            >
              <template v-slot:item.type="{ item }">
                <div class="d-flex" v-if="item.type === 'payment'">
                  <img
                    class="type-icon"
                    src="~/static/img/pages/profile/income.png"
                    alt="PNG"
                  />
                </div>
                <div class="d-flex" v-if="item.type === 'transfer' || item.type === 'withdraw'">
                  <img
                    class="type-icon"
                    src="~/static/img/pages/profile/withdraw.png"
                    alt="PNG"
                  />
                </div>
              </template>

              <template v-slot:item.amount="{ item }">
                <div class="font-weight-bold">
                  {{ item.amount }}
                </div>
              </template>

              <template v-slot:item.status="{ item }">
                <v-chip
                  class="m-0"
                  color="rgba(76, 157, 98, 0.2)"
                  text-color="#4C9D62"
                  border-radius="6px"
                >
                  <v-icon style="width: 24px">
                    mdi-check
                  </v-icon>
                  Done
                </v-chip>
              </template>

              <template v-slot:item.action="{ item }">
                <nuxt-link
                  class="link payment-page-link"
                  :to="localePath('/transfer')"
                >
                  Repeat
                </nuxt-link>
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
        loading: false,
        type: 'all',

        fromDatePickerMenu: false,
        toDatePickerMenu: false,
        dateFrom: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        dateTo: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

        dateStart: this.$moment().subtract(1, 'month').format("DD/MM/YYYY"),
        dateFinish: this.$moment().format("DD/MM/YYYY"),
        headers: [
          {
            text: 'Type',
            value: 'type',
            key: 'type',
            align: 'start',
          },
          {
            text: 'Date',
            value: 'date',
            //TODO: will be used in the future
            // filter: value => {
            //   return this.$moment(this.dateStart, "DD/MM/YYYY").unix() <= this.$moment(value, "DD/MM/YYYY").unix() && this.$moment(value, "DD/MM/YYYY").unix() <= this.$moment(this.dateFinish, "DD/MM/YYYY").endOf('day').unix()
            // },
            key: 'date',
            align: 'start',
          },
          {
            text: 'Time',
            value: 'time',
            key: 'time',
            align: 'start',
          },
          {
            text: 'Amount',
            value: 'amount',
            filter: value => {
              if (this.type === 'all') {
                return true;
              }
              if (this.type === 'withdraw') {
                return value.startsWith('-');
              }
              if (this.type === 'receipts') {
                return !value.startsWith('-');
              }
            },
            key: 'amount',
            align: 'start',
          },
          {
            text: 'Status',
            value: 'status',
            key: 'status',
            align: 'start',
          },
          {
            text: 'Action',
            key: 'action',
            value: 'action',
            align: 'start',
          },
        ],
        transactions: []
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
      getType(item) {
        if (item.type === 'payment') {
          return 'Payment'
        }
        if (item.type === 'transfer') {
          if (item.payer ===  this.$auth.user.number) {
            return 'for ' + item.receiverName
          }
          if (item.receiver ===  this.$auth.user.number) {
            return 'from ' + item.payerName
          }
        }
        if (item.type === 'withdraw') {
          return 'Withdraw'
        }
      },
      getAmount(item) {
        if (item.type === 'payment') {
          return item.amount + ' €'
        }
        if (item.type === 'transfer') {
          return '-' + item.amount + ' €'
        }
        if (item.type === 'withdraw') {
          return '-' + item.amount + ' €'
        }
      },
      async getTransactions() {
        this.loading = true;
        await this.$axios.$post(`${ENV.backendUrl}/get-transactions`, {
          number: this.$auth.user.number
        })
          .then((result) => {
            this.loading = false;

            result.transactions.forEach((transaction) => {
              this.transactions.push({
                date: this.$moment(transaction.paidAt).format("MMM D, YYYY"),
                time: this.$moment(transaction.paidAt).format("hh:mm"),
                amount: this.getAmount(transaction),
                type: transaction.type,
              });
            });
          })
          .catch((error) => {
            this.loading = false;
            console.error(error)
          });
      }
    },
    mounted() {
      this.getTransactions();
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
     min-width: 575px;
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

  .v-chip {
    border-radius: 8px;
    padding: 0 8px 0 4px;
  }

  .type-icon {
    width: 30px;
    height: 30px;
  }

  /* end */

  .link {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    color: #0666EB;text-decoration: unset;
  }

  .payment-page-link {
    font-size: 16px;
    line-height: 24px;
  }
</style>
