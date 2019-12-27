import Vue from 'vue'
import Router from 'vue-router'
import ImgDefaultCard from '@/components/cards/img-default-card'
import ImgDefaultView from '@/components/view/img-default-view'
import ImgDefaultScroll from  '@/components/view/img-default-scroll'
import TextDefaultCard from '@/components/cards/text-default-card'
import TextTreeCard from '@/components/cards/text-tree-card'
import TableDefaultSimple from '@/components/tables/table-default-simple'
import TextSearchCard from '@/components/cards/text-search-card'
import TextDefaultAnimation from '@/components/animation/text-default-animation'
import Index from '@/view/index'

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
      path: '/text-default-card',
      name: 'text-default-card',
      component: TextDefaultCard
    },{
      path: '/text-tree-card',
      name: 'text-tree-card',
      component: TextTreeCard
    },{
      path: '/table-default-simple',
      name: 'table-default-simple',
      component: TableDefaultSimple
    },{
      path: '/text-search-card',
      name: 'text-search-card',
      component: TextSearchCard
    },{
      path: '/text-default-animation',
      name: 'text-default-animation',
      component: TextDefaultAnimation
    },{
      
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
})
