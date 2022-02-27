import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      console.log("路由独享的守卫")
      next()
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //路由懒加载
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
]

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      // 当按下浏览器的前进后退按钮 savePoition 就存在，或者使用 路由的 back  go 等方法也可以
      return savedPosition
    } else {
      // 没按下前进后退直接滚动到顶部
      return { x: 0, y: 0 }
    }
  },
})

const login = true
router.beforeEach((to, from, next) => {
  console.log("全局前置守卫")
  if (to.path === "/" || login) next()
  else alert("请先登录"), next("/")
})
router.beforeResolve((to, from, next) => {
  console.log("全局解析守卫")
  next()
})
router.afterEach((to, from) => {
  console.log(to)
  console.log(from)
  console.log("全局后置钩子")
})

export default router
