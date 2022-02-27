<template>
  <div class="post">
    <div class="left">
      <!-- this.$emit('update:title', newTitle)-->
      <!-- <button @click="$emit('update:x', 'one')">one</button><br />
      <button @click="$emit('update:x', 'two')">two</button><br />
      <button @click="$emit('update:x', 'three')">three</button> -->
      <button @click="title = 'one'">one</button><br />
      <button @click="title = 'two'">two</button><br />
      <button @click="title = 'three'">three</button>
    </div>
    <div class="right">
      <!-- <div v-if="!x">请点击右侧进行选择</div>
      <div v-else-if="x === 'one'">第一篇</div>
      <div v-else-if="x === 'two'">第二篇</div>
      <div v-else-if="x === 'three'">第三篇</div> -->
      <div v-if="!title">请点击右侧进行选择</div>
      <div v-else-if="title === 'one'">第一篇</div>
      <div v-else-if="title === 'two'">第二篇</div>
      <div v-else-if="title === 'three'">第三篇</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabPosts",
  //   props: ["x"],
  data() {
    return {
      title: "",
    }
  },
}
</script>
<style>
.post {
  width: 800px;
  height: 200px;
}
.left {
  width: 200px;
  border-right: 1px solid #ccc;
  box-sizing: border-box;
  float: left;
  height: 200px;
}
.right {
  width: 300px;
  float: left;
  height: 200px;
}
</style>
