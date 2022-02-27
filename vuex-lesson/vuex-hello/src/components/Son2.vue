<template>
  <div>
    <h4>我是儿子2-->{{ sum }}</h4>
  </div>
</template>
<script>
export default {
  name: "Son2",
  computed: {
    sum() {
      //   return this.$store.state.arr.reduce((res, ele) => (res += ele), 0);
      return this.$store.getters.sum;
    },
  },
};
</script>
<style></style>