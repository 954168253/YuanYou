// pages/manCard/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  benkeJson:{
  },//本科生数据
  getBenkesheng(){
    var that = this
    wx.request({
      url: 'http://59.110.136.63:8080/CFMS/api/getDataD',
      data: {
        xueli: '本科'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var manJson = JSON.parse(res.data.substring(9, res.data.length - 4))
        //console.log(manJson)
        that.setData({
          data: manJson.peoplemsg
        })

      }
    })

  },
  shuoshiJson: {},//研究生数据
  getYanjiusheng() {
    var that = this
    wx.request({
      url: 'http://59.110.136.63:8080/CFMS/api/getDataD',
      data: {
        xueli: '硕士'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var manJson = JSON.parse(res.data.substring(9, res.data.length - 4))
        //console.log(manJson)
        that.setData({
          data: manJson.peoplemsg
        })
      }
    })
  },
  boshiJson: {},//博士生数据
  getBoshisheng() {
    var that = this
    wx.request({
      url: 'http://59.110.136.63:8080/CFMS/api/getDataD',
      data: {
        xueli: '博士'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var manJson = JSON.parse(res.data.substring(9, res.data.length - 4))
       // console.log(manJson)
        that.setData({
          data: manJson.peoplemsg
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //在最开始页面加载时加载本科生数据
    var that = this
    wx.request({
      url: 'http://59.110.136.63:8080/CFMS/api/getDataD', 
      data: {
        xueli: '本科'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var manJson = JSON.parse(res.data.substring(9, res.data.length - 4))
        //console.log(manJson)
        that.setData({
          data :manJson.peoplemsg
        })
 
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