import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _72ba98b3 = () => import('../pages/Credits.vue' /* webpackChunkName: "pages/Credits" */).then(m => m.default || m)
const _6f2ad2e8 = () => import('../pages/ThankYou.vue' /* webpackChunkName: "pages/ThankYou" */).then(m => m.default || m)
const _8f14f918 = () => import('../pages/team.vue' /* webpackChunkName: "pages/team" */).then(m => m.default || m)
const _6f6057b0 = () => import('../pages/Request.vue' /* webpackChunkName: "pages/Request" */).then(m => m.default || m)
const _137ae286 = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _ec2787a0 = () => import('../pages/sponsors.vue' /* webpackChunkName: "pages/sponsors" */).then(m => m.default || m)
const _07fb2f18 = () => import('../pages/library.vue' /* webpackChunkName: "pages/library" */).then(m => m.default || m)
const _bf84d0ea = () => import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */).then(m => m.default || m)
const _a437ec6c = () => import('../pages/events/vue-vixens-day.vue' /* webpackChunkName: "pages/events/vue-vixens-day" */).then(m => m.default || m)
const _74b2a4ef = () => import('../pages/form/_form.vue' /* webpackChunkName: "pages/form/_form" */).then(m => m.default || m)
const _7da7e34a = () => import('../pages/events/_event.vue' /* webpackChunkName: "pages/events/_event" */).then(m => m.default || m)
const _66e4f629 = () => import('../pages/galleries/_gallery.vue' /* webpackChunkName: "pages/galleries/_gallery" */).then(m => m.default || m)
const _3332bd4b = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
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


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/Credits",
			component: _72ba98b3,
			name: "Credits"
		},
		{
			path: "/ThankYou",
			component: _6f2ad2e8,
			name: "ThankYou"
		},
		{
			path: "/team",
			component: _8f14f918,
			name: "team"
		},
		{
			path: "/Request",
			component: _6f6057b0,
			name: "Request"
		},
		{
			path: "/about",
			component: _137ae286,
			name: "about"
		},
		{
			path: "/sponsors",
			component: _ec2787a0,
			name: "sponsors"
		},
		{
			path: "/library",
			component: _07fb2f18,
			name: "library"
		},
		{
			path: "/gallery",
			component: _bf84d0ea,
			name: "gallery"
		},
		{
			path: "/events/vue-vixens-day",
			component: _a437ec6c,
			name: "events-vue-vixens-day"
		},
		{
			path: "/form/:form?",
			component: _74b2a4ef,
			name: "form-form"
		},
		{
			path: "/events/:event?",
			component: _7da7e34a,
			name: "events-event"
		},
		{
			path: "/galleries/:gallery?",
			component: _66e4f629,
			name: "galleries-gallery"
		},
		{
			path: "/",
			component: _3332bd4b,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
