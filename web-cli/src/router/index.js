import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Main from '@/views/Main'
import MainPage from '@/views/MainPage'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', name: 'Login', component: Login },
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: '/login',
      meta: {name: '登录', menu: true},
      children: [
        { path: '/home', name: 'MainPage', component: MainPage }
      ]
    }
  ]
})
