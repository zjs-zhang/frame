<template>
  <div class="home">
    <router-link to="/recommended">推荐</router-link>
    <router-link to="/frontend">前端</router-link>
    <router-link to="/backend">后端</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Home",
}
</script>
<style></style>
