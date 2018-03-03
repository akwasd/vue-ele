import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://cangdu.org:8001/';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios