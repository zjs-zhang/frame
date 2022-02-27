// import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'
// import 'element-ui/lib/theme-chalk/index.css'
// import ElementUI from 'element-ui'
// Vue.use(ElementUI)
//创建 vue 的实例化对象时必须传递一个 render 函数，而且该函数必须返回一个 dom 节点或者 VNode 节点
// 可以使用 h 参数创建一个 VNode 节点
// 现在还不支持 jsx 语法
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app")