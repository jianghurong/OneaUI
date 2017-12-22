let util = require('../../utils/util.js')

Page({
  data: {
    delBtnWidth: 180//删除按钮宽度单位（rpx）
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.initEleWidth();
    this.tempData();
    console.log(this.data.list)
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  /**
   * touchS: 当触摸点只有一个，获取触摸起始点位置
   */
  touchS: function (e) {
    this.setData({
      startX: util.slip.touchS(e)
    });
  },
  /**
   *获取手指移动距离和手指触摸的项
   */
  touchM: function (e) {
    var txtStyle = util.slip.touchM(e, this.data.startX, this.data.delBtnWidth)
    var list = util.slip.touchUpdate(e, this.data.list, txtStyle)
    this.setData({
      list: list
    });
  },
  /**
   * 手指触摸结束后移动距离，大于删除按钮宽度一半显示删除按钮
   */
  touchE: function (e) {
    var txtStyle = util.slip.touchE(e, this.data.startX, this.data.delBtnWidth)
    var list = util.slip.touchUpdate(e, this.data.list, txtStyle)
    this.setData({
      list: list
    })
  },
  /**
   * 初始化删除按钮宽度（自适应）
   */
  initEleWidth: function () {
    var delBtnWidth = util.slip.getEleWidth(this.data.delBtnWidth);
    this.setData({
      delBtnWidth: delBtnWidth
    });
  },
  //点击删除按钮事件
  delItem: function (e) {
    let list = this.data.list;
    this.setData({
      list: util.slip.delItem(e, list)
    });
  },
  //测试临时数据
  tempData: function () {
    var list = [
      {
        txtStyle: "",
        icon: "/images/icon0.png",
        txt: "向左滑动可以删除"
      },
      {
        txtStyle: "",
        icon: "/images/icon6.png",
        txt: "微信小程序|联盟（wxapp-union.com）"
      },
      {
        txtStyle: "",
        icon: "/images/icon1.png",
        txt: "圣诞老人是爸爸，顺着烟囱往下爬，礼物塞满圣诞袜，平安糖果一大把"
      },
      {
        txtStyle: "",
        icon: "/images/icon2.png",
        txt: "圣诞到来，元旦还会远吗？在圣诞这个日子里"
      },
      {
        txtStyle: "",
        icon: "/images/icon3.png",
        txt: "圣诞节(Christmas或Cristo Messa ),译名为“基督弥撒”。"
      },
      {
        txtStyle: "",
        icon: "/images/icon4.png",
        txt: "一年一度的圣诞节即将到来,姑娘们也纷纷开始跑趴了吧!"
      },
      {
        txtStyle: "",
        icon: "/images/icon5.png",
        txt: "圣诞节(Christmas或Cristo Messa ),译名为“基督弥撒”。"
      },
      {
        txtStyle: "",
        icon: "/images/icon2.png",
        txt: "你的圣诞节礼物准备好了吗?"
      },
      {
        txtStyle: "",
        icon: "/images/icon3.png",
        txt: "一年一度的圣诞节即将到来,姑娘们也纷纷开始跑趴了吧!"
      },
      {
        txtStyle: "",
        icon: "/images/icon4.png",
        txt: "圣诞到来，元旦还会远吗？"
      },
      {
        txtStyle: "",
        icon: "/images/icon5.png",
        txt: "记下这一刻的心情"
      },

    ];

    this.setData({
      list: list
    });
  }

})