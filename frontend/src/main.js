import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import store from '@/store/store'
import App from './App'
import router from './router'

Vue.use(Vuex)
Vue.use(axios, VueAxios)
Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})
Vue.config.productionTip = false

new Vue({ // eslint-disable-line no-new
  store,
  el: '#app',
  router,
  render: h => h(App)
})
