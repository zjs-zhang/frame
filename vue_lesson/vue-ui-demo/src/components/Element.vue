<template>
  <div class="ele">
    <div>
      <h2>button按钮</h2>
      <el-button
        @click="getData"
        type="primary"
        :loading="isLoading"
        icon="el-icon-check"
        >{{ isLoading ? "加载中" : "搜索" }}</el-button
      >
      <ul v-if="dataArr.length">
        <li>此处展示列表</li>
      </ul>
      <div v-if="isLoading">请稍等...</div>
      <!-- :circle="true" 等同于直接写circle -->
      <el-button icon="el-icon-search" :circle="true"></el-button>
    </div>
    <div>
      <!-- 消息提示  element-ui 内的非组件使用方法 -->
      <h2>Message消息提示</h2>
      <el-button :plain="false" @click="success">成功</el-button>
    </div>
    <div class="scroll">
      <h2>InfiniteScroll无限滚动</h2>
      <ul
        class="infinite-list"
        v-infinite-scroll="load"
        style="overflow: auto"
        :infinite-scroll-disabled="count >= 30"
      >
        <li v-for="i in count" class="infinite-list-item" :key="i">{{ i }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
// 此时导入的是一个 Message 函数
// import { Message } from "element-ui";
export default {
  name: "Element",
  data() {
    return {
      dataArr: [],
      isLoading: false,
      count: 10,
    };
  },
  methods: {
    getData() {
      this.isLoading = true;
      this.dataArr = "";
      setTimeout(() => {
        this.isLoading = false;
        this.dataArr = [1, 2, 3];
      }, 1000);
    },
    success() {
      //Message({
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
    },
    load() {
      console.log(1);
      if (this.count < 30) {
        setTimeout(() => {
          this.count += 5;
        }, 1000);
      }
    },
  },
};
</script>
<style>
.ele {
  margin-top: 50px;
}
.scroll {
  border: 1px solid blue;
  width: 300px;
  height: 400px;
  margin-top: 10px;
}
.scroll ul {
  width: 200px;
  height: 300px;
  margin: 0 auto;
}
.scroll ul li {
  line-height: 30px;
  margin-bottom: 5px;
  background-color: rgb(90, 90, 248);
  text-align: center;
  list-style: none;
}
</style>