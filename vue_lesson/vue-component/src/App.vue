<template>
  <div>
    <Parent />
    <hr />
    <Parent1 />
    <hr />
    <Parent2 :a="10" b="草莓" @x="() => console.log(1)" />
  </div>
</template>
<script>
import Parent from "./components/Parent";
import Parent1 from "./components/Parent1";
import Parent2 from "./components/Parent2";
export default {
  name: "App",
  components: {
    Parent,
    Parent1,
    Parent2,
  },
};
</script>
<style></style>
