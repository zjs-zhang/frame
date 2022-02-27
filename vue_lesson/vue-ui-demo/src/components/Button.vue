<template>
  <button @click="handleClick" :class="['btn', { active: value }]">
    <!-- 接收父组件传过来的 '哈哈哈' -->
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: ["value"],
  methods: {
    handleClick() {
      this.$emit("input", !this.value)
    },
  },
}
</script>
<style>
.btn {
  color: aqua;
}
.active {
  color: red;
}
</style>
