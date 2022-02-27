<template>
  <section class="main">
    <div class="section-inner">
      <MainUp />
      <MainDown />
    </div>
  </section>
</template>

<script>
import MainUp from "./MainUp";
import MainDown from "./MainDown";
export default {
  name: "Section",
  components: {
    MainUp,
    MainDown,
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  background-color: #0d0d0d;
  margin: 0;
  padding-top: 50px;
}
.section-inner {
  width: 940px;
  margin: 0 auto;
}
</style>