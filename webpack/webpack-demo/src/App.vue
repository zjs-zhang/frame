<template>
  <div>
    <div class="box">
      <span class="text">hello123erefrgb</span>
      <Title title="哈哈哈"/>
    </div>
    <div>
      <span>{{ count }}</span>
      <button @click="add">修改count</button>
      <span>{{ sqrt }}</span>
    </div>
    <el-button type="primary">按钮</el-button>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
    <img src="./assets/logo.png" alt="">
    <img :src="logo" alt="">
    <router-view></router-view>
  </div>
</template>
<script>
import logo from './assets/logo.png'
import Title from './components/title'
import axios from 'axios'
export default {
  data() {
    return {
      logo: logo,
      num:100
    }
  },
  name: 'App',
  components: {
    Title,
  },
  computed: {
    count() {
      return this.$store.state.count
    },
    sqrt() {
      return this.$store.getters.countSqrt
    }
  },
  async created () {
    let url=''
    if(ENV === 'development'){
      url = 'http://localhost:8000'
    }else{
      url = 'https://dijiaxueshe.com/xx/ee'
    }
    console.log(url);
    axios.defaults.baseURL = ENV === 'development'?'/api':'https://baidu.com'
    const res = await axios.get('/user/sunny-zz')
    console.log(res);
  },
  methods: {
    add() {
      this.$store.dispatch('add')
    }
  }
}
</script>
<style lang="less">
.box{
  display: flex;
  .text{
    color:aquamarine
  }
}
</style>