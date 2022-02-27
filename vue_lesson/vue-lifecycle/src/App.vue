<template>
  <div class="container">
    <ul v-if="articles.length">
      <LiItem v-for="item in articles" :key="item.id" :article="item" :text="text" />
    </ul>
    <div v-else>
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599496771607&di=85d91b5ab7c97b6631b75811b2068e41&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1194615664%2C1359100191%26fm%3D214%26gp%3D0.jpg"
        alt
      />
    </div>
    <!-- <button @click="text='xiao'">修改</button> -->
    <button @click="show=!show">修改</button>
    <Box v-if="show" />
  </div>
</template>

<script>
import LiItem from "./components/LiItem";
import Box from "./components/Box";
import axios from "axios";
import "../icons/iconfont.css";
export default {
  name: "App",
  components: {
    LiItem,
    Box,
  },
  data() {
    return {
      articles: [],
      text: "zhxnsg",
      show: true,
    };
  },
  // 生命周期
  // 阶段 一
  // 初始渲染阶段 (其实就是页面刚进入的时候或者刷新的时候)
  // 该阶段需要实现的大概有 获取页面初始数据(进入页面就向后台获取数据然后更新页面，或者其他的一些进入页面就需要做的事)
  beforeCreate() {
    console.log("父组件刚被创建，在初始化data之前");
  },
  created() {
    console.log(
      "父组件的数据观测 (data observer)，property 和方法的运算，watch/event 事件回调,配置完毕"
    );
    // 此阶段最适合进入页面就修改 data ，发送请求获取后台数据，修改 data
    axios.get("http://localhost:3008/articalList").then((res) => {
      // setTimeout(() => {
      this.articles = res.data;
      // }, 800);
    });
  },
  beforeMount() {
    console.log("父组件即将要渲染，挂载之前");
  },
  mounted() {
    console.log("父组件渲染执行完毕");
  },
  beforeUpdate() {
    console.log("父组件数据更新之前");
  },
  updated() {
    console.log("父组件数据更新完毕，页面更新渲染完毕");
  },
};
</script>

<style>
.container > div {
  width: 500px;
  margin-left: 300px;
}
.container > div img {
  width: 100%;
  height: 100%;
}
</style>
