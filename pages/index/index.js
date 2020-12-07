//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    hiddenName:false,
    // 获取设备高度
    appHeight: '',
    p_GZD: '不限',
    p_SYD: '不限',
    p_RXN: '不限',
    p_XL: '不限',
    p_ZY: '不限',
    p_HY: '不限',
    // 筛选导航栏数据
    msgList: [
      { key: 1, name: '工作地' },
      { key: 2, name: '生源地' },
      { key: 3, name: '入学年' },
      { key: 4, name: '学历' },
      { key: 5, name: '专业' },
      { key: 6, name: '行业' }
    ],
    // 判断导航栏列表是否显示
    meunShow: [
      { isShows: true },
      { isShows: true },
      { isShows: true },
      { isShows: true },
      { isShows: true },
      { isShows: true }
    ],
    //工作地
    gongzuodi:[
      { id: 0, name: '不限' },
      { id: 1, name: '北京市' },
      { id: 2, name: '上海市' },
      { id: 3, name: '重庆市' },
      { id: 4, name: '河北省' },
      { id: 5, name: '山西省' },
      { id: 6, name: '辽宁省' },
      { id: 7, name: '吉林省' },
      { id: 8, name: '黑龙江省' },
      { id: 9, name: '江苏省' },
      { id: 10, name: '浙江省' },
      { id: 11, name: '安徽省' },
      { id: 12, name: '福建省' },
      { id: 13, name: '江西省' },
      { id: 14, name: '山东省' },
      { id: 15, name: '河南省' },
      { id: 16, name: '湖北省' },
      { id: 17, name: '湖南省' },
      { id: 18, name: '广东省' },
      { id: 19, name: '海南省' },
      { id: 20, name: '四川省' },
      { id: 21, name: '贵州省' },
      { id: 22, name: '云南省' },
      { id: 23, name: '陕西省' },
      { id: 24, name: '甘肃省' },
      { id: 25, name: '青海省' },
      { id: 26, name: '台湾省' },
      { id: 27, name: '内蒙古自治区' },
      { id: 28, name: '广西壮族自治区' },
      { id: 29, name: '西藏自治区' },
      { id: 31, name: '宁夏回族自治区' },
      { id: 32, name: '新疆维吾尔自治区' },
      { id: 33, name: '香港特别行政区' },
      { id: 34, name: '澳门特别行政区' },
    ],
    // 生源地
    shengyuandi: [
      { id: 0, name: '不限' },
      { id: 1, name: '北京市' },
      { id: 2, name: '上海市' },
      { id: 3, name: '重庆市' },
      { id: 4, name: '河北省' },
      { id: 5, name: '山西省' },
      { id: 6, name: '辽宁省' },
      { id: 7, name: '吉林省' },
      { id: 8, name: '黑龙江省' },
      { id: 9, name: '江苏省' },
      { id: 10, name: '浙江省' },
      { id: 11, name: '安徽省' },
      { id: 12, name: '福建省' },
      { id: 13, name: '江西省' },
      { id: 14, name: '山东省' },
      { id: 15, name: '河南省' },
      { id: 16, name: '湖北省' },
      { id: 17, name: '湖南省' },
      { id: 18, name: '广东省' },
      { id: 19, name: '海南省' },
      { id: 20, name: '四川省' },
      { id: 21, name: '贵州省' },
      { id: 22, name: '云南省' },
      { id: 23, name: '陕西省' },
      { id: 24, name: '甘肃省' },
      { id: 25, name: '青海省' },
      { id: 26, name: '台湾省' },
      { id: 27, name: '内蒙古自治区' },
      { id: 28, name: '广西壮族自治区' },
      { id: 29, name: '西藏自治区' },
      { id: 31, name: '宁夏回族自治区' },
      { id: 32, name: '新疆维吾尔自治区' },
      { id: 33, name: '香港特别行政区' },
      { id: 34, name: '澳门特别行政区' },
    ],

    // 入学年
    ruxuenian: [
      { id: -1, name: '不限' },
      { id: 0, name: '2018' },
      { id: 1, name: '2017' },
      { id: 2, name: '2016' },
      { id: 3, name: '2015' },
      { id: 4, name: '2014' },
      { id: 5, name: '2013' },
      { id: 6, name: '2012' },
      { id: 7, name: '2011' },
      { id: 8, name: '2010' },
      { id: 9, name: '2009' },
      { id: 10, name: '2008' },
      { id: 11, name: '2007' },
      { id: 12, name: '2006' },
      { id: 13, name: '2005' },
      { id: 14, name: '2004' },
      { id: 15, name: '2003' },
      { id: 16, name: '2002' },
      { id: 17, name: '2001' },
      { id: 18, name: '2000' },
      { id: 19, name: '1999' },
      { id: 20, name: '1998' },
      { id: 21, name: '1997' },
      { id: 22, name: '1996' },
      { id: 23, name: '1995' },
      { id: 24, name: '1994' },
      { id: 25, name: '1993' },
      { id: 26, name: '1992' },
      { id: 27, name: '1991' },
      { id: 28, name: '1990' },
    ],
    //学历
    xueli:[
      { id: 0, name: '不限' },
      { id: 1, name: '本科' },
      { id: 2, name: '硕士' },
      { id: 3, name: '博士' },
    ],
    //专业
    zhuanye:[
      { id: 0, name: '不限' },
      { id: 1, name: '导弹系统专用计算机专业' },
      { id: 2, name: '计算机工程' },
      { id: 3, name: '计算机及其运用' },
      { id: 4, name: '计算机及应用' },
      { id: 5, name: '计算机及应用(3年)' },
      { id: 6, name: '计算机技术' },
      { id: 7, name: '计算机科学' },
      { id: 8, name: '计算机科学与技术' },
      { id: 9, name: '计算机器件与设备' },
      { id: 10, name: '计算机软件' },
      { id: 11, name: '计算机软件与理论' },
      { id: 12, name: '计算机系统结构' },
      { id: 13, name: '计算机应用' },
      { id: 14, name: '计算机应用(2年)' },
      { id: 15, name: '计算机应用（3年）' },
      { id: 16, name: '计算机应用技术' },
      { id: 17, name: '计算机组织与系统结构' },
      { id: 18, name: '教育技术学' },
      { id: 19, name: '控制工程' },
      { id: 20, name: '密码学' },
      { id: 21, name: '软件工程' },
      { id: 22, name: '网络工程' },
      { id: 23, name: '无线电遥控遥测' },
      { id: 24, name: '物联网工程' },
      { id: 25, name: '遥控测控' },
      { id: 26, name: '遥控遥测' },
      { id: 27, name: '应用电子技术' },
    ],
    //行业
    hangye:[
      { id: 0, name: '不限' },
      { id: 1, name: 'IT/互联网' },
      { id: 2, name: '教育/培训' },
      { id: 3, name: '金融' },
      { id: 4, name: '机械/制造' },
      { id: 5, name: '电子/通信/硬件' },
      { id: 6, name: '能源/矿产环保' },
      { id: 7, name: '广告/媒体/娱乐/出版' },
      { id: 8, name: '房地产/建筑' },
      { id: 9, name: '交通/物流' },
      { id: 10, name: '医疗/制药' },
      { id: 11, name: '服务业' },
      { id: 12, name: '其他' }
    ]
  },
  ToTest(){
    wx.request({
      url: 'http://59.110.136.63:8080/CFMS/api/getDataC', //仅为示例，并非真实的接口地址
      data: {
        xianjudi: '陕西',
        nianji: '',
        zhuanye: '',
        hangye: 'IT/互联网',
        xueli: '本科',
        shengyuandi:'陕西'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(JSON.parse(res.data.substring(9,res.data.length-4)))
      }
    })
  },
  ToZhuye() {
    wx.navigateTo({
      url: '../zhuye/index'
    })
  },
  onLoad: function () {
    var res = wx.getSystemInfoSync();
    this.setData({
      appHeight: res.windowHeight
    });

    console.log(this.data.appHeight)
  },
  //选择工作地触发事件
  choseGZD:function(event){
    //console.log(event.target.dataset.price)
    var that = this
    that.setData({
      p_GZD: event.target.dataset.price
    })
    var menuNum = event.currentTarget.dataset.hi;

    // 拼接 ，使我们可以获取到menuShow里面每一个isSHows
    var menuSrc = "meunShow[" + menuNum + "].isShows";

    // 循环data中设置的meunShow
    for (var n = 0; n < this.data.meunShow.length; n++) {
      // 拼接 ，使我们可以获取到menuShow里面每一个isSHows
      var menuSrcs = "meunShow[" + n + "].isShows";
      // 解决重复点击不能隐藏的问题
      if (n != menuNum) {
        // 初始化，每次点击时先全部隐藏，但是重复点击不会隐藏
        this.setData({
          [menuSrcs]: true
        })
      }}
  },
  //选择生源地触发事件
  choseSYD: function (event) {
    //console.log(event.target.dataset.price)
    var that = this
    that.setData({
      p_SYD: event.target.dataset.price
    })
    var menuNum = event.currentTarget.dataset.hi;

    // 拼接 ，使我们可以获取到menuShow里面每一个isSHows
    var menuSrc = "meunShow[" + menuNum + "].isShows";

    // 循环data中设置的meunShow
    for (var n = 0; n < this.data.meunShow.length; n++) {
      // 拼接 ，使我们可以获取到menuShow里面每一个isSHows
      var menuSrcs = "meunShow[" + n + "].isShows";
      // 解决重复点击不能隐藏的问题
      if (n != menuNum) {
        // 初始化，每次点击时先全部隐藏，但是重复点击不会隐藏
        this.setData({
          [menuSrcs]: true
        })
      }
    }
  },
  //选择入学年触发事件
  choseRXN: function (event) {
    //console.log(event.target.dataset.price)
    var that = this
    that.setData({
      p_RXN: event.target.dataset.price
    })
    var menuNum = event.currentTarget.dataset.hi;

    // 拼接 ，使我们可以获取到menuShow里面每一个isSHows
    var menuSrc = "meunShow[" + menuNum + "].isShows";

    // 循环data中设置的meunShow
    for (var n = 0; n < this.data.meunShow.length; n++) {
      // 拼接 ，使我们可以获取到menuShow里面每一个isSHows
      var menuSrcs = "meunShow[" + n + "].isShows";
      // 解决重复点击不能隐藏的问题
      if (n != menuNum) {
        // 初始化，每次点击时先全部隐藏，但是重复点击不会隐藏
        this.setData({
          [menuSrcs]: true
        })
      }
    }
  },
  //选择学历触发事件
  choseXL: function (event) {
    //console.log(event.target.dataset.price)
    var that = this
    that.setData({
      p_XL : event.target.dataset.price
    })
    console.log(this.P_XL)
    var menuNum = event.currentTarget.dataset.hi;

    // 拼接 ，使我们可以获取到menuShow里面每一个isSHows
    var menuSrc = "meunShow[" + menuNum + "].isShows";

    // 循环data中设置的meunShow
    for (var n = 0; n < this.data.meunShow.length; n++) {
      // 拼接 ，使我们可以获取到menuShow里面每一个isSHows
      var menuSrcs = "meunShow[" + n + "].isShows";
      // 解决重复点击不能隐藏的问题
      if (n != menuNum) {
        // 初始化，每次点击时先全部隐藏，但是重复点击不会隐藏
        this.setData({
          [menuSrcs]: true
        })
      }
    }
  },
  //选择行业触发事件
  choseHY: function (event) {
    //console.log(event.target.dataset.price)
    var that = this
    that.setData({
      p_HY: event.target.dataset.price
    })
    var menuNum = event.currentTarget.dataset.hi;

    // 拼接 ，使我们可以获取到menuShow里面每一个isSHows
    var menuSrc = "meunShow[" + menuNum + "].isShows";

    // 循环data中设置的meunShow
    for (var n = 0; n < this.data.meunShow.length; n++) {
      // 拼接 ，使我们可以获取到menuShow里面每一个isSHows
      var menuSrcs = "meunShow[" + n + "].isShows";
      // 解决重复点击不能隐藏的问题
      if (n != menuNum) {
        // 初始化，每次点击时先全部隐藏，但是重复点击不会隐藏
        this.setData({
          [menuSrcs]: true
        })
      }
    }
  },
  //选择专业触发事件
  choseZY: function (event) {
   // console.log(event.target.dataset.price)
    var that = this
    that.setData({
      p_ZY: event.target.dataset.price
    })
    var menuNum = event.currentTarget.dataset.hi;

    // 拼接 ，使我们可以获取到menuShow里面每一个isSHows
    var menuSrc = "meunShow[" + menuNum + "].isShows";

    // 循环data中设置的meunShow
    for (var n = 0; n < this.data.meunShow.length; n++) {
      // 拼接 ，使我们可以获取到menuShow里面每一个isSHows
      var menuSrcs = "meunShow[" + n + "].isShows";
      // 解决重复点击不能隐藏的问题
      if (n != menuNum) {
        // 初始化，每次点击时先全部隐藏，但是重复点击不会隐藏
        this.setData({
          [menuSrcs]: true
        })
      }
    }
  },
  search(){
    var all_p = [this.data.p_GZD, this.data.p_SYD, this.data.p_RXN, this.data.p_XL, this.data.p_ZY, this.data.p_HY]
    console.log(all_p)
    if (all_p[2] == '不限' && all_p[3] == '不限' && all_p[4] == '不限')
    {
      wx.navigateTo({
        url: '../multiCharts/index?all_p=' + all_p,
      })
    }
    else if (all_p[2] != '不限' && all_p[3] == '不限' && all_p[4] == '不限') {
      wx.navigateTo({
        url: '../BarPie/index?all_p=' + all_p,
      })
    }
    else if (all_p[2] == '不限' && all_p[3] != '不限' && all_p[4] == '不限') {
      wx.navigateTo({
        url: '../BarLine/index?all_p=' + all_p,
      })
    }
    else if (all_p[2] == '不限' && all_p[3] == '不限' && all_p[4] != '不限') {
      wx.navigateTo({
        url: '../LinePie/index?all_p=' + all_p,
      })
    }
    else if (all_p[2] != '不限' && all_p[3] != '不限' && all_p[4] == '不限') {
      wx.navigateTo({
        url: '../BarLine/index?all_p=' + all_p,
      })
    }
    else if (all_p[2] != '不限' && all_p[3] == '不限' && all_p[4] != '不限') {
      wx.navigateTo({
        url: '../BarPie/index?all_p=' + all_p,
      })
    }
    else if (all_p[2] == '不限' && all_p[3] != '不限' && all_p[4] != '不限') {
      wx.navigateTo({
        url: '../BarLine/index?all_p=' + all_p,
      })
    }
  },
  // 筛选导航栏事件
  menuClick: function (e) {
    // 获取通过wxml  data-hi="{{ idx }}" 传过来的索引
    var menuNum = e.currentTarget.dataset.hi;

    // 拼接 ，使我们可以获取到menuShow里面每一个isSHows
    var menuSrc = "meunShow[" + menuNum + "].isShows";

    // 循环data中设置的meunShow
    for (var n = 0; n < this.data.meunShow.length; n++) {
      // 拼接 ，使我们可以获取到menuShow里面每一个isSHows
      var menuSrcs = "meunShow[" + n + "].isShows";
      // 解决重复点击不能隐藏的问题
      if (n != menuNum) {
        // 初始化，每次点击时先全部隐藏，但是重复点击不会隐藏
        this.setData({
          [menuSrcs]: true
        });
      };
    };

    // 给当前点击的去反data中设置的meunShow，使之显示， 只写此处只会显示不能隐藏
    this.setData({
      [menuSrc]: !this.data.meunShow[e.currentTarget.dataset.hi].isShows
    });
  },

  // 区域列表事件
  rowClick: function (e) {
    // 限制第一个 '不限' 不能点击
    if (e.currentTarget.dataset.hi != 0) {
      // 获取wxml  data-hi="{{ index }}" 传过来的索引
      var rowNum = e.currentTarget.dataset.hi;
      // 同筛选导航栏事件，因第一个为不限不可点击， 所以减一
      var rowSrc = "rowShow[" + (rowNum - 1) + "].isShows";
      // 隐藏所有的三级菜单
      for (var m = 0; m < this.data.rowShow.length; m++) {
        var rowSrcs = "rowShow[" + m + "].isShows";
        this.setData({
          [rowSrcs]: true
        });
      };
      // 同上
      this.setData({
        rigShow: false,
        [rowSrc]: !this.data.rowShow[e.currentTarget.dataset.hi].isShows
      });
    };
  },
 
})