<template>
  <div>
    <div id="main"></div>
  </div>
</template>
<script>
import echarts from "echarts/lib/echarts"
// 引入柱状图
import "echarts/lib/chart/bar"
import "echarts/lib/chart/pie"
// 引入提示框和标题组件
import "echarts/lib/component/tooltip"
import "echarts/lib/component/title"
//引入图例
import "echarts/lib/component/legend"
export default {
  name: "App",
  mounted() {
    var myChart = echarts.init(document.getElementById("main"))
    myChart.setOption({
      series: {
        name: "薪资待遇",
        type: "pie",
        //圆的半径，俩个值为内圆半径和外圆半径
        radius: ["30%", "70%"],
        //圆心的位置
        center: ["75%", "50%"],
        data: [
          { value: 3.9, name: "4k-6k" },
          { value: 18.8, name: "6k-8k" },
          { value: 18.8, name: "8k-10k" },
          { value: 41.1, name: "10k-15k" },
          { value: 10.9, name: "15k-20k" },
          { value: 6.5, name: "20k-30k" },
        ],
      },
    })
  },
}
</script>
<style>
#main {
  height: 400px;
}
</style>
