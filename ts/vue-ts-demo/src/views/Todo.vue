<template>
  <div class="todo-box" v-if="$route.params.id ? todo : true">
    <div v-if="!isEdit">
      <el-button type="primary" @click="$router.push('/')">返回</el-button>
      <h2>{{ todo.title }}</h2>
      <span>{{ todo.type }}</span>
      <p>{{ todo.content }}</p>
      <el-button type="primary" @click="edit">编辑</el-button>
      <el-button type="primary" @click="del">删除</el-button>
    </div>
    <div class="edit-box" v-if="isEdit">
      <div>
        <span class="search-text"
          >标题：
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </span>
        <span
          >类型：
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </span>
        <span
          >内容：
          <el-input
            type="textarea"
            v-model="textarea"
            :rows="5"
            placeholder="请输入内容"
          ></el-input>
        </span>
        <el-button type="primary" @click="isEdit = false">取消</el-button>
        <el-button type="primary" @click="save">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import $axios from '../plugins/axios'
import { Route } from 'vue-router'
import { TodoItemObj } from './Home.vue'
// import { MessageBox } from 'element-ui'
@Component
export default class Todo extends Vue {
  $route!: Route
  // $messageBox
  // $message
  todo: TodoItemObj | null = null
  isEdit = false
  input = ''
  value = ''
  textarea = ''
  options = [
    {
      value: 'study'
    },
    {
      value: 'life'
    },
    {
      value: 'work'
    }
  ]

  async created () {
    const { id } = this.$route.params
    if (id) {
      const res = await $axios.get(`/todos/${id}`)
      this.todo = res.data
    } else {
      this.isEdit = true
    }
  }

  edit () {
    const { todo } = this
    this.isEdit = true
    if (todo) {
      this.input = todo.title
      this.value = todo.type
      this.textarea = todo.content
    }
  }

  async save () {
    const { todo, input, value, textarea } = this
    const newTodo: TodoItemObj = {
      title: input,
      type: value,
      content: textarea
    }
    if (todo) {
      const res = await $axios.patch(`/todos/${todo.id}`, newTodo)
      this.todo = res.data
    } else {
      const res = await $axios.post('/todos', newTodo)
      this.$router.push(`/todo/${res.data.id}`)
      this.todo = res.data
    }
    this.isEdit = false
  }

  del () {
    this.$messageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(async () => {
        await $axios.delete(`/todos/${this.todo.id}`)
        this.$message({
          type: 'success',
          message: '删除成功!',
          duration: 1000
        })
        setTimeout(() => {
          this.$router.push('/')
        }, 1300)
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
  }
}
</script>

<style scoped>
.edit-box {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
/* .edit-box div{
  width: 50%;
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%)
}*/
.edit-box div span {
  display: block;
}
</style>
