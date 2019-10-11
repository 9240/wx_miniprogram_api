// pages/storage/storage.js
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
  setStorageSync(){
    wx.setStorageSync('Sync', '同步设置storage')
  },
  setStorage(){
    wx.setStorage({
      key: 'async',
      data: '异步设置storage'
    })
  },
  rmStorageSync(){
    wx.removeStorageSync('Sync')
  },
  rmStorage(){
    wx.removeStorage({
      key: 'async',
      success: function(res) {
        console.log(res)
      },
    })
  },
  getStorageSync(){
    const res = wx.getStorageSync('async')
    wx.showModal({
      title: 'getStorageSync',
      content: JSON.stringify(res),
    })
  },
  getStorage(){
    wx.getStorage({
      key: 'async',
      success: function(res) {
        wx.showModal({
          title: 'getStorage',
          content: JSON.stringify(res),
        })
      },
    })
  },
  clsStorageSync(){
    wx.clearStorageSync()
  },
  clsStorage(){
    wx.clearStorage()
  },
  getStorageInfoSync(){
    const res = wx.getStorageInfoSync()
    wx.showModal({
      title: 'getStorageInfoSync',
      content: JSON.stringify(res),
    })
  },
  getStorageInfo(){
    wx.getStorageInfo({
      success: function(res) {
        wx.showModal({
          title: 'getStorageInfo',
          content: JSON.stringify(res),
        })
      },
    })
  }
})