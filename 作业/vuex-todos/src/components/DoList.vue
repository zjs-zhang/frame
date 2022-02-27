<template>
  <ul>
    <li v-for="todo in todosList" :key="todo.id">
      <input
        class="checkbox"
        type="checkbox"
        :checked="todo.isCrossout"
        @change="changeTodo(todo)"
      />
      <!-- 第一种做法：向每个数据对象内添加一条属性 -->
      <!-- <span
        v-show="!todo.isEdit"
        :class="{ active: todo.isCrossout }"
        @dblclick="showEditState(todo.id)"
        >{{ todo.text }}</span
      > -->
      <!-- <input
        class="text"
        v-show="todo.isEdit"
        type="text"
        :value="todo.text"
        :ref="todo.id"
        @blur="editTodo(todo.id)"
      /> -->
      <!-- 第二种做法：直接设置一个editTodosId -->
      <span
        v-if="!(editTodosId === todo.id)"
        :class="{ active: todo.isCrossout }"
        @dblclick="showEdit(todo.id)"
        >{{ todo.text }}</span
      >
      <input
        v-else
        class="text"
        type="text"
        :value="todo.text"
        :ref="todo.id"
        @blur="editTodo(todo.id)"
      />
      <!-- onselectstart="return false" -->
      <button v-show="!todo.isEdit" @click="del(todo.id)">×</button>
    </li>
  </ul>
</template>
<script>
// import { mapState } from "vuex";
export default {
  name: "DoList",
  data() {
    return {
      editTodosId: "",
    };
  },
  computed: {
    // ...mapState(["todosList"]),
    todosList() {
      return this.$store.getters.todosList;
    },
  },
  methods: {
    del(id) {
      console.log(id);
      // this.$store.commit({ type: "delTodo", id: id });
      this.$store.dispatch({ type: "delTodo", id: id });
    },
    changeTodo(todo) {
      // this.$store.commit("changeTodo", id);
      this.$store.dispatch("changeTodo", todo);
    },

    // 第一种做法
    // showEditState(id) {
    //   this.$store.commit("showEditState", id);
    //   // 当你上面的语句更新了 state 让某个 编辑框出现了，接下来你就要获取这个编辑框的真实 dom 节点
    //   // this.$nextTick() 在更新状态之后立即获取 真实 dom 节点    setTimeout
    //   this.$nextTick().then(() => {
    //     this.$refs[id][0].focus();
    //   });
    // },
    // editTodo(id) {
    //   this.$store.commit({
    //     type: "editTodo",
    //     value: event.target.value,
    //     id: id,
    //   });
    // },

    // 第二种做法
    showEdit(id) {
      this.editTodosId = id;
      this.$nextTick().then(() => {
        console.log(this.$refs[id][0]);
        this.$refs[id][0].focus();
      });
    },
    editTodo(id) {
      this.$store.commit("editTodo", { value: event.target.value, id: id });
      this.editTodosId = "";
    },
  },
};
</script>
<style>
.active {
  text-decoration: line-through;
  color: #ccc;
}
ul {
  padding: 0;
}
ul li {
  list-style: none;
  display: flex;
  align-items: center;
  padding: 10px 0 10px 10px;

  position: relative;
  border-bottom: 1px solid #ededed;
}
ul li input.checkbox {
  position: absolute;
  width: 20px;
  height: 20px;
  left: 20px;
  opacity: 0;
}
ul li input.checkbox + span {
  background: url("../assets/1.svg") no-repeat left center;
  padding-left: 50px;
  /* background-position: -25px 0; */
}
ul li input.checkbox:checked + span {
  background: url("../assets/2.svg") no-repeat left center;
}
ul li span {
  width: 380px;
}
ul li button {
  height: 24px;
  border: none;
  font-size: 28px;
  color: #cc9a9a;
  outline: 0;
  background-color: #fff;
  display: none;
}
ul li:hover button {
  display: block;
}
ul li input.text {
  margin-left: 50px;
  flex-grow: 1;
  height: 24px;
  background-color: rgba(0, 0, 0, 0.03);
  border: 1px solid #aaa;
  outline: 0;
  font-size: 18px;
}
</style>
