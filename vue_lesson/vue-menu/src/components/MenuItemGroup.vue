<template>
  <el-menu-item-group>
    <template v-for="(item, index) in menuItemTree">
      <el-menu-item :key="index"> {{ item.name }}</el-menu-item>
      <MenuItemGroup
        :key="index"
        v-if="item.children"
        :menuItemTree="item.children"
      />
    </template>
  </el-menu-item-group>
</template>
<script>
export default {
  name: "MenuItemGroup",
  props: ["menuItemTree"],
};
</script>
<style></style>
