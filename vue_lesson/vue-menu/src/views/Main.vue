<template>
  <div>
    <router-view></router-view>
    <Menu :menuTree="menuTree" />
  </div>
</template>
<script>
import Menu from "../components/Menu"
export default {
  name: "Main",
  components: {
    Menu,
  },
  // created() {
  //   this.$store.dispatch("menuTree");
  // },
  computed: {
    menuTree() {
      return this.$store.state.menuTree
    },
  },
}
</script>
<style></style>
