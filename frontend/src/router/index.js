import Vue from 'vue'
import Router from 'vue-router'
import Painel from '@/pages/Painel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Painel',
      component: Painel
    }
  ]
})
