<template>
  <li>
    <span>{{ user.id }}</span>
    <span>{{ user.name }}</span>
    <span>{{ user.age }}</span>
    <span>{{ SEX[user.sex] }}</span>
    <button @click="x(user.id)">age+1</button>
  </li>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { IUser } from '../views/About.vue'
//这里定义了一个枚举类型的变量
enum SEX {
  // 女 = 1,
  // 男 = 0
  '女' = 1,
  '男' = 0
}
@Component
export default class User extends Vue {
  SEX = SEX
  @Prop()
  user: IUser
  // created () {
  //   console.log(this.user);
  // }
  //以下的写法是父组件使用v-bind='user'传递过来的属性
  //  在组件上使用 v-bind 非缩写  会将 v-bind 后的随想内的所有属性当作 props 传递给子组件 
  // prop 有的时候会提示错误 你的 prop 有可能是空的值 没有赋值
  // id!   非空断言(不会为空)
  // @Prop(Number)
  // id!: number
  // @Prop(String)
  // name!: string
  // @Prop(Number)
  // age!: number
  // sex是可选属性，这里给sex指定一个默认值
  // @Prop({
  //   type: Number,
  //   default: 1
  // })
  // sex!: number
  // @Emit()
  // changeUserAge(){}
  //
  @Emit('change-user-age')
  x(){}
// change
}
</script>

<style scoped>
</style>