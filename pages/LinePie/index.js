// pages/LinePie/index.js
import * as echarts from '../../ec-canvas/echarts';
let chart = null;
let chart2 = null;
//饼图的数据初始化
function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  chart.showLoading(); // 首次显示加载动画

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

  chart.setOption(option);
  chart.hideLoading(); // 隐藏加载动画
  return chart;
};
//折线图的数据初始化
function initChart2(canvas, width, height) {
  chart2 = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart2);

  chart2.showLoading(); // 首次显示加载动画

  var option = {
    title: {
      text: '各年级人数分布',
      left: 'center'
    },
    color: ['#DA8181'],
    grid: {
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      show: true
    },
    legend: {
      data: ['人数'],
      x: 'right'
    },
    xAxis: {
      type: 'category',
      axisTick: { show: false },
      data: ['1990之前', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
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
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    series: [{
      name: 'A',
      type: 'line',
      smooth: true,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    }]
  };

  chart2.setOption(option);
  chart2.hideLoading(); // 隐藏加载动画
  return chart2;
};
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  onLoad: function (options) {
    var that = this
    var all_p = options.all_p.split(",");
    for (var i = 0; i < all_p.length; i++) {
      if (all_p[i] == "不限") {
        all_p[i] = ''
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
        var a = new Array;
        for (var index in getJson.year) {
          for (var inx in getJson.year[index]) {
            a.push(getJson.year[index][inx])
          }
        }
        console.log(a);
        chart2.setOption({
          series: [{
            name: '人数',
            type: 'line',
            smooth: false,
            data: a,
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
    getReturn: {},
    search_p: '',
    ecPie: {
      onInit: initChart
    },

    ecLine: {
      onInit: initChart2
    }
  }
})