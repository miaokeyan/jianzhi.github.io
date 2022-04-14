//图表模块
(function(){
    //1. 实例化对象
    var myChart = echarts.init(document.querySelector('.sunburst'));
    //2.指定图表的配置项和数据
    var data = [

    {
      name:'技法',
      value: 4,
      itemStyle: {
        color: '#C04A30'
      },
      children:[
        {
          name :'点染',
          value:0.5,
          itemStyle: {
        color: '#C6A463'
      },
        },
        {
          name :'套色',
          value:0.5,
          itemStyle: {
        color: '#DBBD7C'
      },
        },
        {
          name :'分色',
          value:0.5,
          itemStyle: {
        color: '#B98662'
      },
        },
        {
          name :'填色',
          value:0.5,
          itemStyle: {
          color: '#A47B64'
        },
        },
        {
          name :'木印',
          value:0.5,
          itemStyle: {
        color: '#B5764B'
      },
        },
        {
          name :'喷绘',
          value:0.5,
          itemStyle: {
        color: '#AA4E58'
      },
        },
        {
          name :'勾绘',
          value:0.5,
          itemStyle: {
        color: '#754752'
      },
        },
        {
          name :'彩编',
          value:0.5,
          itemStyle: {
        color: '#C33F42'
      },
        },
      ]
    }
  
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


