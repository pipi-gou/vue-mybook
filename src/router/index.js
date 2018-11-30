import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: ()=>import('../components/home.vue'),
      meta:{keepAlive:true}
    },
    {
      path: '/add',
      name: 'add',
      component: ()=>import('../components/add.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: ()=>import('../components/list.vue')
    },
    {
      path: '/collect',
      name: 'collect',
      component: ()=>import('../components/collect.vue')
    },
    {
      path: '/detail/:bid',
      name: 'detail',
      component: ()=>import('../components/detail.vue')
    },
    {
      path:'*',
      redirect: '/home'
    }
  ]
})
