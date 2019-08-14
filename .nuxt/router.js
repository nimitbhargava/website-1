import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _7911e9c0 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _144f02cd = () => interopDefault(import('../pages/Credits.vue' /* webpackChunkName: "pages/Credits" */))
const _41d201a5 = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _c4d25ae4 = () => interopDefault(import('../pages/library.vue' /* webpackChunkName: "pages/library" */))
const _69e43e42 = () => interopDefault(import('../pages/Request.vue' /* webpackChunkName: "pages/Request" */))
const _1ae51556 = () => interopDefault(import('../pages/sponsors.vue' /* webpackChunkName: "pages/sponsors" */))
const _733640cc = () => interopDefault(import('../pages/team.vue' /* webpackChunkName: "pages/team" */))
const _59636fb2 = () => interopDefault(import('../pages/ThankYou.vue' /* webpackChunkName: "pages/ThankYou" */))
const _5426d1e4 = () => interopDefault(import('../pages/events/_event.vue' /* webpackChunkName: "pages/events/_event" */))
const _aa4c66d6 = () => interopDefault(import('../pages/form/_form.vue' /* webpackChunkName: "pages/form/_form" */))
const _175517cf = () => interopDefault(import('../pages/galleries/_gallery.vue' /* webpackChunkName: "pages/galleries/_gallery" */))
const _39a23436 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
      component: _7911e9c0,
      name: "about"
    }, {
      path: "/Credits",
      component: _144f02cd,
      name: "Credits"
    }, {
      path: "/gallery",
      component: _41d201a5,
      name: "gallery"
    }, {
      path: "/library",
      component: _c4d25ae4,
      name: "library"
    }, {
      path: "/Request",
      component: _69e43e42,
      name: "Request"
    }, {
      path: "/sponsors",
      component: _1ae51556,
      name: "sponsors"
    }, {
      path: "/team",
      component: _733640cc,
      name: "team"
    }, {
      path: "/ThankYou",
      component: _59636fb2,
      name: "ThankYou"
    }, {
      path: "/events/:event?",
      component: _5426d1e4,
      name: "events-event"
    }, {
      path: "/form/:form?",
      component: _aa4c66d6,
      name: "form-form"
    }, {
      path: "/galleries/:gallery?",
      component: _175517cf,
      name: "galleries-gallery"
    }, {
      path: "/",
      component: _39a23436,
      name: "index"
    }],

    fallback: false
  })
}
