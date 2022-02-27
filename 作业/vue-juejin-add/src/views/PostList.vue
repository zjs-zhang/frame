<template>
  <div>
    <router-link to="?sort=popular">热门</router-link>
    <router-link to="?sort=newest">最新</router-link>
    <router-link to="?sort=three_days_hottest">热榜</router-link>
  </div>
</template>
<script>
export default {
  name: "PostList",

  watch: {
    "$route.fullPath": {
      handler() {
        console.log(this.$route)
      },
    },
  },
}
</script>
<style></style>
