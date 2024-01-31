<template>
  <v-container v-if="!fetching && user" class="main-container mt-15">
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card class="card-container">
          <v-card-text class="text-center px-0 py-0">
            <div class="recipient-information d-flex justify-space-between pb-5">
              <div class="d-flex">
                <v-avatar
                  size="56"
                  style="border: 1px solid rgba(0, 0, 0, 0.2)"
                >
                  <img
                    alt="Avatar"
                    :src="backendUrl + user.avatar || '/images/defaultAvatar.png'"
                  >
                </v-avatar>

                <div class="recipient-information-details ml-5">
                  <p class="recipient-information-details-name">{{user.firstName}} {{user.lastName}}</p>
                  <p class="recipient-information-details-position">Waiter</p>
                  <p class="recipient-information-details-description">{{welcomePhrase}}</p>
                </div>
              </div>

              <v-avatar
                size="56"
                style="border: 1px solid rgba(0, 0, 0, 0.2)"
                v-if="true"
              >
                <img
                  alt="Avatar"
                  :src="require('~/static/img/pages/payment/test-company-logo.png')"
                >
              </v-avatar>
            </div>

            <v-divider></v-divider>

            <div class="main-title">
              {{ $t('leave_a_tip') }}
            </div>

            <div class="py-2"></div>

            <div class="input-block d-flex">
              <v-btn
                icon
                class="mr-3"
                @click="parseInt(amount, 10) - 1 >= user.minimumAmount ? updateAmountByValue(parseInt(amount, 10) - 1) : amount"
              >
                <v-icon>
                  mdi-minus
                </v-icon>
              </v-btn>

<!--              :label="$t('amount')"-->
              <v-currency-field
                v-model="amount"
                class="centered-input input pt-0 mt-0"
                required
                @blur="updatePayment()"
                :rules="[
                  v => v >= user.minimumAmount || 'Minimum amount ' + user.minimumAmount
                ]"
              ></v-currency-field>

              <v-btn
                icon
                class="ml-3"
                @click="updateAmountByValue(parseInt(amount, 10) + 1)"
              >
                <v-icon>
                  mdi-plus
                </v-icon>
              </v-btn>
            </div>

            <div class="py-2"></div>

            <v-row
              class="offered-prices"
              align="center"
              style="justify-content: space-evenly"
            >
              <v-btn
                text
                @click="updateAmountByValue(1)"
              >
                1€
              </v-btn>
              <v-btn
                text
                @click="updateAmountByValue(3)"
              >
                3€
              </v-btn>
              <v-btn
                text
                @click="updateAmountByValue(5)"
              >
                5€
              </v-btn>
              <v-btn
                text
                @click="updateAmountByValue(10)"
              >
                10€
              </v-btn>
            </v-row>

            <div class="py-3"></div>

            <div class="rate-title">
              Rate
            </div>

            <v-rating
              v-model="rating"
              :background-color="getButtonColor()"
              :color="getButtonColor()"
            ></v-rating>

            <div class="mt-5"></div>

            <v-textarea
              v-if="rating > 0"
              v-model="comment"
              name="comment"
              :label="$t('comment')"
              placeholder="Write a review"
              outlined
              rows="1"
              auto-grow
            ></v-textarea>
          </v-card-text>

          <div class="payment-methods">
<!--            <div id="revolut-payment-request"></div>-->
<!--            <v-btn-->
<!--              class="mt-2 btn"-->
<!--              block-->
<!--              dark-->
<!--              :color="'#0666EB'"-->
<!--              @click="handlePayment"-->
<!--            >{{ $t('pay') }}-->
<!--                         :color="getButtonColor()"-->
<!--            </v-btn>-->

<!--            <google-pay-button-->
<!--              v-if="isGooglePayBtn"-->
<!--              class="mt-2"-->
<!--              :environment="GOOGLE_PAY_BUTTON_ENVIRONMENT"-->
<!--              :button-color="'default'"-->
<!--              :button-type="'plain'"-->
<!--              :button-size-mode="'static'"-->
<!--              :paymentRequest.prop="googlePaymentRequest"-->
<!--              @loadpaymentdata="onLoadPaymentData"-->
<!--              @paymentauthorized="onPaymentAuthorized"-->
<!--              @paymentdatachanged="onPaymentDataChanged"-->
<!--              @paymentcancelled="onPaymentCancelled"-->
<!--              @readytopaychange="onReadyToPayChange"-->
<!--              @error="onError"-->
<!--              :style="{ width: `100%`, height: `40px` }"-->
<!--            ></google-pay-button>-->
<!--            <apple-pay-button-->
<!--              v-if="isApplePayBtn"-->
<!--              @click="onClickApplePay"-->
<!--              class="mt-2"-->
<!--              buttonstyle="black"-->
<!--              type="plain"-->
<!--              locale="en-US"-->
<!--            ></apple-pay-button>-->


             <stripe :payAmount='amount'/>

          </div>
        </v-card>
      </v-col>
    </v-row>

    <div class="py-11"></div>
  </v-container>
</template>

<script>
  import ENV from '~/OLD_env';
  import { mask } from "vue-the-mask";
  import stripe from "../stripe.vue";
  // import RevolutCheckout from "@revolut/checkout";

  export default {
    layout: 'empty',
    directives: {mask},
    data() {
      return {
        GOOGLE_PAY_BUTTON_ENVIRONMENT: process.env.GOOGLE_PAY_BUTTON_ENVIRONMENT,
        valid: false,
        fetching: false,
        loading: false,
        amount: 100 / 100,
        rating: 0,
        comment: '',
        user: null,
        backendUrl: ENV.backendUrl,
        colorScheme: 'gold',
        welcomePhrase: 'I was glad to help you!',
        timerId: null,
        // RC: null, revolut checkout object
        // transactionId: null, transactin ID entity
        // publicId: null, public id revolut entity
        // paymentRequest: null, object of apple/google pay

        isApplePayBtn: false,
        isGooglePayBtn: false,

        // googlePaymentRequest: {
        //   apiVersion: 2,
        //   apiVersionMinor: 0,
        //   allowedPaymentMethods: [
        //     {
        //       type: "CARD",
        //       parameters: {
        //         allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
        //         allowedCardNetworks: ["AMEX", "DISCOVER", "JCB", "MASTERCARD", "VISA"]
        //       },
        //       tokenizationSpecification: {
        //         type: "PAYMENT_GATEWAY",
        //         parameters: {
        //           gateway: "redsys",
        //           gatewayMerchantId: "358943660"
        //         }
        //       }
        //     }
        //   ],
        //   merchantInfo: {
        //     merchantId: "BCR2DN4TZLG5ZNKF",
        //     merchantName: "TipsSi",
        //     merchantOrigin: 'https://tipssi.net'
        //   },
        //   transactionInfo: {
        //     totalPriceStatus: "FINAL",
        //     totalPriceLabel: "Total",
        //     totalPrice: '0.00',
        //     currencyCode: "EUR",
        //     countryCode: "ES"
        //   }
        // },
        // applePaymentRequest: {
        //   countryCode: "ES",
        //   currencyCode: "EUR",
        //   merchantCapabilities: ["supports3DS"],
        //   supportedNetworks: [
        //     "visa",
        //     "masterCard",
        //     "amex",
        //     "discover"
        //   ],
        //   total: {
        //     label: "TipsSi",
        //     type: "final",
        //     amount: '0.00',
        //   }
        // },

      }
    },
    components: {
      stripe
    },
    methods: {

      getButtonColor() {
        if (this.colorScheme === 'blue') {
          return "indigo";
        }
        if (this.colorScheme === 'red') {
          return "red";
        }
        if (this.colorScheme === 'gold') {
          return "#F59E0B";
        }
        if (this.colorScheme === 'dark') {
          this.$vuetify.theme.isDark = true;
          return "dark";
        }
        return "indigo";
      },

      // async initializeRevolutCheckout() {
      //   this.loading = true;
      //   await this.$axios.$post(`${ENV.backendUrl}/payment/create`, {
      //     receiver: this.$route.params.id,
      //     amount: this.amount,
      //   })
      //     .then(async (res) => {
      //       this.loading = false;
      //       // this.transactionId = res.transactionId;
      //       // this.publicId = res.publicId;
      //       // this.RC = await RevolutCheckout(res.publicId, 'prod');
      //     })
      //     .catch((error) => {
      //       console.error(error)
      //     })
      // },

      async updatePayment() {
        this.loading = true;

        this.updatePaymentRequestPrice()

        // await this.$axios.$post(`${ENV.backendUrl}/payment/update`, {
        //   receiver: this.$route.params.id,
        //   amount: this.amount,
        //   transactionId: this.transactionId
        // })
        //   .then(async (res) => {
        //     this.loading = false;
        //     // this.RC = await RevolutCheckout(res.publicId, 'prod');
        //     // await this.initializePaymentRequest();
        //   })
        //   .catch((error) => {
        //     console.error(error)
        //   })
      },

      async updateAmountByValue(value, delay = 500) {
        this.amount = value
        this.updatePaymentRequestPrice()

        clearTimeout(this.timerId)
        this.timerId = setTimeout(async () => {
          await this.updatePayment()
        }, delay)
      },

      async handlePayment() {
        this.RC.payWithPopup({
          onSuccess: async () => {
            this.$axios.$post(`${ENV.backendUrl}/payment/finish`, {
              transactionId: this.transactionId,
              amount: this.amount,
              receiver: this.$route.params.id,
              rating: this.rating,
              comment: this.comment,
            })
              .then(() => {
                this.$router.push(this.localePath('/payment/success/' + this.$route.params.id));
              })
              .catch((error) => {
                console.error(error)
              });
          },
          onError(error) {
            console.error(error)
          },
          onCancel() {
            console.log("Canceled by card: ")
          }
        })
      },

      async getProfile() {
        this.loading = true;
        this.fetching = true;
        await this.$axios.$post(`${ENV.backendUrl}/get-profile`, {
          number: this.$route.params.id,
          language: this.$i18n.locale,
        })
          .then((result) => {
            if (result.success) {
              this.loading = false;
              this.fetching = false;
              //todo this.colorScheme = result.profile.colorScheme ? result.profile.colorScheme : 'gold';
              this.amount = result.profile.defaultAmount;
              this.updatePaymentRequestPrice()
              this.welcomePhrase = result.translated ? result.translated.welcomePhrase : result.profile.welcomePhrase;
              this.user = result.profile
            } else {
              alert(result.message);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.fetching = false;
            console.error(error)
          });
      },

      updatePaymentRequestPrice() {
        const formattedPrice = this.amount.toFixed(2)
        this.googlePaymentRequest.transactionInfo.totalPrice = formattedPrice
        this.applePaymentRequest.total.amount = formattedPrice
      },

      async initializePaymentRequest() {
        this.paymentRequest?.destroy()
        this.paymentRequest = this.RC.paymentRequest({
          target: document.getElementById('revolut-payment-request'),
          requestShipping: false,
          onSuccess: async () => {
            this.$axios.$post(`${ENV.backendUrl}/payment/finish`, {
              transactionId: this.transactionId,
              amount: this.amount,
              receiver: this.$route.params.id,
              rating: this.rating,
              comment: this.comment,
            })
              .then(() => {
                this.$router.push(this.localePath('/payment/success/' + this.$route.params.id));
              })
              .catch((error) => {
                console.error(error)
              });
          },
          onError(error) {
            console.error(error)
          },
          onCancel() {
            console.log("Canceled by apple/google pay: ")
          },
          buttonStyle: {
            height: '40px',
            size: 'large',
            radius: 'small',
            variant: 'dark',
            action: 'pay'
          },
        })

        this.paymentRequest.canMakePayment().then((result) => {
          if (result) {
            this.paymentRequest.render()
          } else {
            console.log('Not supported')
            this.paymentRequest.destroy()
          }
        })
      },

      //Google Pay Events

      onLoadPaymentData(paymentData) {
        console.log('load-payment-data event:', paymentData);
      },
      onPaymentAuthorized(paymentData) {
        console.log('payment-authorized event:', paymentData);
      },
      onPaymentDataChanged(paymentData) {
        console.log('payment-data-changed event:', paymentData);
      },
      onPaymentCancelled() {
        console.log('payment-cancelled event');
      },
      onError(error) {
        console.error('error event:', error);
      },
      onReadyToPayChange: event => {
        console.log('ready to pay change', event.detail);
      },

      //Apple Pay Events

      onClickApplePay() {
        if (!ApplePaySession) {
          return;
        }
        const session = new ApplePaySession(3, this.applePaymentRequest);
        session.begin();

        session.onvalidatemerchant = async event => {
          const merchantSession = await this.validateAppleMerchant(event.validationURL);

          session.completeMerchantValidation(merchantSession.session);
          session.onpaymentmethodselected = _ => {
            const update = {
              newTotal: {
                ...this.applePaymentRequest.total,
                amount: this.amount.toFixed(2)
              }
            };
            session.completePaymentMethodSelection(update);
          };
          session.onpaymentauthorized = async event => {
            const paymentData = event.payment.token.paymentData;

            console.log("Payment data " + paymentData);
            const result = await serverAutorizationPayRedsys(paymentData);
            session.completePayment({
              status: result
            });
          };
        };
      },

      async validateAppleMerchant(validationUrl) {
        try {
          return await this.$axios.$post(`${ENV.backendUrl}/apple-session`, {
            url: validationUrl
          })
        } catch (error) {
          console.error('Error:', error);
        }
      },

      async initializeApplePayMethod() {
        try {
          if (window?.ApplePaySession) {
            const merchantIdentifier = 'merchant.tipssi';
            await ApplePaySession.canMakePaymentsWithActiveCard(merchantIdentifier);
            this.isApplePayBtn = true
          }
        } catch (e) {
          console.error('ApplePayError: ', e)
        } finally {
          if (!this.isApplePayBtn) {
            this.isGooglePayBtn = true
          }
        }
      },
    },
    async mounted() {
      await this.getProfile();
      // await this.initializeRevolutCheckout();
      await this.initializePaymentRequest();
      await this.initializeApplePayMethod()


    }
  }
</script>

<style scoped>
  .centered-input >>> input {
    text-align: center
  }

  /*#revolut-payment-request {*/
  /*  padding: 0 5px 0 0;*/
  /*  border-radius: 10px;*/
  /*}*/

  .card-container {
    padding: 40px 32px;
    width: 410px;
    margin: auto;
    background: #FFFFFF;
    border-radius: 12px;
    box-shadow: unset !important;
  }

  @media screen and (max-width: 425px) {
    .main-container {
      padding: 0 !important;
    }

    .card-container {
      width: 100%;
      padding: 40px 18px;
    }
  }

  .recipient-information-details p {
    font-family: 'Roboto';
    font-style: normal;
    align-items: center;
    margin: 0;
    text-align: initial;
  }

  .recipient-information-details p.recipient-information-details-name {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #000000;
  }

  .recipient-information-details p.recipient-information-details-position {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #0F172A;
  }

  .recipient-information-details p.recipient-information-details-description {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #64748B;
  }

  .input-block .v-btn {
    height: 65px;
    width: 65px;
    background: #F0F2F9;
  }

  /deep/ .input-block .input input {
    height: 65px;
    max-height: 65px;
    border: 1px solid #94A3B8;
    outline: none;
    box-sizing: border-box;
    border-radius: 6px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    align-items: center;
    color: #0F172A;
  }

  .input >>> .v-input__slot::before, .input >>> .v-input__slot::after {
    border-style: none !important;
  }

  .offered-prices .v-btn {
    height: 40px;
    width: 50px;
    background: #F0F2F9;
    border-radius: 8px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: #0F172A;
  }

  .main-title {
    margin: 12px auto 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #000000;
  }

  .rate-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    align-items: center;
    text-align: center;
    color: #000000;
  }

  .btn {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    padding: 10px 16px;
    border-radius: 8px;
    width: 100%;
    text-transform: unset;
    letter-spacing: 0;
    height: 44px;
    color: #FFFFFF;
  }

  >>> .gpay-button {
    width: 100% !important;
    border-radius: 8px;
  }

  >>> .gpay-button:focus,
  >>> .gpay-button:focus-visible {
    outline: none;
  }

  apple-pay-button {
    --apple-pay-button-width: 100%;
    --apple-pay-button-height: 30px;
    --apple-pay-button-border-radius: 8px;
    --apple-pay-button-padding: 5px 0px;
  }

  .payment-button {
    color: white;
    background-color: #007BFF;
    padding: 10px 15px;
    border: 1px solid #007BFF;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    margin: 0 auto;
    border-radius: 10px;
    width: 100%;
  }
</style>

