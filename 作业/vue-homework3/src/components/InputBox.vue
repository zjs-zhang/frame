<template>
  <div class="input-box">
    <!-- <input ref="addValue" type="text" placeholder="What needs to be done?" /> -->
    <!-- 键盘事件 敲回车 -->
    <input
      v-model="value"
      type="text"
      placeholder="What needs to be done?"
      @keydown.enter="addTodo"
    />
    <span
      v-show="doList.length"
      @click="$emit('select-all',!changeAllState)"
      :class="{active:changeAllState}"
    >></span>
    <!-- <input
      type="checkbox"
      :checked="changeAllState"
      @change="$emit('select-all',$event.target.checked)"
    />-->
    <!-- <button @click="addTodo">添加</button> -->
    <!-- <button @click="doAdd">添加</button> -->
  </div>
</template>

<script>
export default {
  name: "InputBox",
  data() {
    return {
      value: "",
    };
  },
  props: ["changeAllState", "doList"],
  methods: {
    // doAdd() {
    //   this.$emit("add", this.$refs.addValue.value);
    //   this.$refs.addValue.value = "";
    // },
    addTodo() {
      const { value } = this;
      // if 语句的简写方式 条件成立时 执行后面的语句，后面的语句必须跟 if 在同一行
      if (value) this.$emit("add", value), (this.value = "");
    },
  },
};
</script>

<style>
.input-box {
  position: relative;
}
.input-box input {
  outline: 0;
  width: 448px;
  height: 40px;
  padding-left: 40px;
  font-size: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 -1px 5px #aaa;
}
button {
  outline: 0;
  width: 60px;
  height: 40px;
  margin-left: 10px;
  border: 1px solid #ccc;
}
.input-box span {
  /* content: ">"; */
  display: block;
  user-select: none;
  position: absolute;
  top: 0px;
  left: 12px;
  color: #e6e6e6;
  font-size: 30px;
  transform: rotate(90deg);
}
.input-box .active {
  color: #737373;
}
</style>
