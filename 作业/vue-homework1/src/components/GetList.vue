<template>
  <div class="wrap cf">
    <button @click="listShow" class="btn">点击获取数据</button>
    <div v-if="!articalList.length" class="loading">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597148921342&di=41d91f59a880ff57b78987a31213842f&imgtype=0&src=http%3A%2F%2Ftc.sinaimg.cn%2Fmaxwidth.2048%2Ftc.service.weibo.com%2Fp%2Fjy_sccnn_com%2F334245f1e475c61d070fe07822f9c904.gif"
        alt
      />
    </div>
    <div v-else class="list">
      <div v-for="item in articalList" :key="item.name">
        <span>{{item.name}}</span>
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetList",
  data: function () {
    return {
      articalList: [],
    };
  },
  methods: {
    listShow() {
      this.articalList = [
        {
          name: "阿里巴巴淘系技术",
          title: "一份优秀的前端开发工程师简历是怎么样的？",
        },
        {
          name: "前端森林",
          title: "面试官：webpack原理都不会？",
        },
        {
          name: "johnYu",
          title: "Web开发应了解的5种设计模式🍊",
        },
        {
          name: "Throwable",
          title: "聊聊Java内省Introspector",
        },
        {
          name: "Android_开发者",
          title: "Android 11 最终 Beta 版发布，正式版即将到来!",
        },
        {
          name: "微医大前端技术",
          title: "一文搞定前端代理骚操作！再也不怕线上bug啦！",
        },
      ];
    },
  },
};
</script>

<style>
.wrap {
  margin-left: 200px;
  margin-top: 100px;
  margin-bottom: 200px;
}
.btn {
  margin-bottom: 15px;
  padding: 3px 5px;
  margin-right: 20px;
  float: left;
  display: block;
}
.wrap .list {
  width: 500px;
  float: left;
  cursor: pointer;
}
.wrap .list span {
  color: #b2bac2;
  font-size: 12px;
  transition: color.2s;
}
.wrap .list span:hover {
  color: #007fff;
}
.wrap .list p {
  color: #000;
  font-size: 16px;
  margin-top: 5px;
}
.wrap .list p:hover {
  text-decoration: underline;
}
.wrap .list > div {
  margin-bottom: 20px;
}
.wrap .list > div:first-child p {
  color: #909090;
}
.wrap .list > div:first-child p:hover {
  text-decoration: underline;
}
</style>