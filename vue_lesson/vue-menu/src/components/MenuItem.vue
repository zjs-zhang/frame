<template>
  <el-submenu :index="menu.id | transform" v-if="menu.children">
    <template slot="title">
      <router-link :to="{ name: menu.auth }">
        <span>{{ menu.name }}</span>
      </router-link>
    </template>
    <template v-for="(item, index) in menu.children">
      <!-- <el-menu-item
        v-if="!item.children"
        :key="index"
        :index="index.toString()"
        >{{ item.name }}</el-menu-item
      > -->
      <MenuItem :key="index" :menu="item" />
    </template>
  </el-submenu>
  <el-menu-item :index="menu.id | transform" v-else>
    <router-link :to="{ name: menu.auth }">
      <span>{{ menu.name }}</span>
    </router-link>
  </el-menu-item>
</template>
<script>
export default {
  name: "MenuItem",
  props: ["menu"],
  filters: {
    transform: function (value) {
      if (!value) return "";
      return value.toString();
    },
  },
};
</script>
<style></style>