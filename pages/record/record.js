// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getRecorderManager:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  getRecManager(){
    this.setData({
      getRecorderManager: wx.getRecorderManager()
    })
  },
  play(){
    this.data.getRecorderManager.start({
      duration: 60000,
      sampleRate:8000,
      numberOfChannels:2,
      encodeBitRate:48000,
      format:'aac'
    })
  },
  stop(){
    this.data.getRecorderManager.stop()
  }
})