import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/*',
    redirect: { name: 'Home' }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path: '/not-supported',
    name: 'NotSupported',
    component: () => import(/* webpackChunkName: "not-supported" */ '@/views/NotSupported.vue')
  }
]

// redirect to NotSupported if domain is not registered.
const requiresRegisteredDomainGuard = (to, from, next) => {

  chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
    const currentTabURL = tabs[0].url

    // TODO: Validate registered domain list.
    if (currentTabURL.indexOf('canva.com') == -1 && to.name !== 'NotSupported'){
      next({ name: 'NotSupported' })
    }
    else {
      next()
    }
  })

}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// setting nav guards
//router.beforeEach(requiresRegisteredDomainGuard)

export default router
