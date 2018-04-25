import Vue from 'vue'
import Router from 'vue-router'
import Painel from '@/pages/Painel'
import Estabelecimentos from '@/pages/Estabelecimentos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Painel',
      component: Painel
    },
    {
      path: '/estabelecimentos',
      name: 'Estabelecimentos',
      component: Estabelecimentos
    }
  ]
})
