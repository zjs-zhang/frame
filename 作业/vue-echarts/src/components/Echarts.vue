<template>
  <div id="bottom"></div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
// 引入柱状图
import 'echarts/lib/chart/radar'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
export default {
  name: 'Echarts',
  mounted() {
    var myChart = echarts.init(document.getElementById('bottom'))
    myChart.setOption({
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        left: 'center',
        data: ['Allocated Budget', 'Expeted Spending', 'Actual Spending']
      },
      radar: [
        {
          indicator: [
            { text: 'Sales', max: 100 },
            { text: 'Administration', max: 100 },
            { text: 'Techology', max: 100 },
            { text: 'Customer Support', max: 100 },
            { text: 'Development', max: 100 },
            { text: 'Marketing', max: 100 },
          ],
          center: ['25%', '40%'],
          radius: 80
        }
      ],
      series:[
        {
            type: 'radar',
            radarIndex: 1,
            areaStyle: {},
            data: [
                {
                    value: [85, 90, 90, 95, 95,80],
                    name: 'Allocated Budget'
                },
                {
                    value: [95, 80, 95, 90, 93,82],
                    name: 'Expeted Spending'
                },
                {
                    value: [90, 86, 95, 93, 96,80],
                    name: 'Actual Spending'
                }
            ]
        },
      ]
    })
  }
}
</script>
<style>
#bottom{
  width: 1000px;
  height: 400px;
  
}
</style>