import Vue from 'vue'
import Router from 'vue-router'
import Chess from '@/components/Chess'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Chess',
      component: Chess
    }
  ]
})
