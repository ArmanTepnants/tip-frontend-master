<template>
  <div>
    <v-container style="max-width: 1440px">
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="4">
          <div class="qr-code-block">
            <div class="text-center">
              <h2>Your personal QR code</h2>

              <vue-qrcode
                :value="this.frontendUrl + '/payment/' + number"
                :options="{ width: 1000 }"
                tag="img"
                class="qr-code-image"
              ></vue-qrcode>

              <p class="user-number font-weight-bold">{{number}}</p>

              <nuxt-link
                class="link payment-page-link"
                :to="localePath(/payment/ + number)"
              >
                Go to the payment page
              </nuxt-link>

              <div class="link share-link my-3" @click="copyToClipboard">
                <img
                  class="share-icon"
                  src="~/static/img/pages/profile/share.png"
                  alt="PNG"
                />
                Share link to pay
              </div>

              <div class="pay-details text-left">Printing with delivery in your city: choose a layout (business card, sticker, etc.) for printing, and you will be brought ready-made materials.</div>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="12" md="6" lg="8">
          <v-card :loading="loading" class="table" elevation="0">
            <v-card-title class="pt-10 px-8">
              Transactions
            </v-card-title>

            <v-card-text class="py-0 px-0">
              <v-simple-table :style="{ borderRadius: '12px' }">
                <template v-slot:default>
                  <thead>
                    <tr class="table-head">
                      <th class="text-left">
                        Type
                      </th>
                      <th class="text-left">
                        Date
                      </th>
                      <th class="text-left">
                        Time
                      </th>
                      <th class="text-left">
                        Amount
                      </th>
                      <th class="text-left">
                        Status
                      </th>
                      <th class="text-left">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr
                      v-for="(item, i) in transactions"
                      :key="i"
                    >
                      <td>
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
                      </td>
                      <td :style="{ minWidth: '120px' }">
                        {{ $moment(item.paidAt).format("MMM D, YYYY") }}
                      </td>
                      <td>{{ $moment(item.paidAt).format("hh:mm") }}</td>
                      <td class="font-weight-bold">{{ getAmount(item) }}€</td>
                      <td>
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
                      </td>
                      <td class="link table-action">
                        <nuxt-link
                          class="link payment-page-link"
                          :to="localePath('/transfer')"
                        >
                          Repeat
                        </nuxt-link>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="py-1"></div>
  </div>
</template>

<script>
  import VueQrcode from '@chenfengyuan/vue-qrcode';
  import ENV from "~/OLD_env";

  export default {
    layout: 'authorized',
    components: {
      VueQrcode
    },
    data() {
      console.log(this.$auth.user)
      return {
        loading: false,
        number: this.$auth.user.number ? this.$auth.user.number : '000-000-000',
        transactions: [],
        frontendUrl: ENV.frontendUrl
      }
    },
    methods: {
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
          return item.amount
        }
        if (item.type === 'transfer') {
          return '-' + item.amount
        }
        if (item.type === 'withdraw') {
          return '-' + item.amount
        }
      },
      async getTransactions() {
        this.loading = true;
        await this.$axios.$post(`${ENV.backendUrl}/get-transactions`, {
          number: this.$auth.user.number,
          limit: 10
        })
          .then((result) => {
            this.loading = false;
            this.transactions = result.transactions;
          })
          .catch((error) => {
            this.loading = false;
            console.error(error)
          });
      },
      async copyToClipboard() {
        const link = location.origin + '/payment/' + this.number
        await navigator.clipboard.writeText(link);
        alert("Link copied to clipboard");
      }
    },
    mounted() {
      this.getTransactions();
    }
  }
</script>

<style scoped>
  .qr-code-image {
    height: 300px;
    width: 300px;
  }

  .table {
    box-shadow: unset;
    border-radius: 12px;
  }

  .table-head {
    background-color: #F5F8FC;
  }

  .theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
    color: #64748B;
  }

  .theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th:first-child,
  .theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr > td:first-child {
    padding-left: 32px;
  }

  .theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th:last-child,
  .theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr > td:last-child {
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

  .qr-code-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 32px;
    gap: 50px;

    background: #FFFFFF;
    border-radius: 12px;
  }

  .qr-code-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 44px;

    background: #FFFFFF;
    border-radius: 12px;
  }

  .link {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    color: #0666EB;text-decoration: unset;
  }

  .share-icon {
    width: 12px;
    height: 12px;
  }

  .payment-page-link {
    font-size: 16px;
    line-height: 24px;
  }

  .share-link {
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
  }

  .table-action {
    font-size: 14px;
    line-height: 20px;
  }

  .pay-details {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    color: #475569;
  }

  @media screen and (max-width: 425px) {
    .qr-code-image {
      height: 200px;
      width: 200px;
    }
  }
</style>
