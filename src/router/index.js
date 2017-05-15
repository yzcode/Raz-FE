import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Trustlib from '@/components/Trustlib'
import Records from '@/components/Records'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Dashboard
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/trustlib',
      name: 'Trustlib',
      component: Trustlib
    },
    {
      path: '/records',
      name: 'Records',
      component: Records
    }
  ]
})
