<template>
  <div>
    <!-- 如果直接设置成 v-model -->
    <!-- 报错 Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. -->
    <!-- 请避免直接修改 prop ，在父组件重新渲染的时候该属性会被重写 -->
    <!-- <input type="text" v-model="searchContent" /> -->
    <!-- 在 template 中当事件函数内想要使用事件对象请使用 $event -->
    <!-- <input
      type="text"
      @input="$emit('change-value',$event.target.value)"
      :value="searchContent"
      placeholder="Search..."
    />-->
    <input ref="searchValue" type="text" :value="searchContent" placeholder="Search..." />
    <br />
    <!-- <input type="checkbox" name id="checked" v-model="isStocked" /> -->
    <!-- <input
      type="checkbox"
      name
      id="checked"
      @change="$emit('change-checked',$event.target.checked)"
      :ckecked="isStocked"
    />-->
    <input ref="checkStatus" type="checkbox" id="checked" :checked="isStocked" />
    <label for="checked">Only show products in stock</label>
    <br />
    <!-- 现在是只要修改了查询条件页面就直接展示筛选的结果 -->
    <!-- 现在要求点击查询按钮之后再显示查询内容 -->
    <!-- 方案1. 点击按钮之后在修改父组件的 data -->
    <button @click="search">查询</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  props: ["searchContent", "isStocked"],
  methods: {
    search() {
      this.$emit("change-value", this.$refs.searchValue.value);
      this.$emit("change-checked", this.$refs.checkStatus.checked);
    },
    reset() {
      this.$emit("change-value", "");
      this.$emit("change-checked", false);
    },
  },
};
</script>

<style>
input {
  outline: 0;
}
#checked {
  margin-right: 6px;
}
</style>