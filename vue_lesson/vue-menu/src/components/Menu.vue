<template>
  <el-menu>
    <template v-for="(item, index) in menuTree">
      <!-- <el-submenu :key="index" :index="index.toString()" v-if="item.children">
        <template slot="title">
          <span>{{ item.name }}</span>
        </template> -->
      <!-- <el-menu-item v-for="child in item.children" :key="child">{{
          child.name
        }}</el-menu-item> -->
      <!-- <MenuItemGroup :menuItemTree="item.children" v-if="item.children" /> -->
      <!-- <Menu
          v-if="item.children && item.children.length"
          :menuTree="item.children"
        /> -->
      <!-- </el-submenu> -->
      <MenuItem :key="index" :menu="item" />
      <!-- <el-menu-item :key="index" :index="index.toString()" v-else>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item> -->
    </template>
  </el-menu>
</template>
<script>
// import MenuItemGroup from "./MenuItemGroup";
import MenuItem from "./MenuItem";
export default {
  name: "Menu",
  components: {
    // MenuItemGroup,
    MenuItem,
  },
  props: ["menuTree"],
};
</script>
<style></style>
