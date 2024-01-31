<template>
  <div>
    <v-container style="max-width: 1440px">
      <v-row>
        <v-col cols="12" sm="6" md="4" offset-md="4">
          <v-card :loading="loading"
                  class="px-8 py-10"
                  elevation="0"
                  :style="{ borderRadius: '12px' }">
            <v-form
                ref="form"
                v-model="valid"
                @submit.prevent="createTransfer"
                lazy-validation
              >
              <v-card-text
                class="text-center px-0 py-0"
              >
                <div>
                  <h2>Transfer funds</h2>

                  <v-btn-toggle class="mt-5 mb-10 actions"
                                mandatory
                                color="primary"
                                variant="outlined"
                                v-model="withdrawType">
                    <v-btn :value="'bank'">
                      <v-img
                        class="mr-2"
                        :src="require('~/static/img/pages/transfer/' + (withdrawType === 'bank' ? 'selected-' : '') + 'bank.png')"
                        alt="Bank"
                        max-height="15"
                        max-width="15"
                        contain
                      ></v-img>
                      To Bank
                    </v-btn>
                    <v-btn :value="'account'">
                      <v-img
                        class="mr-2"
                        :src="require('~/static/img/pages/transfer/' + (withdrawType === 'account' ? 'selected-' : '') + 'account.png')"
                        alt="Bank"
                        max-height="15"
                        max-width="15"
                        contain
                      ></v-img>
                      To Account
                    </v-btn>
                  </v-btn-toggle>
                </div>


                <template v-if="withdrawType === 'bank'">
                  <div class="inputs">
                    <v-text-field
                      v-model="amount"
                      :rules="amountRules"
                      label="Transfer amount"
                      v-mask="'####'"
                      outlined
                      required
                      validate-on-blur
                    ></v-text-field>

                    <div class="iban">
                      <v-select
                        v-if="ibans.length > 0"
                        v-model="savedIban"
                        :items="ibans"
                        item-text="number"
                        item-value="number"
                        :rules="[v => !!v || 'Iban is required']"
                        label="Iban"
                        required
                      ></v-select>

                      <v-text-field
                        v-if="!savedIban || savedIban === 'New iban'"
                        v-model="iban"
                        :rules="ibanRules"
                        label="Your IBAN Number"
                        v-mask="'XXXXX XXXXX XXXXX XXXXX XXXXX XX'"
                        outlined
                        required
                        validate-on-blur
                      ></v-text-field>
                    </div>

                    <v-text-field
                      v-model="bic"
                      :rules="bicRules"
                      label="BIC"
                      v-mask="'XXXXXXXXXXX'"
                      outlined
                      required
                      validate-on-blur
                    ></v-text-field>

                    <v-checkbox
                      class="my-0 pt-0"
                      v-if="!savedIban || savedIban === 'New iban'"
                      v-model="rememberIban"
                      :label="'Save IBAN and add it in the service'"
                    ></v-checkbox>
                  </div>
                </template>
                <template v-else>
                  <div class="inputs">
                    <v-text-field
                      v-model="amount"
                      :rules="amountRules"
                      label="Transfer amount"
                      v-mask="'####'"
                      outlined
                      required
                      validate-on-blur
                    ></v-text-field>

                    <v-text-field
                      v-model="number"
                      label="User number"
                      v-mask="'###-###-###'"
                      outlined
                      required
                      validate-on-blur
                    ></v-text-field>

                    <v-text-field
                      v-model="recipientName"
                      :rules="recipientNameRules"
                      label="Name Recipient of the Transfer"
                      outlined
                      required
                      validate-on-blur
                    ></v-text-field>
                  </div>
                </template>
              </v-card-text>

              <v-card-actions class="px-0 py-0">
                <v-btn
                  class="btn"
                  :disabled="!valid || loading"
                  @click="validate"
                  type="submit"
                  block
                  :style="{
                    backgroundColor: '#0666EB !important',
                    color: '#FFFFFF !important'
                  }"
                >
                  Transfer
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4" class="notes d-none d-sm-block">
          <div class="mb-3" :style="{ color: '#64748B' }">
            <v-icon class="mr-3 ml-1" color="#94A3B8">mdi-information-outline</v-icon>
            Transfer conditions
          </div>
          <v-card :loading="loading" :style="{ borderRadius: '8px' }">

            <template v-if="withdrawType === 'bank'">
              <v-card-text :style="{ color: '#0F172A' }">
                <p class="font-weight-bold">Withdrawal conditions:</p>
                <p>1. Withdrawal to any bank card. Commission for the transfer is not charged.</p>
                <p>2. For one card number available to 15 transfers per day and 20 transfers per month.</p>
                <p>3. After requesting withdrawal, follow the status in the list of transactions. Usually withdrawal does not take more than 1 minute.</p>
              </v-card-text>
            </template>

            <template v-else>
              <v-card-text :style="{ color: '#0F172A' }">
                <p>You can transfer your funds in any amount to any tipssi.net user without a fee. Enter a personal code of the recipient, then enter the amount.</p>
                <p>Be careful when sending, transfers between users in the system are irreversible.</p>
              </v-card-text>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-snackbar
      v-model="snackbar"
    >
      Payment was successful.
      <template v-slot:action="{ attrs }">
        <v-btn
          class="btn"
          text
          v-bind="attrs"
          @click="snackbar = false"
          :style="{
            backgroundColor: '#0666EB !important',
            color: '#FFFFFF !important'
          }"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import ENV from "~/OLD_env";
import {mask} from "vue-the-mask";

export default {
  layout: 'authorized',
  directives: {mask},
  data() {
    return {
      backendUrl: ENV.backendUrl,
      valid: false,
      loading: false,
      snackbar: false,
      amount: null,
      amountRules: [
        v => !!v || 'Transfer amount is required',
        v => v >= 1 || 'Minimum amount 1 €',
      ],
      number: '',
      numberRules: [
        v => !!v || 'Number is required',
        v => v?.length > 9 || 'Number must be valid',
        v => v !== this.$auth.user.number || 'You cannot transfer funds to yourself',
      ],
      iban: '',
      ibanRules: [
        v => !!v || 'Iban is required',
        v => v?.length === 27 + 5 || 'The iban number must be valid',
      ],
      ibans: [],
      bic: '',
      bicRules: [
        v => !!v || 'BIC is required',
        v => v?.length === 11 || 'The iban number must be valid',
      ],
      recipientName: '',
      recipientNameRules: [
        v => !!v || 'Recipient name is required',
      ],
      savedIban: '',
      withdrawType: 'bank', // bank | account
      rememberIban: false,
      receiverUser: null,
    }
  },
  methods: {
    async createTransfer() {
      if (this.withdrawType === 'bank') {
        await this.createTransferToBank()
      } else {
        await this.createTransferToAccount()
      }
    },

    async createTransferToBank() {
      this.loading = true;
      await this.$axios.$post(`${ENV.backendUrl}/transfer/withdraw`, {
        payer: this.$auth.user.number,
        amount: this.amount,
        iban: this.iban,
        rememberIban: this.rememberIban,
        bic: this.bic,
      })
      .then(() => {
        this.$auth.fetchUser();
        this.resetCache();
        this.snackbar = true;
      })
      .catch((error) => {
        this.loading = false;
        console.error(error);
      });
    },

    async createTransferToAccount() {
      this.loading = true;

      await this.$axios.$post(`${ENV.backendUrl}/get-profile`, {
        number: this.number
      })
      .then(async (result) => {
        this.loading = false;

        if (result.success) {
          this.receiverUser = result.profile

          await this.$axios.$post(`${ENV.backendUrl}/transfer/between`, {
            amount: this.amount,
            receiver: this.number,
            username: this.recipientName,
            payer: this.$auth.user.number,
          })
          .then(() => {
            this.$auth.fetchUser();
            this.resetCache();
            this.snackbar = true;
          })
          .catch((error) => {
            this.loading = false;
            console.error(error);
          });
        } else {
          alert(result.message);
        }
      })
      .catch((error) => {
        this.loading = false;
        console.error(error)
      });
    },

    resetCache() {
      this.amount = null;
      this.number = '';
      this.iban = '';
      this.bic = '';
      this.recipientName = '';
      this.receiverUser = null;
      this.rememberIban = false;
      this.loading = false;
    },

    async getSavedIbans() {
      this.loading = true;
      this.fetching = true;
      await this.$axios.$post(`${ENV.backendUrl}/get-saved-ibans`, {
        number: this.$auth.user.number,
      })
        .then((result) => {
          this.loading = false;
          this.fetching = false;

          if (result.ibans.length > 0) {
            this.ibans = result.ibans;
            this.savedIban = result.ibans[0];
            this.ibans.push({ number: "New iban" });
          }
        })
        .catch((error) => {
          this.loading = false;
          this.fetching = false;
          console.error(error)
        });
    },
    validate () {
      this.$refs.form.validate()
    }
  },
  mounted() {
    this.getSavedIbans();

    setInterval(() => {
      console.log(this.bic)
    }, 3000)
  }
}
</script>

<style scoped>
  .centered-input >>> input {
    text-align: center
  }

  .v-btn >>> .v-btn__content {
    text-transform: none !important;
  }

  .actions .v-btn >>> .v-btn__content {
    align-items: unset;
  }

  .v-btn {
    background-color: transparent !important;
    border-color: rgba(0, 0, 0, 0.12);
    width: 50%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #475569;
  }

  .v-btn.v-btn--active {
    background-color: #EEF5FF !important;
    color: #2F80EE;
  }

  .theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn--active {
    border: 1px solid #2F80EE !important;
  }

  .v-btn-toggle {
    width: 100%;
  }

  .v-btn-toggle .v-btn:first-child {
    border-radius: 8px 0 0 8px !important;
  }

  .v-btn-toggle .v-btn:last-child {
    border-radius: 0 8px 8px 0 !important;
  }

  .inputs >>> .v-input__slot {
    height: 48px;
    border-radius: 8px;
    min-height: 48px;
  }

  .inputs >>> .v-text-field__details {
    padding-left: unset;
  }

  .inputs >>> .v-text-field--outlined fieldset {
    border-color: #ccc;
  }

  .inputs >>> .v-text-field--outlined fieldset:hover {
    border-color: #1e90ff;
  }

  .inputs >>> .v-text-field__slot .v-label {
    top: 14px !important;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #475569;
  }

  .inputs >>> .v-input__append-inner {
    margin-top: 12px !important;
  }

  .notes .v-icon {
    width: 18px;
    height: 18px;
  }

  .btn {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    border-radius: 8px;
    text-transform: none;
    box-shadow: unset;
    width: 240px;
    height: 48px !important;
    letter-spacing: unset;
  }

  .btn:disabled {
    opacity: 0.3;
  }


</style>
