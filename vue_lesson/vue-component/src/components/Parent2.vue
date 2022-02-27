<template>
  <div>
    <!-- 父组件接收到的所有 props 除了 class 和 style 之外的，想要全部传递给子组件 -->
    <Son2 v-bind="$attrs" v-on="$listeners" :a="100" :c="666" />
  </div>
</template>
<script>
import Son2 from "./Son2";
export default {
  name: "Parent2",
  components: {
    Son2,
  },
  created() {
    console.log(this.$attrs);
  },
};
</script>
<style></style>
