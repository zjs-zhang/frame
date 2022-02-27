<template>
  <div>
    <router-view></router-view>
    <!-- <Menu :menuTree="menuTree" /> -->
  </div>
</template>
<script>
// import Menu from "./components/Menu";
export default {
  name: "App",
  // components: {
  //   Menu,
  // },
  // created() {
  //   this.$store.dispatch("menuTree");
  //   去本地浏览器获取sessionStorage
  // },
  // computed: {
  //   menuTree() {
  //     return this.$store.state.menuTree;
  //   },
  // },
  // async created() {
  //   const { menuList } = await axios.get("/menus")
  //   // console.log(res.menuList)
  //   const menuTree = []
  //   menuList.forEach((ele) => {
  //     if (ele.pid === -1) {
  //       menuTree.push(ele)
  //     } else {
  //       if (menuList.find((item) => item.id === ele.pid)) {
  //         if (menuList.find((item) => item.id === ele.pid).children) {
  //           menuList.find((item) => item.id === ele.pid).children.push(ele)
  //         } else {
  //           menuList.find((item) => item.id === ele.pid).children = [ele]
  //         }
  //       }
  //     }
  //   })
  //   console.log(menuTree)
  // },
};
</script>
<style></style>
