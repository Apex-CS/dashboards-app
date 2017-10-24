import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index/HelloWorld'
import AppView from '@/components/app/Table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/App',
      name: 'Table',
      component: AppView
    }
  ]
})
