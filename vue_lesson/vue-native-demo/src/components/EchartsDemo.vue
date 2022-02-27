<template>
  <div>
    <h3>在vue中使用echarts</h3>
    <div v-if="fruits.length">
      <div id="main-one"></div>
      <button @click="handleClick">更新数据</button>
    </div>
    <div v-else class="loading">请稍等，精彩稍后继续</div>
  </div>
</template>
<script>
// import echarts from "echarts"
// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
export default {
  name: "EchartsDemo",
  data() {
    return {
      fruits: [],
    };
  },
  created() {
    setTimeout(() => {
      this.fruits = [
        {
          name: "香蕉",
          num: 100,
        },
        {
          name: "苹果",
          num: 300,
        },
        {
          name: "大鸭梨",
          num: 500,
        },
        {
          name: "橙子",
          num: 90,
        },
        {
          name: "西瓜",
          num: 2000,
        },
      ];
    }, 1000);
  },

  //过1秒数据更新，需在更新时拿到图表实例并展示（mounted里面是一进页面即展示，所以拿不到）
  updated() {
    // 基于准备好的dom，初始化echarts实例
    //将mychart设置成全局变量，有即不再创建
    if (!this.myChart) {
      this.myChart = echarts.init(document.getElementById("main-one"));
      console.log(111);
    }

    // 绘制图表
    this.myChart.setOption({
      //表的标题
      title: {
        text: "ECharts 入门示例",
      },
      //划过提示
      tooltip: {},
      // 横坐标
      xAxis: {
        data: this.fruits.map((item) => item.name),
      },
      yAxis: {},
      series: [
        {
          // 图片系列的名称 用于 tootip 的显示
          name: "销量",
          // 设置图标类型 bar 柱状图
          type: "bar",
          // 图表的数据 一般来说式 y 轴展示数值
          data: this.fruits.map((item) => item.num),
        },
      ],
    });
  },
  methods: {
    handleClick() {
      this.fruits = [
        {
          name: "橘子",
          num: 200,
        },
        {
          name: "草莓",
          num: 100,
        },
        {
          name: "哈密瓜",
          num: 500,
        },
        {
          name: "香瓜",
          num: 90,
        },
        {
          name: "水蜜桃",
          num: 1500,
        },
      ];
    },
  },
};
</script>
<style>
#main-one {
  width: 600px;
  height: 400px;
}
</style>
