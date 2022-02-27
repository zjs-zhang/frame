<template>
  <div>
    <div>展示父组件传过来的num{{ value }}</div>
    <!-- <button @click="$emit('changeNum', 900)">点击修改</button> -->
    <!-- <button @click="$emit('update:num', 900)">点击修改</button> -->
    <!-- <button @click="$emit('update:a', 900)">点击修改</button> -->
    <button @click="$emit('input', 900)">点击修改</button>
  </div>
</template>
<script>
export default {
  name: "Son",
  props: {
    num: {
      type: Number,
    },
    a: {
      type: Number,
    },
    value: {
      type: Number,
    },
  },
}
</script>
<style></style>
