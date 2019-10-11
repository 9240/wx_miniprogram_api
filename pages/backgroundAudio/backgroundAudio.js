// pages/backgroundAudio/backgroundAudio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backgroundAudioManager:null
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
    this.setData({
      backgroundAudioManager:wx.getBackgroundAudioManager({
        src:'http://113.96.101.14/amobile.music.tc.qq.com/C400003O1yMi1jZaol.m4a?guid=9901088120&vkey=6A9B8C0D5A41C6A6E32C3F235DFA82CBF59AC8A09EE14D878915EC13F5F9AD7E61F0FC1BDD51A9EFEF8DCDAC1427E159427636B74E980006&uin=0&fromtag=66',
        startTime:0,
        title:'盗将行',
        epname:'专辑名',
        singer:'馅儿',
        coverImgUrl:'https://y.gtimg.cn/music/photo_new/T002R300x300M000000MzYm21RBpgw.jpg?max_age=2592000',
        webUrl:'https://y.qq.com/portal/player.html',
        protocol:'http',
      })
    })
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
  play(){
    this.data.backgroundAudioManager.play()
  }
})