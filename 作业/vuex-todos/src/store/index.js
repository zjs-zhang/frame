import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex)
// 公共的筛选方法
// 给定数组和类型 筛选出对应的数组
// 给定数组和类型 筛选出对应的数组获取长度
const filterArr = (arr, state) => {
  return arr.filter((ele) =>
    state === "Active"
      ? !ele.isCrossout
      : state === "Completed"
      ? ele.isCrossout
      : true
  )
}
const store = new Vuex.Store({
  state: {
    todosList: [],
    type: "All",
  },
  mutations: {
    getTodo(state, payload) {
      state.todosList = payload.data
    },
    addTodo(state, payload) {
      // state.todosList.push({
      //   id: new Date().getTime().toString(),
      //   text: payload.value,
      //   isCrossout: false,
      // })
      state.todosList.push(payload.data)
    },
    delTodo(state, payload) {
      state.todosList = state.todosList.filter((item) => item.id !== payload.id)
    },
    changeTodo(state, id) {
      const currentTodo = state.todosList.find((item) => item.id === id)
      currentTodo.isCrossout = !currentTodo.isCrossout
    },
    changeType(state, payload) {
      state.type = payload.showType
      console.log(state.type)
    },
    clearCompleted(state) {
      state.todosList = state.todosList.filter(
        (item) => item.isCrossout === false
      )
    },
    selectAll(state, value) {
      state.todosList = state.todosList.map((item) => {
        item.isCrossout = value
        return item
      })
    },
    // showEditState(state, id) {
    //   state.todosList.forEach((ele) => {
    //     ele.isEdit = false
    //     if (ele.id === id) {
    //       ele.isEdit = true
    //     }
    //   })
    // },
    // editTodo(state, payload) {
    //   const currentTodo = state.todosList.find((item) => item.id === payload.id)
    //   currentTodo.text = payload.value
    //   currentTodo.isEdit = false
    // },
    editTodo(state, payload) {
      const currentTodo = state.todosList.find((item) => item.id === payload.id)
      currentTodo.text = payload.value
    },
  },
  actions: {
    addTodo({ commit }, payload) {
      let obj = {
        id: new Date().getTime().toString(),
        text: payload.value,
        isCrossout: false,
        // isEdit: false,
      }
      axios.post("http://localhost:3008/todos", obj).then(() => {
        commit({
          type: "addTodo",
          data: obj,
        })
      })
    },
    getTodo(context) {
      axios.get("http://localhost:3008/todos").then((res) => {
        context.commit({
          type: "getTodo",
          data: res.data,
        })
      })
    },
    delTodo(context, payload) {
      axios.delete(`http://localhost:3008/todos/${payload.id}`).then(() => {
        context.commit({
          type: "delTodo",
          id: payload.id,
        })
      })
    },
    changeTodo(context, todo) {
      context.commit("changeTodo", todo.id)
      axios
        .patch(`http://localhost:3008/todos/${todo.id}`, {
          isCrossout: todo.isCrossout,
        })
        .then(() => {})
    },
    clearCompleted({ commit, state }) {
      const clearArr = state.todosList.filter((ele) => ele.isCrossout === true)
      console.log(clearArr)
      clearArr.forEach((ele) => {
        axios.delete(`http://localhost:3008/todos/${ele.id}`).then(() => {
          commit("clearCompleted")
        })
      })
    },
  },
  getters: {
    // todosList(state) {
    //   return state.todosList
    // },
    getTypeLength(state) {
      // return (type) => {
      //   return state.todosList.filter((ele) =>
      //     type === "Active"
      //       ? !ele.isCrossout
      //       : type === "Completed"
      //       ? ele.isCrossout
      //       : true
      //   ).length
      // }
      return (type) => filterArr(state.todosList, type).length
    },
    // getLeftNum(state) {
    //   return state.todosList.filter((item) => item.isCrossout === false)
    // },
    todosList(state) {
      // return state.todosList.filter((item) =>
      //   state.type === "All"
      //     ? item
      //     : state.type === "Active"
      //     ? item.isCrossout === false
      //     : item.isCrossout === true
      // )
      return filterArr(state.todosList, state.type)
    },
    // isShow(state) {
    //   return state.todosList.find((item) => item.isCrossout === true)
    // },
    getAllState(state) {
      return state.todosList.every((item) => item.isCrossout)
    },
  },
})
export default store
