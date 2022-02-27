<template>
  <div>
    <div>展示父组件传过来的number{{ $parent.number }}</div>
    <div>{{ x() }}</div>
    <button @click="$parent.number = 999">修改</button>
    <button @click="setX(50)">修改number</button>
  </div>
</template>
<script>
export default {
  name: "Son1",
  inject: ["x", "setX"],
};
</script>
<style></style>
