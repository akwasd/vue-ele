// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './config/rem.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './config/reset.css'
import fastclick from 'fastclick'
import MyPlugins from './config/MyPlugins'
import './config/filters'
import './config/setAxios'
import store from './store'
import App from './App'
import VueLazyload from 'vue-lazyload'
import router from './router'
Vue.use(MintUI)
Vue.use(MyPlugins)
Vue.use(VueLazyload)
fastclick.attach(document.body)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(window.localStorage.getItem('userInfo')) {
      next()
    } else {
      next({
        path: '/sameHeadPages/loginPage'
        
      })
    }
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
