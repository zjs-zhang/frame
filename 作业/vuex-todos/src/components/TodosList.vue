<template>
  <div v-show="todosList.length" class="todo-list">
    <DoList />
    <DoActive />
  </div>
</template>
<script>
import { mapState } from "vuex";
import DoList from "./DoList";
import DoActive from "./DoActive";
export default {
  name: "TodosList",
  components: {
    DoList,
    DoActive,
  },
  computed: {
    ...mapState(["todosList"]),
  },
};
</script>
<style>
.todo-list {
  margin-top: 0;
  border: none;
  box-shadow: 2px 0 2px rgba(0, 0, 0, 0.1), -2px 0 2px rgba(0, 0, 0, 0.1),
    0px 2px 2px rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.03);
  width: 500px;
  box-sizing: border-box;
  padding-bottom: 10px;
  font-size: 18px;
  color: #4d4d4d;
}
</style>
