import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _029d0126 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _1d19f072 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _65d634e0 = () => interopDefault(import('../pages/business.vue' /* webpackChunkName: "pages/business" */))
const _3f2009bb = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _1e695a32 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _14125c6a = () => interopDefault(import('../pages/get-started.vue' /* webpackChunkName: "pages/get-started" */))
const _392102e6 = () => interopDefault(import('../pages/print.vue' /* webpackChunkName: "pages/print" */))
const _466a8932 = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _b033bd68 = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _8b3d8580 = () => interopDefault(import('../pages/staff.vue' /* webpackChunkName: "pages/staff" */))
const _60bea47c = () => interopDefault(import('../pages/start.vue' /* webpackChunkName: "pages/start" */))
const _c6c06d78 = () => interopDefault(import('../pages/terms-and-conditions.vue' /* webpackChunkName: "pages/terms-and-conditions" */))
const _1c76feb6 = () => interopDefault(import('../pages/transactions.vue' /* webpackChunkName: "pages/transactions" */))
const _da2a0304 = () => interopDefault(import('../pages/transfer/index.vue' /* webpackChunkName: "pages/transfer/index" */))
const _5518ed44 = () => interopDefault(import('../pages/company/ratings.vue' /* webpackChunkName: "pages/company/ratings" */))
const _3ab783a4 = () => interopDefault(import('../pages/company/staff.vue' /* webpackChunkName: "pages/company/staff" */))
const _1b7937f7 = () => interopDefault(import('../pages/company/transactions.vue' /* webpackChunkName: "pages/company/transactions" */))
const _6ea6a880 = () => interopDefault(import('../pages/profile/edit.vue' /* webpackChunkName: "pages/profile/edit" */))
const _793a6192 = () => interopDefault(import('../pages/users/password.vue' /* webpackChunkName: "pages/users/password" */))
const _ac5a7ce4 = () => interopDefault(import('../pages/users/sign-in.vue' /* webpackChunkName: "pages/users/sign-in" */))
const _7a3c1c6a = () => interopDefault(import('../pages/users/sign-up-as-administrator.vue' /* webpackChunkName: "pages/users/sign-up-as-administrator" */))
const _39087e17 = () => interopDefault(import('../pages/users/sign-up-as-recipient.vue' /* webpackChunkName: "pages/users/sign-up-as-recipient" */))
const _6c36c5f6 = () => interopDefault(import('../pages/payment/success/_id.vue' /* webpackChunkName: "pages/payment/success/_id" */))
const _050320f8 = () => interopDefault(import('../pages/invite/_id.vue' /* webpackChunkName: "pages/invite/_id" */))
const _25b3fbde = () => interopDefault(import('../pages/payment/_id.vue' /* webpackChunkName: "pages/payment/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _029d0126,
    name: "about___es"
  }, {
    path: "/blog",
    component: _1d19f072,
    name: "blog___es"
  }, {
    path: "/business",
    component: _65d634e0,
    name: "business___es"
  }, {
    path: "/contact-us",
    component: _3f2009bb,
    name: "contact-us___es"
  }, {
    path: "/en",
    component: _1e695a32,
    name: "index___en"
  }, {
    path: "/get-started",
    component: _14125c6a,
    name: "get-started___es"
  }, {
    path: "/print",
    component: _392102e6,
    name: "print___es"
  }, {
    path: "/privacy-policy",
    component: _466a8932,
    name: "privacy-policy___es"
  }, {
    path: "/profile",
    component: _b033bd68,
    name: "profile___es"
  }, {
    path: "/staff",
    component: _8b3d8580,
    name: "staff___es"
  }, {
    path: "/start",
    component: _60bea47c,
    name: "start___es"
  }, {
    path: "/terms-and-conditions",
    component: _c6c06d78,
    name: "terms-and-conditions___es"
  }, {
    path: "/transactions",
    component: _1c76feb6,
    name: "transactions___es"
  }, {
    path: "/transfer",
    component: _da2a0304,
    name: "transfer___es"
  }, {
    path: "/company/ratings",
    component: _5518ed44,
    name: "company-ratings___es"
  }, {
    path: "/company/staff",
    component: _3ab783a4,
    name: "company-staff___es"
  }, {
    path: "/company/transactions",
    component: _1b7937f7,
    name: "company-transactions___es"
  }, {
    path: "/en/about",
    component: _029d0126,
    name: "about___en"
  }, {
    path: "/en/blog",
    component: _1d19f072,
    name: "blog___en"
  }, {
    path: "/en/business",
    component: _65d634e0,
    name: "business___en"
  }, {
    path: "/en/contact-us",
    component: _3f2009bb,
    name: "contact-us___en"
  }, {
    path: "/en/get-started",
    component: _14125c6a,
    name: "get-started___en"
  }, {
    path: "/en/print",
    component: _392102e6,
    name: "print___en"
  }, {
    path: "/en/privacy-policy",
    component: _466a8932,
    name: "privacy-policy___en"
  }, {
    path: "/en/profile",
    component: _b033bd68,
    name: "profile___en"
  }, {
    path: "/en/staff",
    component: _8b3d8580,
    name: "staff___en"
  }, {
    path: "/en/start",
    component: _60bea47c,
    name: "start___en"
  }, {
    path: "/en/terms-and-conditions",
    component: _c6c06d78,
    name: "terms-and-conditions___en"
  }, {
    path: "/en/transactions",
    component: _1c76feb6,
    name: "transactions___en"
  }, {
    path: "/en/transfer",
    component: _da2a0304,
    name: "transfer___en"
  }, {
    path: "/profile/edit",
    component: _6ea6a880,
    name: "profile-edit___es"
  }, {
    path: "/users/password",
    component: _793a6192,
    name: "users-password___es"
  }, {
    path: "/users/sign-in",
    component: _ac5a7ce4,
    name: "users-sign-in___es"
  }, {
    path: "/users/sign-up-as-administrator",
    component: _7a3c1c6a,
    name: "users-sign-up-as-administrator___es"
  }, {
    path: "/users/sign-up-as-recipient",
    component: _39087e17,
    name: "users-sign-up-as-recipient___es"
  }, {
    path: "/en/company/ratings",
    component: _5518ed44,
    name: "company-ratings___en"
  }, {
    path: "/en/company/staff",
    component: _3ab783a4,
    name: "company-staff___en"
  }, {
    path: "/en/company/transactions",
    component: _1b7937f7,
    name: "company-transactions___en"
  }, {
    path: "/en/profile/edit",
    component: _6ea6a880,
    name: "profile-edit___en"
  }, {
    path: "/en/users/password",
    component: _793a6192,
    name: "users-password___en"
  }, {
    path: "/en/users/sign-in",
    component: _ac5a7ce4,
    name: "users-sign-in___en"
  }, {
    path: "/en/users/sign-up-as-administrator",
    component: _7a3c1c6a,
    name: "users-sign-up-as-administrator___en"
  }, {
    path: "/en/users/sign-up-as-recipient",
    component: _39087e17,
    name: "users-sign-up-as-recipient___en"
  }, {
    path: "/en/payment/success/:id?",
    component: _6c36c5f6,
    name: "payment-success-id___en"
  }, {
    path: "/en/invite/:id?",
    component: _050320f8,
    name: "invite-id___en"
  }, {
    path: "/en/payment/:id?",
    component: _25b3fbde,
    name: "payment-id___en"
  }, {
    path: "/payment/success/:id?",
    component: _6c36c5f6,
    name: "payment-success-id___es"
  }, {
    path: "/invite/:id?",
    component: _050320f8,
    name: "invite-id___es"
  }, {
    path: "/payment/:id?",
    component: _25b3fbde,
    name: "payment-id___es"
  }, {
    path: "/",
    component: _1e695a32,
    name: "index___es"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
