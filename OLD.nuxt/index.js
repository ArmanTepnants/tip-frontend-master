import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_7ec0ff16 from 'nuxt_plugin_plugin_7ec0ff16' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_plugin_ba02e6d0 from 'nuxt_plugin_plugin_ba02e6d0' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_vcurrencyfield_f1394dd2 from 'nuxt_plugin_vcurrencyfield_f1394dd2' // Source: ./v-currency-field.js (mode: 'all')
import nuxt_plugin_pluginutils_04fa108f from 'nuxt_plugin_pluginutils_04fa108f' // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_64b8b61a from 'nuxt_plugin_pluginrouting_64b8b61a' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_6a177b95 from 'nuxt_plugin_pluginmain_6a177b95' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_axios_74c89b2c from 'nuxt_plugin_axios_74c89b2c' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_moment_32f65bec from 'nuxt_plugin_moment_32f65bec' // Source: ./moment.js (mode: 'all')
import nuxt_plugin_deviceplugin_2c5846b7 from 'nuxt_plugin_deviceplugin_2c5846b7' // Source: ./device.plugin.js (mode: 'all')
import nuxt_plugin_vuecookielaw_62b71c54 from 'nuxt_plugin_vuecookielaw_62b71c54' // Source: ../plugins/vue-cookie-law (mode: 'client')
import nuxt_plugin_vueleafletmaps_71afd342 from 'nuxt_plugin_vueleafletmaps_71afd342' // Source: ../plugins/vue-leaflet-maps (mode: 'client')
import nuxt_plugin_auth_2044f884 from 'nuxt_plugin_auth_2044f884' // Source: ./auth.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext)
  const router = await createRouter(ssrContext, config, { store })

  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"TipsSi","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"script":[{"innerHTML":"!function(e,o,t){e[t]=function(n,r){var c={sandbox:\"https:\u002F\u002Fsandbox-merchant.revolut.com\u002Fembed.js\",prod:\"https:\u002F\u002Fmerchant.revolut.com\u002Fembed.js\",dev:\"https:\u002F\u002Fmerchant.revolut.codes\u002Fembed.js\"},d=o.createElement(\"script\");d.id=\"revolut-checkout\",d.src=c[r]||c.prod,d.async=!0,o.head.appendChild(d);var s={then:function(r,c){d.onload=function(){r(e[t](n))},d.onerror=function(){o.head.removeChild(d),c&&c(new Error(t+\" is failed to load\"))}}};return\"function\"==typeof Promise?Promise.resolve(s):s}}(window,document,\"RevolutCheckout\");"}],"__dangerouslyDisableSanitizers":["script","innerHTML"],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_7ec0ff16 === 'function') {
    await nuxt_plugin_plugin_7ec0ff16(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_ba02e6d0 === 'function') {
    await nuxt_plugin_plugin_ba02e6d0(app.context, inject)
  }

  if (typeof nuxt_plugin_vcurrencyfield_f1394dd2 === 'function') {
    await nuxt_plugin_vcurrencyfield_f1394dd2(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_04fa108f === 'function') {
    await nuxt_plugin_pluginutils_04fa108f(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_64b8b61a === 'function') {
    await nuxt_plugin_pluginrouting_64b8b61a(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_6a177b95 === 'function') {
    await nuxt_plugin_pluginmain_6a177b95(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_74c89b2c === 'function') {
    await nuxt_plugin_axios_74c89b2c(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_32f65bec === 'function') {
    await nuxt_plugin_moment_32f65bec(app.context, inject)
  }

  if (typeof nuxt_plugin_deviceplugin_2c5846b7 === 'function') {
    await nuxt_plugin_deviceplugin_2c5846b7(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuecookielaw_62b71c54 === 'function') {
    await nuxt_plugin_vuecookielaw_62b71c54(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueleafletmaps_71afd342 === 'function') {
    await nuxt_plugin_vueleafletmaps_71afd342(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_2044f884 === 'function') {
    await nuxt_plugin_auth_2044f884(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
