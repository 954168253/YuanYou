// pages/GradesNumber/index.js
import * as echarts from '../../ec-canvas/echarts';
let chart = null;
function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  chart.showLoading(); // 首次显示加载动画

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
      data: ['1990之前','1990','1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
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

  chart.setOption(option);
  chart.hideLoading(); // 隐藏加载动画
  return chart;
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getReturn: {},
    search_p: '',
    ecBar: {
      onInit: initChart
    },

    ecLine: {
      onInit: initChart
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    var that = this
    var all_p = options.all_p.split(",");
    for (var i = 0; i < all_p.length; i++) {
      if (all_p[i] == "不限") {
        all_p[i] = ''
      }
    }
    console.log(all_p)
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
        console.log(getJson.year)
        that.setData({
          getReturn: getJson
        })
        var a = new Array;
        for (var index in getJson.year)
        {
          for (var inx in getJson.year[index])
          {
            a.push(getJson.year[index][inx])
          }
        }
        console.log(a)
        chart.setOption({
          series: [{
            name: '人数',
            type: 'line',
            smooth: false,
            data:a,
          }]
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})