<template>
  <!-- 当 js 内的内容需要写在 template 中 -->
  <!-- 1. 在双尖括号之间 使用 {{text}} -->
  <!-- 2. 在标签的属性内使用需要将属性写成 v-bind:style='`backgroung-color: ${color}`'  引号内就是可以写 js 语法了 -->
  <!-- 语法就是 v-bind:属性名='这里面直接写js(只能是值或者运算不能是语句)即可'  v-bind: 可以简写成 : -->
  <li class="li-item">{{text}}</li>
</template>

<script>
export default {
  name: "LiItem",
  // 接受的时候使用字符串  数组方式
  props: ["text"],
};
</script>

<style>
.li-item {
  font-size: 14px;
  padding-left: 10px;
  background: url("../assets/downloads_41.gif") no-repeat left center;
  margin-bottom: 20px;
}
</style>