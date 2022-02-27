<template>
  <div class="todos-header">
    <span
      v-show="todosList.length"
      @click="selectAll(!getAllState)"
      :class="{ color: !getAllState }"
      >❯</span
    >
    <input
      type="text"
      v-model="value"
      @keydown.enter="addTodo"
      placeholder="What needs to be done ?"
    />
  </div>
</template>
<script>
export default {
  name: "TodosHeader",
  data() {
    return {
      value: "",
    };
  },
  computed: {
    todosList() {
      return this.$store.getters.todosList;
    },
    getAllState() {
      return this.$store.getters.getAllState;
    },
  },
  created() {
    this.$store.dispatch({ type: "getTodo" });
  },
  methods: {
    addTodo() {
      this.$store.dispatch({ type: "addTodo", value: this.value });
      // this.$store.commit({ type: "addTodo", value: this.value })
      this.value = "";
    },
    selectAll(value) {
      this.$store.commit("selectAll", value);
    },
  },
};
</script>
<style>
.todos-header {
  position: relative;
  margin-top: 10px;
}
.todos-header input {
  /* margin-top: 20px; */
  width: 500px;
  height: 50px;
  outline: 0;
  box-shadow: 2px 0 2px rgba(0, 0, 0, 0.1), -2px 0 2px rgba(0, 0, 0, 0.1),
    0px -2px 2px rgba(0, 0, 0, 0.1);
  border: none;
  background-color: rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  padding-left: 50px;
  font-size: 18px;
  color: #4d4d4d;
}
.todos-header span {
  position: absolute;
  left: 20px;
  top: 14px;
  transform: rotate(90deg);
  font-size: 18px;
  color: #737373;
}
.todos-header span.color {
  color: #ccc;
}
</style>
