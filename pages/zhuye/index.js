Page({
  data: {
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    imgUrls: [
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg'
    ],
    links: [
      '../manCard/index',
      '../manCard/index',
      '../manCard/index'
    ]

  },
  //轮播图的切换事件
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //点击指示点切换
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  //点击图片触发事件
  swipclick: function (e) {
    console.log(this.data.swiperCurrent);
    if (this.data.swiperCurrent==0)
    {
      wx.navigateTo({
        url: '../test/index'
      })
    }
    else if (this.data.swiperCurrent == 1) {
      wx.navigateTo({
        url: '../test2/index'
      })
    }
    else if (this.data.swiperCurrent == 2) {
      wx.navigateTo({
        url: '../test3/index'
      })
    }
  },
    ToZhuye() {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  ToRenyuan() {
    console.log(1);
    wx.navigateTo({
      url: '../manCard/index'
    })
  },
  ToUserManage() {
    console.log(1);
    wx.navigateTo({
      url: '../UserManage/index'
    })
  }
})