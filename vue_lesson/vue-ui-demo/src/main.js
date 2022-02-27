import Vue from "vue"
import App from "./App.vue"
import "./element-variables.scss"
//从element-ui自带的语言库中拿到英文
import lang from "element-ui/lib/locale/lang/en"
//从element ui内获取到自带的loacle对象，该对象下有方法可以设置国际化语言
import locale from "element-ui/lib/locale"
// import "./theme/index.css"
// import ElementUI from "element-ui"
// import "element-ui/lib/theme-chalk/index.css"
import {
  Button,
  Switch,
  Message,
  InfiniteScroll,
  Tree,
  DatePicker,
  Upload,
} from "element-ui"
// 将 Message 方法 添加到整个 vue 的原型对象内，也就是整个项目内都可以使用  this.$message 访问
// 因为我们使用的是 element 的按需加载，所以不管是组件还是方法都得使用 use 或者 prototype 设置成全局的
Vue.prototype.$message = Message
locale.use(lang)

// Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Tree)
Vue.use(InfiniteScroll)
Vue.use(DatePicker)
Vue.use(Upload)

new Vue({
  render: (h) => h(App),
}).$mount("#app")

// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
/* 或写为
 */
