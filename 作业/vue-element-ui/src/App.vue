<template>
  <div id="app">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#304156"
      text-color="rgb(191, 203, 217)"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-operation"></i>
          <span>路由嵌套</span>
        </template>
        <el-submenu index="1-1" class="menu">
          <template slot="title">菜单1</template>
          <el-menu-item index="1-1-1">菜单1-1</el-menu-item>
          <el-submenu index="1-1-2">
            <template slot="title">菜单1-2</template>
            <el-menu-item index="1-2-1">菜单1-2-1</el-menu-item>
            <el-menu-item index="1-2-2">菜单1-2-2</el-menu-item>
          </el-submenu>
          <el-menu-item index="1-1-3">菜单1-3</el-menu-item>
        </el-submenu>
        <el-menu-item index="1-2">菜单2</el-menu-item>
      </el-submenu>
      <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item> -->
    </el-menu>
    <EditTable />
    <Pagination />
  </div>
</template>

<script>
import EditTable from "./components/EditTable";
import Pagination from "./components/Pagination";
// import axios from "axios";
export default {
  name: "app",
  components: {
    EditTable,
    Pagination,
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.el-menu-vertical-demo {
  width: 200px;
}
.el-menu--inline > li {
  background-color: #1f2d3d !important;
}
.el-menu--inline > li > div {
  background-color: #1f2d3d !important;
}
.el-submenu__title:hover,
.el-menu--inline > li:hover {
  background-color: #001528 !important;
}
</style>
