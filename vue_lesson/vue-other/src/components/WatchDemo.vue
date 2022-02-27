<template>
  <div>
    <h2>计算属性的setter</h2>
    <!-- 计算属性时不可以被直接修改的 当你使用了 v-model 指令的时候，输入内容是 fullName 就会发生改变 -->
    <!-- 当你想要对计算属性直接修改的时候需要给计算属性设置 setter -->
    姓：
    <input type="text" v-model="firstName" />
    <br />名：
    <input type="text" v-model="lastName" />
    <br />全名：
    <input type="text" v-model="fullName" />
    <h2>watch 侦听器</h2>
    <!-- 当你将 answer 设置成计算属性的时候，answer 只能设置成同步函数获取，加不了异步操作 -->
    <!-- 那么就只能再设置一个 data 使用失去焦点事件去发送异步请求获取答案修改 data -->
    <!-- 针对于很平凡的操作修改data vue 提供了一个 watch 方法 -->
    question
    <input type="text" v-model.lazy="question" />
    <br />answer
    <span>{{ answer }}</span>
  </div>
</template>
<script>
export default {
  name: "WatchDemo",
  data() {
    return {
      firstName: "张",
      lastName: "三儿",
      question: "",
      answer: "请输入答案",
    };
  },
  computed: {
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(newValue) {
        // newValue 代表新的计算属性 或者叫更改之后的计算属性
        // setter 用来修改计算属性的来源 data 的
        this.firstName = newValue.split(" ")[0];
        this.lastName = newValue.split(" ")[1];
      },
    },
  },
  // newName是firstName变化后的值,oldName是变化前的值
  // firstName(newName, oldName) {
  //   this.fullName = newName + ' ' + this.lastName;
  // }
  // 监听对象的具体属性需要加引号 'person.age'
  watch: {
    question: {
      handler() {
        // 监听 question 修改 answer
        if (this.question) {
          setTimeout(() => {
            // 向后台获取答案
            this.answer = "不是";
          }, 1000);
        }
      },
      // 进入页面就执行一次
      immediate: true,
    },
  },
};
</script>
<style></style>
