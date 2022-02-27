<template>
  <button @click="add">{{ text }}{{ count }}</button>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator'

@Component
export default class Btn extends Vue {
  // 如果 text 提示错误，并不是代码不能正常运行  提示 Property 'text' has no initializer and is not definitely assigned in the constructor.Vetur  原因就是 text 没有初始化并且也没有在 constructor 内赋值。
  // 1. 直接在 text 后面加一个 !    2. 给text 声明一个联合类型  string | undefined
  @Prop()
  text: string
  @Prop(Number)
  count: Number
  //类型校验
  // @Prop({
  //   type: String,
  //   default: '按钮'
  // })
  // text: string
  @Emit()
  //事件名与父组件传递过来的一致时，可省略this.$emit
  add() {
    console.log(111)
    // this.$emit('add')
  }
}
</script>

<style scoped>
</style>