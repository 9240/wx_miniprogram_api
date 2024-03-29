// pages/router/router.js
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
  switchTab(){
    //app.json需定义tabbar字段,url不能带参数
    wx.switchTab({
      url: '/pages/base/base',
      success(res){
        console.log(res)
      },
      fail(err){
        console.log(err)
      }
    })
  },
  reLaunch(){
    //可以带queryString,可以跳转到tabbar页面
    wx.reLaunch({
      url: '/pages/file/file',
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.log(err)
      }
    })
  },
  redirectTo(){
    //不能跳转到tabbar
    wx.redirectTo({
      url: '/pages/backgroundAudio/backgroundAudio',
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.log(err)
      }
    })
  },
  navigateTo(){
    wx.navigateTo({
      url: '/pages/camera/camera?sendData=1',
      events:{
        sendData(data){
          console.log(data)
        }
      },
      success(res){
        res.eventChannel.emit('sendData',{data:'somedata'})
      }
    })
  }
})