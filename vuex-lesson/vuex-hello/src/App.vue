<template>
  <div>
    <h3>vue组件通信的最终解决方案vuex</h3>
    <Parent1 />
    <hr />
    <Parent2 />
  </div>
</template>
<script>
import Parent1 from "./components/Parent1";
import Parent2 from "./components/Parent2";
export default {
  name: "App",
  components: {
    Parent1,
    Parent2,
  },
};
</script>
<style></style>