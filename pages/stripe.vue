<!--<template>-->
<!--  <div>-->
<!--    <div id="payment-request-button"></div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import {loadStripe} from '@stripe/stripe-js';-->

<!--export default {-->

<!--  data() {-->
<!--    return {-->
<!--      stripe: null,-->
<!--      paymentRequest: null,-->
<!--      prButton: null,-->
<!--      amount: 3 * 100,-->
<!--    };-->
<!--  },-->

<!--  async mounted() {-->
<!--    this.stripe = await loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);-->
<!--    this.setupPaymentRequest();-->
<!--  },-->
<!--  methods: {-->
<!--    async setupPaymentRequest() {-->
<!--      if (!this.stripe) {-->
<!--        console.error('Stripe has not been initialized');-->
<!--        return;-->
<!--      }-->

<!--      // Создание объекта paymentRequest-->
<!--      this.paymentRequest = this.stripe.paymentRequest({-->
<!--        country: 'ES',-->
<!--        currency: 'eur',-->
<!--        total: {-->
<!--          label: 'Total',-->
<!--          amount: this.amount, // Используйте payAmount напрямую-->
<!--        },-->
<!--      });-->

<!--      // Проверка доступности Google Pay и Apple Pay-->
<!--      const result = await this.paymentRequest.canMakePayment();-->
<!--      console.log("Payment Method - " + JSON.stringify(result))-->
<!--      if (result) {-->
<!--        this.prButton = this.stripe.elements().create('paymentRequestButton', {-->
<!--          paymentRequest: this.paymentRequest,-->
<!--        });-->
<!--        this.prButton.mount('#payment-request-button');-->
<!--      } else {-->
<!--        document.getElementById('payment-request-button').style.display = 'none';-->
<!--      }-->

<!--      this.paymentRequest.on('paymentmethod', async (event) => {-->
<!--        try {-->
<!--          // Отправка запроса для создания Payment Intent-->
<!--          const res = await this.$axios.post('/create-payment-intent', {-->
<!--            currency: "eur",-->
<!--            amount: this.amount-->
<!--          })-->
<!--          const {clientSecret} = res.data-->

<!--          console.log("Client Secret - " + clientSecret)-->

<!--          if (!clientSecret) {-->
<!--            throw new Error("Client secret is not available.");-->
<!--          }-->

<!--          // Подтверждение платежа с использованием Stripe-->
<!--          const response = await this.stripe.confirmCardPayment(clientSecret, {-->
<!--            payment_method: event.paymentMethod.id-->
<!--          });-->

<!--          if (response.error) {-->
<!--            // Обработка ошибки при платеже-->
<!--            // alert("Ошибка при платеже: " + response.error.message);-->
<!--            console.error("Ошибка при платеже: ", response.error.message);-->
<!--            event.complete('fail');-->
<!--          } else {-->
<!--            // Успешный платеж-->
<!--            // alert('Payment successful');-->
<!--            console.log('Payment successful');-->
<!--            event.complete('success');-->
<!--            this.$router.push("/payment/success");-->
<!--          }-->
<!--        } catch (error) {-->
<!--          // Обработка исключений-->
<!--          console.log("Ошибка " + error);-->
<!--          // alert("Ошибка при платежe");-->
<!--          event.complete('fail');-->
<!--        }-->
<!--      });-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->


<!--Раскоментировать этот код чтобы загрузить на сервер-->
<template>
  <div>
    <div id="payment-request-button"></div>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js';

export default {
  props: {
    payAmount: Number,
  },

  data() {
    return {
      stripe: null,
      paymentRequest: null,
      prButton: null,
    };
  },

  async mounted() {
    this.stripe = await loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);
    this.setupPaymentRequest();
  },

  methods: {
    async setupPaymentRequest() {
      console.log(this.payAmount)
      if (!this.stripe) {
        console.error('Stripe has not been initialized');
        return;
      }

      console.log('Using payAmount for payment request:', this.payAmount);

      // Создание объекта paymentRequest
      this.paymentRequest = this.stripe.paymentRequest({
        country: 'ES',
        currency: 'eur',
        total: {
          label: 'Total',
          amount: this.payAmount * 100, // Использование payAmount напрямую
        },
      });

      // Проверка доступности Google Pay и Apple Pay
      const result = await this.paymentRequest.canMakePayment();
      console.log('Payment Method:', JSON.stringify(result));
      if (result) {
        this.prButton = this.stripe.elements().create('paymentRequestButton', {
          paymentRequest: this.paymentRequest,
        });
        this.prButton.mount('#payment-request-button');
      } else {
        document.getElementById('payment-request-button').style.display = 'none';
      }

      this.paymentRequest.on('paymentmethod', async (event) => {
        try {
          // Отправка запроса для создания Payment Intent
          const res = await this.$axios.post('/create-payment-intent', {
            currency: 'eur',
            amount: this.payAmount * 100, // Использование payAmount напрямую
          });
          const { clientSecret } = res.data;

          console.log('Client Secret:', clientSecret);

          if (!clientSecret) {
            throw new Error('Client secret is not available.');
          }

          // Подтверждение платежа с использованием Stripe
          const response = await this.stripe.confirmCardPayment(clientSecret, {
            payment_method: event.paymentMethod.id,
          });

          if (response.error) {
            console.error('Ошибка при платеже:', response.error.message);
            event.complete('fail');
          } else {
            console.log('Payment successful');
            event.complete('success');
            this.$router.push('/payment/success');
          }
        } catch (error) {
          console.log('Ошибка:', error);
          event.complete('fail');
        }
      });
    },
  },
};
</script>