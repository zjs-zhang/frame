<template>
  <div>
    <img :src="img" alt />
    <div class="bottom">
      <p>{{text}}</p>
      <span>{{firstSpan}}</span>
      <span>{{secSpan}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DivItem",
  props: ["text", "firstSpan", "secSpan", "img"],
};
</script>

<style>
</style>