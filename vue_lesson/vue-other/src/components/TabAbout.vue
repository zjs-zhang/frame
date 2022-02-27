<template>
  <div>
    <button @click="show = !show">change</button>
    <div v-show="show" class="box"></div>
  </div>
</template>
<script>
export default {
  name: "TabAbout",
  data() {
    return {
      show: true,
    }
  },
}
</script>
<style>
.box {
  width: 200px;
  height: 200px;
  background-color: #ccc;
}
</style>
