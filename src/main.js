// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './config/rem.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './config/reset.css'
import fastclick from 'fastclick'
import MyPlugins from './config/MyPlugins'
import './config/setAxios'
import store from './store'
import App from './App'
import router from './router'
Vue.use(MintUI)
fastclick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
