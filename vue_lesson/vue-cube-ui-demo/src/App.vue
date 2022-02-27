<template>
  <div id="app">
    <cube-button>Button</cube-button>
    <!-- 默认的竖向滚动条，会根据 data 设置成 ul li  -->
    <!-- <div class="box">
      <cube-scroll
        ref="scroll"
        :data="items">
      </cube-scroll>
   </div> -->
    <!-- 自定义竖向滚动条内的列表内容,给 scroll 组件传递插槽 -->
    <div class="box">
      <cube-scroll
        ref="scroll"
        :data="items"
        :options="options"
        @pulling-down="onPullingDown"
        @pulling-up="onPullingUp"
        class="scroll-list"
      >
        <ul class="list">
          <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import _ from "lodash"
export default {
  name: "App",
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      isLoading: false,
    }
  },
  computed: {
    options() {
      return {
        pullDownRefresh: {
          txt: "刷新成功",
        },
        pullUpLoad: {
          txt: {
            more: "加载中",
            noMore: "我是有底线的",
          },
        },
        scrollbar: true,
      }
    },
  },
  methods: {
    onPullingDown() {
      // 模拟更新数据
      console.log(Math.random())
      setTimeout(() => {
        // 如果有新数据
        // 当 items 被修改之后下拉刷新成功，加载动画自动停止,前提是 items 写在了 scroll 组件内的 data 属性
        this.items = _.shuffle(this.items)
        // this.items.unshift(this.items[1])
        // 如果没有新数据
        // this.$refs.scroll.forceUpdate();
      }, 1000)
    },
    onPullingUp() {
      // 模拟更新数据
      if (!this.isLoading) {
        this.isLoading = true
        setTimeout(() => {
          // 如果有新数据
          if (this.items.length < 40) {
            let newPage = this.items.slice(0, 5)
            this.items = this.items.concat(newPage)
          } else {
            // 如果没有新数据
            console.log("无数据可更新")
            // 当请求回来没有新的数据了，那么就无法更新 comments 会导致下拉的动画不会结束，
            // 需要手动使用 scroll 组件的 forceUpdate 方法停止加载动画
            this.$refs.scroll.forceUpdate()
          }
          this.isLoading = false
        }, 1000)
      }
    },
  },
}
</script>

<style>
.box {
  width: 100vw;
  height: 350px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.list li {
  width: 100%;
  height: 60px;
  background-color: #ccc;
  margin-bottom: 10px;
  text-align: center;
  line-height: 60px;
}
</style>
