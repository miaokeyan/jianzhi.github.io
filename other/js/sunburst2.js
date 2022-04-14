//图表模块
(function(){
    //1. 实例化对象
    var myChart = echarts.init(document.querySelector('.sunburst'));
    //2.指定图表的配置项和数据
    var data = [

    {
      name: '用途',
      itemStyle: {
            color: '#2E7A2C'
          },
      children: [
        {
          name: '窗花装饰',
          value: 1,
          itemStyle: {
            color: '#A2B01F'
          },
        },
        {
          name: '刺绣底样',
          value: 1,
          itemStyle: {
            color: '#73892F'
          },
        }
      ]
    },
  

];
var option = {
    series: {
      type: 'sunburst', 
      sunburst:{center:[400, 30]},
      data: data,
      radius: [0, '25%'],
      itemStyle: {
        borderRadius: 4,
        borderWidth: 1
      },
      
      label:{
          fontSize: 14,
          rotate: 'radial',    
          align:'center'
        },
    
      grid:{
        left:'0%',
        right:'0%',
        bottom:'0%',
        containLabel:false    
      },
     
      levels: [
        {},
        {
          r0: '8%',
          r: '33%',
          itemStyle: {
            borderWidth: 2
          },
          label: {
            rotate: 'tangential'
          }
        },
        {
          r0: '33.1%',
          r: '40%',
          label: {
            position: 'outside',
            align: 'right'
          }
        },
        
      ]
    }
    };
    // 3.使用刚指定的配置项和数据显示图表。
    // 旭日图
    myChart.setOption(option);
})();

