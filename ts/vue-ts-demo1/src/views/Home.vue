<template>
  <div>
    <h1>Home</h1>
    <button @click='test'>-</button>
    <span>{{ count }}</span>
    <button @click="add">+</button>
    <Btn text="按钮" :count="count" @add="add" />
    <router-link to="/?tab=all">Home</router-link>
    <router-link to="/?tab=ask">About</router-link>
    <span>{{ sum }}</span>
    <span>{{ str }}</span>
  </div>
</template>

<script lang="ts">
// vue-property-decorator是一个vue类组件装饰器  快捷方便的使用类组件内的属性和方法
import { Component, Vue, Watch } from 'vue-property-decorator'
import Btn from '../components/Btn.vue'
// 组件想要和 vuex 做交互，提倡使用 vuex-class 做交互，不直接在 vuex 去取一些辅助方法(mapState ...)
// 还有一个工具 vuex-module-decorators 稍微比上面好用一点
import {State} from 'vuex-class'
@Component({
  components: {
    Btn
  },
  created() {
    setTimeout(() => {
      this.count--
    }, 1000)
  },
  computed: {
    sum() {
      return this.count * 2
    }
  }
})
export default class Home extends Vue {
  $route!:any
  count = 0
  @State('str') str!:string
  add() {
    this.count++
  }
  test(){
    // 直接在事件内访问 $route 编辑器会报错
    // $route 并不存在在我的组件上
    // 直接在 class 内定义一个公共属性 $route
    console.log(this.$route);
    
  }
  @Watch('$route.query.tab', { immediate: true })
  handler(a, b) {
    console.log(a, b)
  }
}
</script>

<style scoped>
</style>