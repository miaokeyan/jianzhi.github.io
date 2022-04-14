(function(){
    var myChart = echarts.init(document.querySelector(".tree"));
    myChart.showLoading();
    const data = {
      name: '特殊用纸',
      children: [
        {
          name: '宣纸',
          children: [
            {
              name: '普通宣纸',
              children: [
                { name: '江苏常州金坛刻纸'},
                { name: '天津大郑剪纸' }
              ]
            },
            {
              name: '安徽手工宣纸',
              children: [
                { name: '江苏扬州剪纸'},
              ]
            },
            {
              name: '泥金、泥银宣',
              children: [
                { name: '安徽徽州剪纸'},
              ]
            },
    
          ]
        },
        {
          name: '进口珠光艺术纸',
          children: [
            { name: '天津大郑剪纸'},
          ]
        },
        {
          name: '金箔、银箔',
          children: [{ name: '湖北孝感雕花剪纸'},
                     { name: '黑龙江海伦剪纸'},
                     { name: '辽宁建平剪纸'},
                     { name: '云南傣族剪纸'},
                     
        ]
        },
        {
          name: '金属片',
          children: [
            { name: '云南傣族剪纸'},
          ]
        },
        {
          name: '布',
          children: [
            { name: '湖北孝感雕花剪纸'},
            { name: '江苏徐州剪纸'},
            { name: '上海海派剪纸'},
            { name: '辽宁建平剪纸' },
            { name: '云南傣族剪纸'},
            { name: '贵州侗族剪纸'},
            { name: '贵州苗族剪纸'}
          ]
        },
        {
          name: '构皮纸',
          children: [
            { name: '云南傣族剪纸'},
          ]
        },
        {
          name: '竹绵纸',
          children: [
            { name: '云南傣族剪纸'},
          ]
        },
        {
          name: '吹塑纸',
          children: [
            { name: '湖北孝感雕花剪纸'},
          ]
        },
        {
          name: '墙壁纸',
          children: [
            { name: '湖北孝感雕花剪纸'},
          ]
        },
        {
          name: '不干胶',
          children: [
            { name: '湖北孝感雕花剪纸'},
          ]
        },
        {
          name: '蜡光纸',
          children: [
            { name: '黑龙江海伦剪纸'},
          ]
        },
        {
          name: '树皮 树叶',
          children: [
            { name: '吉林长白山满族剪纸'},
            { name: '海南黎族剪纸'},
            { name: '辽宁建平剪纸'},
            { name: '云南傣族剪纸'},
          ]
        },
        {
          name: '苞米皮',
          children: [
            { name: '云南傣族剪纸'},
          ]
        },
        {
          name: '红辣椒皮',
          children: [
            { name: '云南傣族剪纸'},
          ]
        },
        {
          name: '皮革',
          children: [
            { name: '辽宁建平剪纸'},
            { name: '贵州侗族剪纸'},
            { name: '贵州苗族剪纸'},
          ]
        },
        {
          name: '表面铺有蚕丝的绫纸',
          children: [
            { name: '台湾剪纸'},
          ]
        },
    
    
      ]
    };
    var data2 = {
      name: '特殊用具',
      children: [
        {
          name: '灯烟熏样',
          children: [{ name: '黑龙江海伦剪纸'},{ name: '吉林长白山满族剪纸'},{ name: '山西中阳剪纸'},{ name: '山东烟台剪纸'},{ name: '湖北鄂州雕花剪纸'},]
        },
        {
          name: '炭黑画',
          children: [{ name: '吉林长白山满族剪纸'}]
        },
        {
          name: '香火烧',
          children: [{ name: '吉林长白山满族剪纸' },{ name: '辽宁建平剪纸' }]
        },
        {
          name: '刻刀雕刻',
          children: [
            { name: '吉林长白山满族剪纸'},
            { name: '河北蔚县剪纸'},
            { name: '北京京派剪纸'},
            { name: '天津大郑剪纸'},
            { name: '河南灵宝剪纸'},
            { name: '湖北孝感雕花剪纸'},
            { name: '湖北武汉剪纸'},
            { name: '湖北鄂州雕花剪纸'},
            { name: '湖北沔阳雕花剪纸'},
            { name: '江苏南京剪纸'},
            { name: '江苏金坛剪纸'},
            { name: '四川自贡剪纸'},
            { name: '四川西充剪纸'},
            { name: '浙江温州剪纸'},
            { name: '重庆北碚剪纸'},
            { name: '重庆堰兴剪纸'},
            { name: '海南黎族剪纸'},
            { name: '广东潮州剪纸'},
            { name: '江西瑞昌剪纸'},
            { name: '福建浦城剪纸'},

          ]
        },
        {
          name: '铲、刺',
          children: [{ name: '安徽徽州剪纸', }]
        },
        {
          name: '蜡盘（雕板，圆盘）',
          children: [{ name: '湖北沔阳雕花剪纸' },{ name: '四川自贡剪纸', },{ name: '四川西充剪纸' },{ name: '江西瑞昌剪纸' },]
        },
        {
          name: '锥子',
          children: [{ name: '江苏扬州剪纸', }]
        },
        {
          name: '骨笔',
          children: [{ name: '江苏扬州剪纸', }]
        },
        {
          name: '凿刀',
          children: [{ name: '云南傣族剪纸', },{ name: '湖南苗族剪纸', }]
        },
        {
          name: '锤子',
          children: [{ name: '云南傣族剪纸', }]
        }

      ]
    };
    myChart.hideLoading();
    myChart.setOption(
      (option = {
        // tooltip: {
        //   trigger: 'item',
        //   triggerOn: 'mousemove'
        // },
        legend: {
          top: '5%',
          left: '1%',
          orient: 'vertical',
          data: [
            {
              name: '特殊用纸',
              icon: 'rectangle',
              
              
            },
            {
              name: '特殊用具',
              icon: 'rectangle'
            }
          ],
          // borderColor: '#c23531'
          // borderColor: '#8B8F79'
        },
        series: [
          {
            type: 'tree',
            name: '特殊用纸',
            data: [data],
            top: '5%',
            left: '7%',
            bottom: '1%',
            right: '65%',
            symbolSize: 9,
            label: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right',
              fontSize:'17',
              color:'#000',
              // 文字加粗
              fontWeight:'550',
              // 文字字体
              fontFamily:'宋体',
              backgroundColor:'transparent',

            },
            // 初始展开的层级
            initialTreeDepth:1,
            // 图形
            itemStyle:{
                  color:'#888A93',
                  // borderCap:'square'
            },
            leaves: {
              label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left',
                
              }
            },

            emphasis: {
              focus: 'descendant'
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          },
          {
            type: 'tree',
            name: '特殊用具',
            data: [data2],
            top: '5%',
            left: '60%',
            bottom: '0%',
            right: '18%',
            symbolSize: 9,
            initialTreeDepth:1,
            label: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right',
              color:'#000',
              fontSize:'17',
              // 文字字体
              fontFamily:'宋体',
              fontWeight:'550',
              backgroundColor:'transparent'
            },
            itemStyle:{
              color:'#888A93',
             
            },
            leaves: {
              label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
              }
            },
            expandAndCollapse: true,
            emphasis: {
              focus: 'descendant'
            },
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      })
    );
    myChart.setOption(option);

})();

(function(){


})();