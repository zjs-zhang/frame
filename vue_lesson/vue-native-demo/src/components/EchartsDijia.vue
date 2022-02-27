<template>
  <div>
    <div id="main"></div>
  </div>
</template>
<script>
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
//引入图例
import "echarts/lib/component/legend";
export default {
  name: "EchartsDijia",
  data() {
    return {
      position: [
        { city: "杭州", num: 855 },
        { city: "长春", num: 875 },
        { city: "成都", num: 941 },
        { city: "武汉", num: 1144 },
        { city: "广州", num: 1271 },
        { city: "深圳", num: 1690 },
        { city: "北京", num: 1792 },
        { city: "上海", num: 3603 },
      ],
      salary: [
        { value: 3.9, name: "4k-6k" },
        { value: 18.8, name: "6k-8k" },
        { value: 18.8, name: "8k-10k" },
        { value: 41.1, name: "10k-15k" },
        { value: 10.9, name: "15k-20k" },
        { value: 6.5, name: "20k-30k" },
      ],
    };
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("main"));

    // 绘制图表

    myChart.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ",
        extraCssText: "text-align:center",
      },
      legend: {
        data: this.salary.map((ele) => ele.name),
        //图例的排列方式（水平或垂直）
        orient: "vertical",
        right: 10,
        y: "center",
        //图例标记据文本的位置
        align: "right",
      },
      //对柱状图有效，对饼状图无作用
      grid: [
        {
          width: "40%",
          //grid区域内是否包含刻度标签
          // containLabel: true,
        },
      ],
      xAxis: {
        show: false,
      },
      yAxis: [
        {
          type: "category",
          data: this.position.map((ele) => ele.city),
          axisTick: {
            // length: 5,
            //阴影水平方向上的偏移距离，双刻度
            lineStyle: {
              shadowOffsetX: 5,
            },
          },
        },
        {
          type: "category",
          data: this.position.map((ele) => ele.num + "职位"),
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          offset: -60,
        },
      ],
      series: [
        //柱状图
        {
          //   name: "2011年",
          type: "bar",
          data: this.position.map((ele) => ele.num),
          itemStyle: {
            // color: "cyan",params
            color: function (params) {
              console.log(params);
              var colorLists = [
                "red",
                "lightseagreen",
                "rgb(8, 12, 58)",
                "rgb(7, 90, 83)",
                "rgb(95, 175, 126)",
                "rgb(9, 82, 37)",
                "rgb(199, 133, 11)",
                "rgb(228, 156, 109)",
              ];
              return colorLists[params.dataIndex];
            },
          },
        },
        //饼状图
        {
          name: "薪资待遇",
          type: "pie",
          //圆的半径，俩个值为内圆半径和外圆半径
          radius: ["30%", "70%"],
          //圆心的位置
          center: ["75%", "50%"],
          data: this.salary,
        },
      ],
    });
    // myChart.on("mouseover", function (params) {
    //   console.log(params);
    //   if (params.componentSubType === "pie") {
    //     console.log(1);
    //   }
    // });
    //   series: [
    //     {
    //       name: "薪资待遇",
    //       type: "pie",
    //       radius: ["50%", "70%"],
    //       avoidLabelOverlap: false,
    //       label: {
    //         show: true,
    //         position: "outside",
    //         alignTo: "lableLine",
    //       },
  },
};
</script>
<style>
#main {
  /* width: 600px; */
  height: 400px;
}
</style>