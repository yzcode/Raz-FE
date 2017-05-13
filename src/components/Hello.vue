<template>
  <div class="hello">
    <h2>Pie Chart !</h2>
    <div id="pie_chart" class="echarts"></div>
  </div>
</template>

<script>

var echarts = require('echarts')

var option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'}
      ]
    }
  ]
}

export default {
  components: {
  },
  name: 'hello',
  data () {
    return {
    }
  },
  mounted () {
    var pieChart = echarts.init(document.getElementById('pie_chart'))
    pieChart.setOption(option)
    setTimeout(() => {
      option.series[0].data.push({value: 1548, name: '搜索引擎'})
      pieChart.setOption(option)
    }, 5000)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .echarts {
    height: 300px;
    width: 500px;
    text-align: center;
    margin: auto;
  }
</style>
