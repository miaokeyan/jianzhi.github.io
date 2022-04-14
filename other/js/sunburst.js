//图表模块
(function(){
    //1. 实例化对象
    var myChart = echarts.init(document.querySelector('.sunburst'));
    //2.指定图表的配置项和数据
    var data = [
{
  name: '单色剪纸',
  itemStyle: {
        color: '#CF2225'
      },
  children: [
    {
      name: '颜色',
      itemStyle: {
        color: '#E5B400'
      },
      value: 2.5,
      children: [
        {
          name: '红',
          value: 0.5,
          itemStyle: {
        color: '#CF2225'
      },
        },
        {
          name: '绿',
          value: 0.5,
          itemStyle: {
        color: '#537851'
      },
        },
        {
          name: '褐',
          value: 0.5,
          itemStyle: {
        color: '#937851'
      },
        },
        {
          name: '黑',
          value: 0.5,
          itemStyle: {
        color: '#474747'
      },
        },
        {
          name: '金',
          value: 0.5,
          itemStyle: {
        color: '#EFA121'
      },
        }
      ]
    },
    {
      name: '表现形式',
      value:3,
     
      itemStyle: {
        color: '#CF2225'
      },
      children: [
        {
          name: '折叠剪纸',
          value: 1,
          itemStyle: {
        color: '#D34E52'
      },
        },
        {
          name: '剪影',
          value: 1,
          itemStyle: {
        color: '#C04B44'
      },
        },
        {
          name: '撕纸',
          value: 1,
          itemStyle: {
        color: '#D34E52'
      },
        }

      ]
    },
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
    {
      name: '表现手法',
      value: 1.5,
      itemStyle: {
            color: '#3BA3B5'
          },
      children: [
        {
          name: '阳刻',
          value: 0.5,
          itemStyle: {
            color: '#669A7F'
          }
        },
        {
          name: '阴刻',
          value: 0.5,
          itemStyle: {
            color: '#A0B2B7'
          }
        },
        {
          name: '阴阳结合',
          value: 0.5,
          itemStyle: {
            color: '#81C0CB'
          },
        }
      ]
    }
  ]
},
{
  name:'彩色剪纸',
  itemStyle: {
        color: '#DC3A09'
      },
  children:[
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
  ]
},
{
 name :'立体剪纸',
 itemStyle: {
        color: '#EC5022'
      },
 children:[
   {
    name:'综合手法',
    value:2,
    itemStyle: {
        color: '#DC5932'
      },
      children:[
        {
          name:'绘画',
          value:0.5,
          itemStyle: {
        color: '#F09B80'
      },
        },
        {
          name:'剪刻',
          value:0.5,
          itemStyle: {
        color: '#EA7774'
      },
        },
        {
          name:'折叠',
          value:0.5,
          itemStyle: {
        color: '#DD5D69'
      },
        },
        {
          name:'黏合',
          value:0.5,          
          itemStyle: {
        color: '#9B86A9',
      },
        }
      ]
   }
 ]

}
];
 var option = {
series: {
  type: 'sunburst', 
  sunburst:{center:[400, 30]},
  data: data,
  radius: [0, '30%'],
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
      r: '65%',
      label: {
        align: 'right'
      }
    },
    {
      r0: '66%',
      r: '72%',
      label: {
        position: 'outside',
        padding: 5,
        silent: false
      },
      itemStyle: {
        borderWidth: 1
      }
    }
  ]
}
};
    // 3.使用刚指定的配置项和数据显示图表。
    // 旭日图
    myChart.setOption(option);
})();


