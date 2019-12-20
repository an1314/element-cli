import Vue from 'vue'
import Router from 'vue-router'
import ImgDefaultCard from '@/components/cards/img-default-card'
import ImgDefaultView from '@/components/view/img-default-view'
import ImgDefaultScroll from  '@/components/view/img-default-scroll'
import Home from '@/view/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/img-default-card',
      name: 'img-default-card',
      component: ImgDefaultCard
    },
    {
      path: '/img-default-view',
      name: 'img-default-view',
      component: ImgDefaultView
    },{
      path: '/img-default-scroll',
      name: 'img-default-scroll',
      component: ImgDefaultScroll
    },{
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
