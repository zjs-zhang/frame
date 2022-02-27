//创建vue的store仓库
// 一. 导入 vuex 和 vue 使用 Vue 的 use 方法将  vuex 做成全局
import Vue from "vue"
import Vuex from "vuex"
import { ADD, CHANGE } from "./mutation-types"
Vue.use(Vuex)
//二.创建store仓库，需要使用Vuex.Store类（class）创建
// 创建的时候需要传递参数
const store = new Vuex.Store({
  //1.state放组件共享的数据
  state: {
    num: 100,
    arr: [],
  },
  //2.mutations内存放修改state内数据的方法
  // 修改方法默认接收 state 作为第一个参数
  // 需要的话可以设置第二个参数接收 commit 传递的第二个参数
  // 不能设置第三个或者更多，那么想要传递多条数据可以将第二个参数设置成对象

  // commit 提交 mutation 可以直接使用 对象形式提交,那么 mutation 函数的第二个参数就会接受整个对象

  // 想要修改共享数据的话，直接对 state 内的数据进行修改即可
  mutations: {
    // add(state) {
    //属性名为字符串如何访问
    [ADD](state) {
      state.num = 800
    },
    // change(state, payload) {
    [CHANGE](state, payload) {
      // state.num=payload
      //   state.num = payload.num1 + payload.num2
      state.num = payload
    },
    //mutations中不能包含异步操作
    getArr(state, payload) {
      state.arr = payload.data
    },
  },
  getters: {
    //箭头函数和普通函数都可，注意this的指向
    // getNum: (state) => state.arr.reduce((res, ele) => (res += ele), 0),
    sum(state, getters) {
      console.log(getters)
      return state.arr.reduce((res, ele) => (res += ele), 0)
    },
    // 下面的 getNum 是获取对应的某个 num , 跟给定的值最接近的那个数
    // 做此功能需要组件内传递限定值
    // 但是默认 getters 的函数是不能接收组件内传递参数的,可以通过让 getter 返回一个函数，来实现给 getter 传参
    getNum(state) {
      return (limitNum) => {
        const arr = state.arr
        let res = arr[0]
        if (res !== limitNum) {
          for (let i = 1; i < arr.length; i++) {
            // if (arr[i] === limitNum) {
            //   res = arr[i]
            //   break
            // } else if (Math.abs(arr[i] - limitNum) < Math.abs(res - limitNum)) {
            //   res = arr[i]
            // }
            if (Math.abs(arr[i] - limitNum) < Math.abs(res - limitNum)) {
              res = arr[i]
              if (arr[i] === limitNum) {
                break
              }
            }
          }
        }
        return res
      }
    },
  },
  actions: {
    // 只要有 action 函数就会有对应的 mutation 函数，所以名称一般写成重名的
    // action 函数默认接受一个 context 作为参数 context 是一个对象，对象下有 commit 方法 以及 store 内的 state
    // 当没有异步操作的时候也可以设置 action 函数

    // getArr({commit,state}, payload) {
    //commit('getArr')

    getArr(context, payload) {
      console.log(payload.id)
      // context.commit("getArr", { data: [10, 2, 3] })
      setTimeout(() => {
        context.commit({ type: "getArr", data: [10, 2, 3] })
      }, 1000)
    },
  },
})
//三.导出创建好的store
export default store
// 四. 在 main 内导入，并且在创建整个 vue 项目的实例的时候添加上 store

// 上述四步完毕之后，vue 项目的所有组件内都可以使用了
