<template>
  <div>
    <h4>我是儿子1</h4>
    <h5>在给定的数中，与2最接近的是-->{{ get(2) }}</h5>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Son1",
  computed: {
    // getNum() {
    //   return this.$store.getters.getNum(2);
    // },
    // ...mapGetters(["getNum"]),
    ...mapGetters({
      get: "getNum",
    }),
  },
};
</script>
<style></style>