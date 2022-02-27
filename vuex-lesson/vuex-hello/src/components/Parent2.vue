<template>
  <div>
    <h3>这是父组件2</h3>
    <p>展示store内共享的数据</p>
    <ul v-if="array.length">
      <li v-for="item in array" :key="item">{{ item }}</li>
    </ul>
    <Son2 />
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import Son2 from "./Son2";
export default {
  name: "Parent2",
  components: {
    Son2,
  },
  data() {
    return {
      a: 1,
    };
  },
  // mapState 的作用就是将 store 内的某些数据映射成组件的 computed
  // mapState 函数会返回一个对象，对象内是想要的计算属性
  computed: {
    // arr() {
    //   return this.$store.state.arr;
    // },
    //1.数组形式
    // ...mapState(["arr"]),
    //2.对象形式
    ...mapState({
      array: "arr",
      // 箭头函数
      // array: (state) => {
      //   // console.log(this);undefined
      //   return state.arr;
      // },
      // 可以将属性值写成一个函数，该函数默认接收 state 作为参数，让函数返回自己需要的 state 即可
      // 这个函数也可以写成普通函数和箭头函数的区别在于普通函数内可以使用 this，箭头函数内不可以
      // 这个新的计算属性需要用到 store 内的和组件内局部 的 data 时需要定义成普通函数
      // array(state) {
      //   console.log(this);
      //   return state.arr + this.a;
      // },
      // array:'arr'
    }),
  },
  created() {
    // setTimeout(() => {
    //   // this.$store.commit({ type: "getArr", data: [1, 2, 3] });
    //   this.getArr({ data: [10, 2, 3] });
    // }, 1000);
    // this.$store.dispatch("getArr");
    this.$store.dispatch({ type: "getArr", id: 10 });
  },
  methods: {
    // 只能映射成 methods 才带 commit 功能
    // 其他地方想要使用 使用 this 获取
    ...mapMutations(["getArr"]),
  },
};
</script>
<style></style>
