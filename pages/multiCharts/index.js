import * as echarts from '../../ec-canvas/echarts';
let chart = null;
let chart2 = null;
let pieChart = null;
let evaporation = [1, 2, 0, 0, 0, 0];           //第一个表的人数
let precipitation = [0, 0, 0, 0, 0, 0];         //降水量
function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  chart.showLoading(); // 首次显示加载动画

  var option = {
    title: {
      text: '专业分布',
      subtext: '',
      x: 'center'
    },
    color: ['#DA8181'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['人数'],
      x: 'right'
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      axisTick: { show: false },
      data: ['导弹系统专用计算机专业', '计算机工程', '计算机及其运用', '计算机及应用', '计算机及应用 3年', '计算机技术', '计算机科学', '计算机科学与技术', '计算机器件与设备', '计算机软件', '计算机软件与理论', '计算机系统结构', '计算机应用', '计算机应用 2年', '计算机应用 3年', '计算机应用技术', '计算机组织与系统结构', '教育技术学', '控制工程', '密码学', '软件工程', '网络工程', '无线电遥控遥测', '物联网工程', '遥控测控', '遥控遥测','应用电子技术'],
      axisLine: {
        lineStyle: {
          color: '#999'
        }
      },
      axisLabel: {
        color: '#666',
        formatter: function (value) {
          //x轴的文字改为竖版显示
          var str = value.split("");
          return str.join("\n");
        },
        fontSize: 9
      } //全局变量
    },
    yAxis: {
        
      type: 'value',
        axisLine: {
        lineStyle: {
          color: '#999'
        }
      },
      axisLabel: {
        color: '#666'
      }
  },
    series: [{
       
        name: '人数',
        type: 'bar',
        barWidth: 11,
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
      data: evaporation,
      
    }]
  };

  chart.setOption(option);
  chart.hideLoading(); // 隐藏加载动画
  return chart;
};
//饼图的数据初始化
function initChart2(canvas, width, height) {
  chart2 = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart2);

  chart2.showLoading(); // 首次显示加载动画

  var option = {
    title: {
      text: '学历分布',
      subtext: '',
      x: 'center'
    },
    backgroundColor: "#ffffff",
    tooltip: {
      trigger: 'item',
      formatter: " {b} : {c} ({d}%)"
    },
    color: ["#c6b38e", "#e64b76", "#b8d2c7", "#e5cf98", "#001852"],
    series: [{
      label: {
        normal: {
          fontSize: 14
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: [0, '60%'],
      data: [{
        value: 55,
        name: '本科'
      }, {
        value: 20,
        name: '硕士'
      }, {
        value: 10,
        name: '博士'
      }, {
        value: 20,
        name: '专科'
      },
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 2, 2, 0.3)'
        }
      }
    }]
  };

  chart2.setOption(option);
  chart2.hideLoading(); // 隐藏加载动画
  return chart2;
};
Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  onLoad:function(options){
    var that = this
    var all_p = options.all_p.split(",");
    for (var i = 0; i < all_p.length; i++)
    {
      if(all_p[i]=="不限")
      {
        all_p[i]=''
      }
    }
    that.setData({
      p_GZD: all_p[0],
      p_SYD: all_p[1],
      p_RXN: all_p[2],
      p_XL: all_p[3],
      p_ZY: all_p[4],
      p_HY: all_p[5],
    })
    //console.log()
    wx.request({
      url: 'http://59.110.136.63:8080/CFMS/api/getDataC',
      data: {
        xianjudi: all_p[0],
        shengyuandi: all_p[1],
        nianji: all_p[2],
        xueli: all_p[3],
        zhuanye: all_p[4],
        hangye: all_p[5]
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var getJson = JSON.parse(res.data.substring(9, res.data.length - 4))
        console.log(getJson)
        that.setData({
          getReturn: getJson
        })
        chart.setOption({
          series: [{
              name: '人数',
              type: 'bar',
              barWidth: 11,
              label: {
                normal: {
                  show: false,
                  position: 'inside'
                }
              },
            data: getJson.全国.专业
          }]
        });
        chart2.setOption({
          series: [{
            label: {
              normal: {
                fontSize: 14
              }
            },
            type: 'pie',
            center: ['50%', '50%'],
            radius: [0, '60%'],
            data: getJson.全国.学历,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 2, 2, 0.3)'
              }
            }
          }]
        });
      }
    })
  },
  data: {
    p_GZD: '不限',
    p_SYD: '不限',
    p_RXN: '不限',
    p_XL: '不限',
    p_ZY: '不限',
    p_HY: '不限',
    getReturn:{},
    search_p:'',
    ecBar: {
      onInit: initChart
    },

    ecPie: {
      onInit: initChart2
    }
  },

  onReady() {
  },
  search(){
    var all_p = [this.data.p_GZD, this.data.p_SYD, this.data.p_RXN, this.data.p_XL, this.data.p_ZY, this.data.p_HY]
    console.log(all_p)
    wx.navigateTo({
      url: '../GradesNumber/index?all_p=' + all_p,
    })
  }
});
