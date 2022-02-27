<template>
  <div>
    <ul>
      <ListItem v-for="item in arr" :key="item" :item="item" :render="render" />
    </ul>
  </div>
</template>
<script>
import ListItem from "./ListItem";
export default {
  name: "List",
  components: {
    ListItem,
  },
  props: {
    arr: {
      type: Array,
      // 对象或者数组设置默认值的时候必须写成函数返回对象获数组
      default: () => [],
    },
    render: {
      type: Function,
    },
  },
};
</script>
<style></style>