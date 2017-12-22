// pages/package/package.js
let util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  /**
   * 获取时间
   */
  // getTime: function () {
  //   wx.showModal({
  //     content: util.formatTime(new Date()),
  //     showCancel: false
  //   })
  // },
  // downloadMusic: function () {
  //   const downloadTask = wx.downloadFile({
  //     url: 'https://bwgxcxapi.anasit.com/images/music/raw.mp3', //仅为示例，并非真实的资源
  //     success: function (res) {
  //       wx.saveFile({
  //         tempFilePath: res.tempFilepath,
  //         success: function (res) {
  //         }
  //       })
  //     }
  //   })
  //   downloadTask.onProgressUpdate((res) => {
  //     console.log('下载进度', res.progress)
  //     console.log('已经下载的数据长度', res.totalBytesWritten)
  //     console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
  //   })
  // },
  // startMusic: function() {
  //   const innerAudioContext = wx.createInnerAudioContext()
  //   innerAudioContext.autoplay = true
  //   innerAudioContext.src = 'https://bwgxcxapi.anasit.com/images/music/raw.mp3'
  //   innerAudioContext.onPlay(() => {
  //     console.log('开始播放')
  //   })
  //   innerAudioContext.onTimeUpdate(() => {
  //     console.log('当前音频长度' + innerAudioContext.duration)
  //     console.log('当前播放进度' + innerAudioContext.currentTime)
  //   })
  //   innerAudioContext.onError((res) => {
  //     console.log(res.errMsg)
  //     console.log(res.errCode)
  //   })
  // },
  // startDraw: function () {
  //   wx.navigateTo({
  //     url: '/pages/musicSchedule/musicSchedule',
  //   })
  // },
  leftSlip: function () {
    wx.navigateTo({
      url: '/pages/leftSlip/leftSlip',
    })
  },
  loadImage: function () {
    wx.navigateTo({
      url: '/pages/loadImage/loadImage',
    })
  },
  loading: function () {
    wx.navigateTo({
      url: '/pages/loading/loading',
    })
  }
})