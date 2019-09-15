import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _53631adf = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _59761ecc = () => interopDefault(import('../pages/Credits.vue' /* webpackChunkName: "pages/Credits" */))
const _f20dc4b8 = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _3a8422e6 = () => interopDefault(import('../pages/library.vue' /* webpackChunkName: "pages/library" */))
const _a1e94b7e = () => interopDefault(import('../pages/Request.vue' /* webpackChunkName: "pages/Request" */))
const _7aa17937 = () => interopDefault(import('../pages/sponsors.vue' /* webpackChunkName: "pages/sponsors" */))
const _46e85bfb = () => interopDefault(import('../pages/team.vue' /* webpackChunkName: "pages/team" */))
const _8dc058da = () => interopDefault(import('../pages/ThankYou.vue' /* webpackChunkName: "pages/ThankYou" */))
const _4cba9aba = () => interopDefault(import('../pages/events/_event.vue' /* webpackChunkName: "pages/events/_event" */))
const _0d0cbc36 = () => interopDefault(import('../pages/form/_form.vue' /* webpackChunkName: "pages/form/_form" */))
const _4a32d670 = () => interopDefault(import('../pages/galleries/_gallery.vue' /* webpackChunkName: "pages/galleries/_gallery" */))
const _731af5a4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _53631adf,
      name: "about"
    }, {
      path: "/Credits",
      component: _59761ecc,
      name: "Credits"
    }, {
      path: "/gallery",
      component: _f20dc4b8,
      name: "gallery"
    }, {
      path: "/library",
      component: _3a8422e6,
      name: "library"
    }, {
      path: "/Request",
      component: _a1e94b7e,
      name: "Request"
    }, {
      path: "/sponsors",
      component: _7aa17937,
      name: "sponsors"
    }, {
      path: "/team",
      component: _46e85bfb,
      name: "team"
    }, {
      path: "/ThankYou",
      component: _8dc058da,
      name: "ThankYou"
    }, {
      path: "/events/:event?",
      component: _4cba9aba,
      name: "events-event"
    }, {
      path: "/form/:form?",
      component: _0d0cbc36,
      name: "form-form"
    }, {
      path: "/galleries/:gallery?",
      component: _4a32d670,
      name: "galleries-gallery"
    }, {
      path: "/",
      component: _731af5a4,
      name: "index"
    }],

    fallback: false
  })
}
