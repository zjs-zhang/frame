<template>
  <div>
    <h3>这是父组件1</h3>
    <p>展示store内共享的数据{{ num }}</p>
    <!-- <button @click="handleClick">修改</button> -->
    <button @click="add">修改</button>
    <button @click="change">修改数据为600</button>
    <!-- <button @click="change({ new: { num1: 100, num2: 200 } })"> -->
    <!-- 修改数据为600 -->
    <!-- </button> -->
    <Son1 />
  </div>
</template>
<script>
// import { ADD, CHANGE } from "../store/mutation-types";
import { mapMutations } from "vuex";
import Son1 from "./Son1";
export default {
  name: "Parent1",
  components: {
    Son1,
  },
  created() {
    console.log(this);
  },
  computed: {
    num() {
      return this.$store.state.num;
    },
  },
  methods: {
    handleClick() {
      //   // this.$store.state.num = 1000
      //   // 上述操作可以修改 store 内的数据但是绝对不能使用，就和我们之前说的当 props 是对象的时候子组件不要直接修改，这样修改了之后追踪不到修改的来源
      //   // 想要修改 store 内的数据，必须使用 commit 来触发 mutation 函数
      //   // 在组件内直接导入 store ,store 内默认就有 commit 方法
      //   this.$store.commit(ADD)
      //   this.$store.commit('ADD')
    },
    change() {
      //   // store.commit("change", { num1: 600, num2: 800 });
      this.$store.commit("CHANGE", 600);
      //   // 对象形式提交
      //   this.$store.commit({
      //     // type 代表 mutation 方法名
      //     type: "CHANGE",
      //     new: {
      //       num1: 100,
      //       num2: 200,
      //     },
      //   })
    },

    // 在组件中提交 Mutation
    //1.以数组形式提交，事件方法名与mutation是中的方法名要一致，传递参数需要在事件定义中写（支持载荷）
    // ...mapMutations(["ADD", "CHANGE"]),
    // 将 `this.ADD()` 映射为 `this.$store.commit('ADD')`
    // 相当于
    // ADD(){
    //     this.$store.commit('ADD')
    // }
    // 2.以对象形式提交,属性名为事件方法名，属性值为mutation是中的方法名，传递参数需要在事件定义中写（支持载荷）
    ...mapMutations({ add: "ADD", change: "CHANGE" }),
    // 将 `this.add()` 映射为 `this.$store.commit('ADD')`
  },
};
</script>
<style></style>
