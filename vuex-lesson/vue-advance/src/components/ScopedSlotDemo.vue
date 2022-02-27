<template>
  <div>
    <h2>作用域插槽</h2>
    <div>
      <h3>展示父组件传递过来的内容</h3>
      <slot :obj="obj" />
    </div>
  </div>
</template>
<script>
export default {
  name: "ScopedSlotDemo",
  data() {
    return {
      obj: {
        name: "小红",
        age: 16,
      },
    };
  },
};
</script>
<style></style>