import Vue from 'vue'
import Vuex from 'vuex'
// import company from './modules/compony'
import {ICompany} from './modules/compony'
Vue.use(Vuex)
// 所有模块内的数据接口类型,都声明在这
  // 也就是 store 内的 state 的对象的接口类型
 interface IRootState{
   company:ICompany
 }
const store=new Vuex.Store<IRootState>({})
export default new Vuex.Store({
  state: {
    str:'hello'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    // company
  }
})
