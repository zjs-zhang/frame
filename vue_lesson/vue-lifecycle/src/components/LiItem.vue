<template>
  <li>
    <div class="author">
      <a href="#">{{ article.author }}</a>
      <span></span>
      <a href="#">{{ article.type }}</a>
    </div>
    <p>{{ article.title }}</p>
    <div class="comment">
      <a href="#">
        <span class="iconfont icon-dianzan"></span>
        <span>{{ article.likeNum }}</span>
      </a>
      <a href="#">
        <span class="iconfont icon-pinglun2"></span>
        <span>{{ article.commentsNum }}</span>
      </a>
    </div>
    <p>{{text}}</p>
  </li>
</template>

<script>
export default {
  name: "LiItem",
  props: ["article", "text"],
  // 子组件会在父组件渲染执行完毕之前进行创建
  beforeCreate() {
    console.log("子组件刚被创建，在初始化data之前");
  },
  created() {
    console.log(
      "子组件的数据观测 (data observer)，property 和方法的运算，watch/event 事件回调,配置完毕"
    );
    // 此阶段最适合进入页面就修改 data ，发送请求获取后台数据，修改 data
  },
  beforeMount() {
    console.log("子组件即将要渲染，挂载之前");
  },
  mounted() {
    console.log("子组件渲染执行完毕");
  },
  beforeUpdate() {
    console.log("子组件数据更新之前");
  },
  updated() {
    console.log("子组件数据更新完毕，页面更新渲染完毕");
  },
};
</script>

<style>
li {
  width: 500px;
  margin-left: 300px;
  /* margin-bottom: 10px; */
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
.author a {
  font-size: 12px;
  color: #b2bac2;
}
.author a:first-child:after {
  content: "·";
  margin: 0 5px;
}
p {
  font-size: 16px;
  color: #2e2135;
  margin-bottom: 8px;
}
.iconfont {
  color: #b2bac2;
}
.comment span {
  color: #b2bac2;
  font-size: 12px;
}
.comment a {
  padding: 0px 3px;
  border: 1px solid #b2bac2;
}
</style>
