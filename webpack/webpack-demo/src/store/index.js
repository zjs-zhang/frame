import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count:10000
  },
  mutations:{
    add(state){
      state.count++
    }
  },
  actions:{
    add({commit}){
      commit('add')
    }
  },
  getters:{
    countSqrt(state){
      return Math.sqrt(state.count)
    }
  },
  modules:{}
})