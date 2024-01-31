import dotenv from 'dotenv'
dotenv.config()
import ENV from './OLD_env'

import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    // port: 443,
    host: '0.0.0.0',
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname + '/certificates/', 'serve>')),
    //   cert: fs.readFileSync(path.resolve(__dirname + '/certificates/', 'serv>'))
    // }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TipsSi',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // {
      //   innerHTML: `!function(e,o,t){e[t]=function(n,r){var c={sandbox:"https://sandbox-merchant.revolut.com/embed.js",prod:"https://merchant.revolut.com/embed.js",dev:"https://merchant.revolut.codes/embed.js"},d=o.createElement("script");d.id="revolut-checkout",d.src=c[r]||c.prod,d.async=!0,o.head.appendChild(d);var s={then:function(r,c){d.onload=function(){r(e[t](n))},d.onerror=function(){o.head.removeChild(d),c&&c(new Error(t+" is failed to load"))}}};return"function"==typeof Promise?Promise.resolve(s):s}}(window,document,"RevolutCheckout");`,
      // },
      // {
      //   hid: 'ApplePay', src: 'https://applepay.cdn-apple.com/jsapi/v1/apple-pay-sdk.js', defer: true,
      // },
      {
        src: 'https://js.stripe.com/v3/',
        defer: true,
      },
      {
        src: 'https://www.google.com/pay',
        defer: true,
      },
      {
        src: 'https://pay.google.com/gp/p/js/pay.js',
        defer: true,
      },
      {
        src: 'https://pay.google.com/gp/p/payment_method_manifest.json',
        defer: true,
      },
      {
        src: 'https://pay.google.com/gp/p/web_manifest.json',
        defer: true,
      },
      {
        src: 'https://www.google.com/pay',
        defer: true,
      }
    ],
    __dangerouslyDisableSanitizers: ['script', 'innerHTML'],
  },

  ssr: true, // Disable Server Side rendering

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: '@/assets/style.css'}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/google-pay-button', ssr: false, mode: 'client' },
    { src: '~/plugins/stripe.js', mode: 'client' }, // Подключаем плагин Stripe только на клиентской стороне
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/device',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/dotenv',
    '@nuxtjs/i18n',
  ],
  axios: {
    baseURL: ENV.backendUrl,
    credentials: true,
  },
  auth: {
    resetOnError: true,
    localStorage: true,
    strategies: {
      local: {
        endpoints: {
          login: { url: 'sign-in', method: 'post', propertyName: 'token' },
          logout: { url: 'sign-out', method: 'post' },
          user: { url: 'get-user', method: 'get', propertyName: false }
        }
      }
    },
    redirect: {
      login: '/users/sign-in',
      logout: '/',
      callback: '/profile',
      home: '/profile'
    }
  },
  i18n: {
    baseUrl: 'https://tipssi.net',
    locales: [
      { code: 'en', name: 'ENG', iso: 'en-US', file: 'en.js', dir: 'ltr' },
      { code: 'es', name: 'ESP', iso: 'es-ES', file: 'es.js', dir: 'ltr' },
    ],
    defaultLocale: 'es',
    lazy: true,
    langDir: 'lang/',
    detectBrowserLanguage : {
      fallbackLocale: 'es',
      redirectOn: 'root',
    },
    vueI18n: {
      fallbackLocale: 'es'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

/*   cookies: {
    necessary: [
      {
        name:  'Default Cookies',
        description:  'Used for cookie control.',
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
    ],
    optional: []
  }, */

// env: {
//      DISABLE_REGISTRATION: process.env.DISABLE_REGISTRATION === 'false'
// },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-avatar-editor-improved'],
  }
}