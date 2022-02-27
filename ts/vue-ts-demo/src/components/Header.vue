<template>
  <div class="search">
    <span class="search-text"
      ><el-input v-model="input" placeholder="请输入内容"></el-input
    ></span>
    <el-select v-model="value" clearable placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :value="item.value">
      </el-option>
    </el-select>
    <el-button
      type="primary"
      icon="el-icon-search"
      @click="search(input, value)"
      >搜索</el-button
    >
    <el-button type="primary" @click="add">添加</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator'
import { SearchObj } from '../views/Home.vue'
import VueRouter from 'vue-router'
@Component
export default class Header extends Vue {
  $router!: VueRouter
  input = ''
  value = ''
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

  @Emit()
  changeShowTodos (searchObj: SearchObj) {
    return searchObj
  }

  search (input: string, value: string) {
    console.log(111)
    this.changeShowTodos({ input, value })
  }

  add () {
    this.$router.push('/todo/create')
    console.log(111)
  }
}
</script>

<style scoped>
.search {
  display: flex;
}
.search-text {
  width: 400px;
  overflow: hidden;
  margin-right: 15px;
}
</style>
