// pages/openApi/openApi.js
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
  login(){
    wx.login({
      success: function(res) {
        console.log(res)
        wx.showModal({
          title: '登录凭证',
          content: res.code,
          success: function(res) {
            wx.getWeRunData({
              success(res){
                console.log(res)
              }
            })
          },
          fail: function(res) {},
          complete: function(res) {},
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    // wx.checkSession({
    //   success: function(res) {
    //     console.log(res)
    //   },
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
  },
  chooseAddress(){
    wx.chooseAddress({
      success: function(res) {
        console.log(res)
        wx.showModal({
          title: '地址信息',
          content: `姓名：${res.userName}
                    电话：${res.telNumber}
                    地址：${res.provinceName} ${res.cityName} ${res.countyName} ${res.detailInfo}
                    `,
          showCancel: false,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})