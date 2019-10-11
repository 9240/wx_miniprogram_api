// pages/base/base.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    setInterval:0,
    isDisable:false,
    intervalId:'timer'
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
    // const base64 = 'chyn'
    // const arrayBuffer = wx.base64ToArrayBuffer(base64)
    // const bufferArray = wx.arrayBufferToBase64(arrayBuffer)
    // console.log(arrayBuffer)
    // console.log(bufferArray)
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
  getSystemInfo(){
    wx.getSystemInfo({
      success: function(res) {
        wx.showModal({
          title: '系统信息',
          content: JSON.stringify(res),
        })
      },
    })
  },
  openDebug(){
    wx.setEnableDebug({
      enableDebug: true,
    })
  },
  setInterval(){
    this.setData({
      isDisable:true,
      timer : setInterval(() => {
        this.setData({
          setInterval: this.data.setInterval += 1
        })
      }, 1000)
    })
  },
  clsInterval(){
    this.setData({
      isDisable: false
    }),
    clearInterval(this.data.timer)
  }
})