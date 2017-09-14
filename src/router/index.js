import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Header from '@/components/header/header'
import Search from '@/components/search/search'
import Mylist from '@/components/mylist/mylist'
import Shopping from '@/components/shopping/shopping'
import Order from '@/components/order/order'
import Near from '@/components/near/near'
import Map from '@/components/map/map'
import Meishi from '@/components/meishi/meishi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/mylist',
      name: 'Mylist',
      component: Mylist
    },
    {
      path: '/near',
      name: 'Near',
      component: Near
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
     {
      path: '/meishi',
      name: 'Meishi',
      component: Meishi
    }
  ]
})
