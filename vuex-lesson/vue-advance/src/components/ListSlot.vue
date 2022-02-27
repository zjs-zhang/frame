<template>
  <div>
    <ul>
      <li v-for="item in data" :key="item">
        <slot :item="item" />
      </li>
    </ul>
  </div>
</template>
<script>
// import ListItem from "./ListItem";
export default {
  name: "List",
  //   components: {
  //     ListItem,
  //   },
  props: {
    data: {
      type: Array,
      // 对象或者数组设置默认值的时候必须写成函数返回对象获数组
      default: () => [],
    },
  },
};
</script>
<style></style>