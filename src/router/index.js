import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/log/login.vue'
import SignUp from '../components/log/sign-up.vue'
import store from '../store/index'

const isLogged=store.getters['auth/isLogged'];
console.log(isLogged)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {requiresAuth: true},
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {requiresAuth: true},
  },
  {
    path: '/edit-user/:id',
    name: 'edit',
    component: () => import(/* webpackChunkName: "edit" */ '../components/users/EditUser.vue'),
    meta: {requiresAuth: true},
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../components/users/user.vue'),
    meta: {requiresAuth: true},
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// middleware
router.beforeEach((to,from,next)=>{
  if(to.matched.some(record=>record.meta.requiresAuth)){ //to.meta.requiresAuth
    //need to login
    if(!store.getters['auth/isLogged']){
      // next({name: 'Login'})
      if(store.getters['auth/signUp']){next({name: 'signup'})}
      else if(store.getters['auth/isLogged']){next();}
      else{next({name: 'login'})}
    }else{
      next();
    }
  }else{
    next();
  }
})
export default router
