import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import router, { authRoutes, routes } from "../router"
import { json } from "body-parser"

//请求默认地址
axios.defaults.baseURL = "http://localhost:3008"
//axios 响应拦截器
axios.interceptors.response.use((res) => {
  //响应数据的相关操作
  //axios 会以该函数的返回值作为响应的结果
  return res.data
})
Vue.use(Vuex)

//得到需要的树形结构数据
const getTree = (list) => {
  const menuTree = []
  // const auths = []
  list.forEach((ele) => {
    // auths.push(ele)
    if (ele.pid === -1) {
      menuTree.push(ele)
    } else {
      const findItem = list.find((item) => item.id === ele.pid)
      if (findItem) {
        if (findItem.children) {
          findItem.children.push(ele)
        } else {
          findItem.children = [ele]
        }
      }
    }
  })
  // return { menuTree, auths }
  return menuTree
}
//拿到权限路由数组
//定义一个函数作筛选  递归
export const getRoutes = (routes, auths) => {
  return routes.filter((route) => {
    // const newRoute = { ...route }
    //相当于 route.filter(route=>auths.includes(route.name))
    if (auths.includes(route.name)) {
      if (route.children) {
        //将筛选出来的数组返回给route.children
        route.children = getRoutes(route.children, auths)
      }
      return true
    }
  })
}
export default new Vuex.Store({
  state: {
    menuTree: [],
    isLogin: false,
  },
  mutations: {
    menuTree(state, res) {
      state.menuTree = res
    },
    setLogin(state) {
      state.isLogin = true
    },
  },
  actions: {
    async menuTree({ commit, state }, text) {
      const { menuList } = await axios.post("/menus", { text })
      console.log(menuList)
      commit("menuTree", getTree(menuList))
      commit("setLogin")
      //将json串在浏览器中存起来
      sessionStorage.setItem("tree", JSON.stringify(state.menuTree))
      //需要在点击登录之后拿到数据进行页面跳转
      // this.$router.push('/')
      // const { menuTree, auths } = getTree(menuList)
      const auths = menuList.map((item) => item.auth)
      sessionStorage.setItem("auths", JSON.stringify(auths))
      // const routes = router.options.routes    这里的routes是一个数组
      routes[1].children.push(...getRoutes(authRoutes, auths))
      //addRoutes参数必须为数组
      router.addRoutes([routes[1]])
      console.log(routes)
    },
  },
  modules: {},
})
