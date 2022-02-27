import Vue from "vue"
import App from "./App.vue"
import router, { authRoutes, routes } from "./router"
import store, { getRoutes } from "./store"
import "./plugins/element.js"

Vue.config.productionTip = false
if (!store.state.isLogin) {
  //得到的是个json串
  const tree = sessionStorage.getItem("tree")
  const auths = JSON.parse(sessionStorage.getItem("auths"))
  if (tree) {
    store.commit("menuTree", JSON.parse(tree))
    store.commit("setLogin")
    routes[1].children.push(...getRoutes(authRoutes, auths))
    //addRoutes参数必须为数组
    router.addRoutes([routes[1]])
  }
}
router.beforeEach((to, from, next) => {
  if (to.path !== "/login" && !store.state.isLogin) next("/login")
  else next()
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
