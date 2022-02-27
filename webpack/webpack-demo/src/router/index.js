import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:"Home",
    component:Home
  },
  {
    path:'/about',
    name:"About",
    component:()=>import('../views/About.vue')
  }
]

const router=new VueRouter({
  mode:'hash',
  routes
})
export default router