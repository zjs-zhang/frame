<template>
  <div>
    <Header @change-show-todos="changeShowTodos" />
    <hr />
    <div class="todo-list" v-if="showTodos.length">
      <router-link :to="`/todo/${todo.id}`" v-for="todo in showTodos" :key="todo.id">
       <TodoItem v-bind="todo"/>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import $axios from '../plugins/axios'
import TodoItem from '../components/TodoItem.vue'
import Header from '../components/Header.vue'

export interface SearchObj {
  input: string;
  value: string;
}
export interface TodoItemObj {
  id?: string;
  title: string;
  type: string;
  content: string;
}
@Component({
  components: {
    TodoItem,
    Header
  }
})
export default class Home extends Vue {
  todos: Array<TodoItemObj> = []
  showTodos: Array<TodoItemObj> = []
  async created () {
    const res = await $axios.get('/todos')
    this.todos = res.data
    this.showTodos = res.data
  }

  changeShowTodos ({ input, value }: SearchObj) {
    // console.log(this.$children)
    if (input.trim() && value) {
      this.showTodos = this.todos.filter(
        (ele) => ele.title.includes(input) && ele.type === value
      )
    } else {
      if (!input.trim() && value) {
        this.showTodos = this.todos.filter((ele) => ele.type === value)
      } else if (input.trim() && !value) {
        this.showTodos = this.todos.filter((ele) => ele.title.includes(input))
      } else {
        this.showTodos = this.todos
      }
    }
  }
}
</script>

<style scoped>
.todo-list {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
