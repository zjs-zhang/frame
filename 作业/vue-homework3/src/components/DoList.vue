<template>
  <ul class="list">
    <DoItem v-for="(item) in lists" :key="item.id" :listItem="item" @del-todo="delTodo" />
  </ul>
</template>

<script>
import DoItem from "./DoItem";
export default {
  name: "DoList",
  components: {
    DoItem,
  },
  props: ["lists", "delTodo"],
};
</script>

<style>
ul {
  list-style: none;
}
</style>
