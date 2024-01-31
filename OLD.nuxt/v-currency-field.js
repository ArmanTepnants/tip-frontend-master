import Vue from 'vue';
import VCurrencyField from 'v-currency-field';

Vue.use(VCurrencyField, {"decimalLength":2,"autoDecimalMode":true,"min":0.5,"max":100000,"valueAsInteger":false,"allowNegative":false});
