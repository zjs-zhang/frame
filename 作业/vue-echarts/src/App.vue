<template>
  <div>
    <div id="main"></div>
    <Echarts/>
  </div>
</template>
<script>
import Echarts from './components/Echarts'
import echarts from 'echarts/lib/echarts'
// 引入柱状图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
export default {
  name: 'App',
  components: {
    Echarts,
  },
  data() {
    return {}
  },
  mounted() {
    var myChart = echarts.init(document.getElementById('main'))
    var colors = ['#d14a61', '#5793f3', '#675bba']
    myChart.setOption({
      color: colors,
      //提示框
      tooltip: {
        trigger: 'axis',
        // tooltip.axisPointer 是配置坐标轴指示器的快捷方式  type代表指示器的类型
        axisPointer: {
          //十字准星  启用两个正交轴
          type: 'cross',
          //横坐标 标线的样式
          lineStyle: {
            color: colors[1]
          },
          //纵坐标 标线的样式
          crossStyle: {
            color: colors[1]
          }
        }
      },
      //图例
      legend: 
        {
          data: ['expected', 'actual']
        },
      //网格
      grid: {
        top: 70,
        bottom: 50
      },
      xAxis: [
        {
          type: 'category',
          //控制横坐标从零刻度开始
          boundaryGap: false,
          //坐标轴刻度线
          axisTick: {
            show: false
          },
          //坐标轴样式
          axisLine: {
            lineStyle: {
              color: colors[1]
            }
          },
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: colors[1]
            }
          }
        }
      ],
      series: [
        {
          name: 'expected',
          type: 'line',
          smooth: true,
          data: [100, 120, 161, 134, 105, 160, 165]
        },
        {
          name: 'actual',
          type: 'line',
          smooth: true,
          data: [120, 82, 91, 154, 162, 140, 145]
        }
      ]
    })
  }
}
</script>
<style>
#main {
  width: 1200px;
  height: 350px;
}
</style>
