var chartDom = document.getElementById('xxx');
var myChart = echarts.init(chartDom);
var option;

var jsonData = JSON.parse(data)

echarts.registerMap('Heping', jsonData);

myChart.setOption(option = {
  visualMap: {
    min: 800,
    max: 50000,
    text: ['High', 'Low'],
    realtime: false,
    calculable: true,
    inRange: {
      color: ['lightskyblue', 'yellow', 'orangered']
    }
  },
  series: [
    {
      name: '天津和平区街道划分',
      type: 'map',
      mapType: 'Heping', // 自定义扩展图表类型
      label: {
        show: true
      },
      data: [
        { name: '南市街', value: 15477.48 },
        { name: '劝业场街', value: 44045.49 },
        { name: '小白楼街', value: 37659.78 },
        { name: '南营门街', value: 5881.84 },
        { name: '新兴街', value: 4178.01 },
        { name: '五大道街', value: 806.98 }
      ],
      // 自定义名称映射
      nameMap: {
        'nanshi': '南市街',
        'quanyechang': '劝业场街',
        'xiaobailou': '小白楼街',
        'nanyingmen': '南营门街',
        'xinxing': '新兴街',
        'wudadao': '五大道街'
      }
    }
  ]
});

option && myChart.setOption(option);
