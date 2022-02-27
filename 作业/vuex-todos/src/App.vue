<template>
  <div class="wrap">
    <TodosHeader />
    <TodosList />
  </div>
</template>
<script>
import TodosHeader from "./components/TodosHeader";
import TodosList from "./components/TodosList";
export default {
  name: "App",
  components: {
    TodosHeader,
    TodosList,
  },
};
</script>
<style>
* {
  margin: 0;
}
.wrap {
  width: 600px;
  margin: 0 auto;
}
</style>
