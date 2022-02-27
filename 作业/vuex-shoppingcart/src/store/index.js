import Vue from "vue"
import Vuex from "vuex"
import products from "./modules/Products"
import cart from "./modules/cart"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    //模块化后同名的mutations，actions进行合并
    products,
    cart,
  },
})
