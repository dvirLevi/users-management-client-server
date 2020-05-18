import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createAccount',
    name: 'createAccount',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/createAccount.vue'),
  },
  {
    path: '/managementUsers',
    // name: 'managementUsers',
    component: () => import('../views/managementUsers.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.state.userId) {
        next('/createAccount')
      } else {
        next()
      }
    },
    children: [{
        path: 'addUser',
        component: () => import('../views/addUser.vue'),
      },
      {
        path: '/',
        name: 'managementUsers',
        component: () => import('../views/showUsers.vue'),
      },
      
      // {
      //   // UserPosts will be rendered inside User's <router-view>
      //   // when /user/:id/posts is matched
      //   path: 'posts',
      //   component: UserPosts
      // }
    ]
  },
  {
    path: '/loginUser',
    name: 'loginUser',
    component: () => import( '../views/loginUser.vue'),
  },
  {
    path: '/userIps',
    // name: 'connectIp',
    component: () => import( '../views/userIps.vue'),
    beforeEnter: (to, from, next) => {
      console.log(store.state.users.userIps)
      if (!store.state.users.userIps) {
        next('/loginUser')
      } else {
        next()
      }
    },
    children: [
    {
      path: '/',
      name: 'connectIp',
      component: () => import('../views/connectIp.vue'),
    },
  ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router