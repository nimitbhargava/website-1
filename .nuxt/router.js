import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _6f6057b0 = () => import('../pages/Request.vue' /* webpackChunkName: "pages/Request" */).then(m => m.default || m)
const _876030d8 = () => import('../pages/Team.vue' /* webpackChunkName: "pages/Team" */).then(m => m.default || m)
const _d890df60 = () => import('../pages/Sponsors.vue' /* webpackChunkName: "pages/Sponsors" */).then(m => m.default || m)
const _5f6c1054 = () => import('../pages/Library.vue' /* webpackChunkName: "pages/Library" */).then(m => m.default || m)
const _ea25fb34 = () => import('../pages/About.vue' /* webpackChunkName: "pages/About" */).then(m => m.default || m)
const _72ba98b3 = () => import('../pages/Credits.vue' /* webpackChunkName: "pages/Credits" */).then(m => m.default || m)
const _03a73f6b = () => import('../pages/Gallery.vue' /* webpackChunkName: "pages/Gallery" */).then(m => m.default || m)
const _66e4f629 = () => import('../pages/galleries/_gallery.vue' /* webpackChunkName: "pages/galleries/_gallery" */).then(m => m.default || m)
const _7da7e34a = () => import('../pages/events/_event.vue' /* webpackChunkName: "pages/events/_event" */).then(m => m.default || m)
const _74b2a4ef = () => import('../pages/form/_form.vue' /* webpackChunkName: "pages/form/_form" */).then(m => m.default || m)
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
			path: "/Request",
			component: _6f6057b0,
			name: "Request"
		},
		{
			path: "/Team",
			component: _876030d8,
			name: "Team"
		},
		{
			path: "/Sponsors",
			component: _d890df60,
			name: "Sponsors"
		},
		{
			path: "/Library",
			component: _5f6c1054,
			name: "Library"
		},
		{
			path: "/About",
			component: _ea25fb34,
			name: "About"
		},
		{
			path: "/Credits",
			component: _72ba98b3,
			name: "Credits"
		},
		{
			path: "/Gallery",
			component: _03a73f6b,
			name: "Gallery"
		},
		{
			path: "/galleries/:gallery?",
			component: _66e4f629,
			name: "galleries-gallery"
		},
		{
			path: "/events/:event?",
			component: _7da7e34a,
			name: "events-event"
		},
		{
			path: "/form/:form?",
			component: _74b2a4ef,
			name: "form-form"
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
