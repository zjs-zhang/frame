import Vue from "vue"
import App from "./App.vue"
// 导入全局指令
import "./directives/index"
// 导入全局过滤器
import "./filters"
// import "./components/title"
import "./plugins/title"
import UseMethodDemo from "./components/UseMethodDemo.vue"
Vue.config.productionTip = false

//vue的插件功能，其实是给组件添加全局功能
//1.prototype
Vue.prototype.$http = "axios"
//2.Vue.use方法 Vue.use(MyPlugin)
const MyPlugin = {
  //对象内设置一个install方法，方法内默认接受Vue作为参数
  install: function(Vue, a, b) {
    Vue.prototype.$xx = "test"
    Vue.component("UseMethodDemo", UseMethodDemo)
    console.log(a, b)
  },
}
// const MyPlugin = {}
// MyPlugin.install = function(Vue) {
//   Vue.prototype.$xx = "test"
// }

// MyPlugin.install(Vue, 1, 2)
Vue.use(MyPlugin, 1, 2)
// Vue.use(MyPlugin)会自动执行MyPlugin的install的方法,use方法会自动检测你的插件是否注册
new Vue({
  render: (h) => h(App),
}).$mount("#app")
