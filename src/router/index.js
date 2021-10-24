import Vue from 'vue'
import Router from 'vue-router'
import MainIndex from '@/components/mainindex'
import party from '@/components/party'
import jiandang from '@/components/jiandang'
import jianguo  from '@/components/jianguo'
import nofound from '@/components/404nofound'
import  aboutus from '@/components/aboutus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainIndex
    },
    {
      path: '/party',
      name: 'party',
      component: party
    },
    {
      path:'/jiandang',
      name: 'jiandang',
      component: jiandang
    },
    {
      path:'/jianguo',
      name: 'jianguo',
      component: jianguo
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '/404',
      name: '404',
      component: nofound
    },
    {
      path: '*',
      redirect: {
        name: '404'
      }
    }
  ]
})
