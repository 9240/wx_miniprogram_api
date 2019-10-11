// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseVideoUrl:null,
    videoContext:null,
    itemList: ['0.5' , '0.8' , '1.0' , '1.25' , '1.5'],
    max:null
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
  chooseVideo(){
    var _this = this;
    wx.chooseVideo({
      compressed:false,
      success: function(res) {
        console.log(res)
        showModal('视频信息',JSON.stringify(res))
        _this.setData({
          chooseVideoUrl: res.tempFilePath,
          videoContext:wx.createVideoContext('video', this),
          max:res.duration
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  saveVideoToPhotosAlbum(){
    var _this = this
    wx.saveVideoToPhotosAlbum({
      filePath: _this.data.chooseVideoUrl,
      success(res){
        wx.showToast({
          title: '保存成功',
          icon:'success'
        })
      },
      fail(err){
        wx.showToast({
          title: '保存失败',
          icon:'none'
        })
      }
    })
  },
  play(){
    this.data.videoContext.play()
  },
  pause(){
    this.data.videoContext.pause()
  },
  stop(){
    this.data.videoContext.stop()
  },
  // seek(){
  //   this.data.videoContext.seek(60)
  // },
  sendDanmu(){
    this.data.videoContext.sendDanmu({
      text:'这是一条有颜色的弹幕',
      color:'#0f0'
    })
  },
  playBackRate(){
    var _this = this
    wx.showActionSheet({
      itemList: _this.data.itemList,
      itemColor: '#0f0',
      success(res) {
        console.log(_this)
        _this.data.videoContext.playbackRate(Number(_this.data.itemList[res.tapIndex]))
        wx.showToast({
          title: `当前${_this.data.itemList[res.tapIndex]}播放中`,
          icon: 'success',
          mask: true
        })
      }
    })
  },
  requestFullScreen(){
    this.data.videoContext.requestFullScreen()
  },
  exitFullScreen(){
    this.data.videoContext.exitFullScreen()
  },
  //ios全屏有效
  showStatusBar(){
    this.data.videoContext.showStatusBar()
  },
  //ios全屏有效
  hideStatusBar(){
    this.data.videoContext.hideStatusBar()
  },
  //工具测试无效
  sliderchange(e){
    this.setData({
      min: e.detail.value
    })
    this.data.videoContext.seek(e.detail.value)
  },
  //播放持续触发
  updateTime(e){
    this.setData({
      min:e.detail.currentTime
    })
  }
})

function showModal(title, content) {
  wx.showModal({
    title: title,
    content: content,
  })
}