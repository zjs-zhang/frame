<template>
  <div>
    展示父组件的data{{ num }}
    <!-- <Son :num="num" @changeNum="changeNum" /> -->
    <!-- 简化父组件定义方法传递给子组件 -->
    <!-- <Son :num="num" @update:num="num = $event" /> -->
    <!-- <Son :num.sync="num" /> -->
    <!-- <Son v-bind.sync="obj" /> -->
    <Son :value="num" @input="num = $event" />
    <!-- 上面的简写 -->
    <Son v-model="num" />
  </div>
</template>
<script>
import Son from "./Son"
export default {
  name: "Parent",
  components: {
    Son,
  },
  data() {
    return {
      num: 1000,
      obj: {
        a: 10,
        b: 100,
      },
    }
  },
  methods: {
    changeNum(value) {
      this.num = value
    },
  },
}
</script>
<style></style>
