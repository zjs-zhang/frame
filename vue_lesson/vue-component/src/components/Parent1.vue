<template>
  <div>
    <div>展示父组件的number{{ number }}</div>
    <div>展示父组件的provide{{ number }}</div>
    <Son1 />
    <button @click="number = 555">点击</button>
  </div>
</template>
<script>
import Son1 from "./Son1";
export default {
  name: "Parent1",
  components: {
    Son1,
  },
  data() {
    return {
      number: 666,
    };
  },
  created() {
    this.number = 888;
  },
  // 将provide写成一个方法即可获取到data内的数据
  provide() {
    return {
      //   x: this.number,
      //此时传递的是一个方法（数据可响应）
      // x: this.getNum,
      x: () => this.number,
      setX: (newNum) => (this.number = newNum),
    };
    // x: "hello",
  },
  methods: {
    // getNum() {
    //   return this.number;
    // },
  },
};
</script>
<style></style>
