<template>
  <div class="title">
    <router-link :to="type1 ? `/${type1}/全部` : '/全部'">全部</router-link>
    <router-link :to="type1 ? `/${type1}/前端` : '/前端'">前端</router-link>
    <router-link :to="type1 ? `/${type1}/后端` : '/后端'">后端</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "PostListTitle",
  props: ["type1"],
}
</script>
<style></style>
