import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

import store from '../store' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
    meta: {requireAuth: true}
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta: {requireAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(next())
  const protectedPath = to.matched.some(record => record.meta.requireAuth) 
  if (protectedPath && store.state.token === '') {
    console.log('login')
    return next({ name: 'login' })
    // next({ name: 'notas' })
    // Aqui se me ocurre meter un if para validar si el usuariohace un sign-up
  }
  // if (protectedPath) {
  //   console.log('notas')
  //   return next({ name: 'notas' })
  //   // next()
  // }
  else {
    console.log('next')
    // console.log(localStorage.getItem('token'))
    return next()
  }
})

export default router
