// pages/voice/voice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    innerAudioContext:null
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
      innerAudioContext:wx.createInnerAudioContext()
    })
    this.data.innerAudioContext.src = 'http://121.9.201.15/amobile.music.tc.qq.com/C4000020VnHM0U9uNh.m4a?guid=5282834674&vkey=E5BA1DBDEA9F5CFD26F48A8C06DE2CE4C8EBF853FC664CAB0C99A71F14B6E524C998FCF1D13D065FA027DEF6298938E32AF08EC09DE3AE71&uin=1371&fromtag=66',
    this.data.innerAudioContext.autoplay = false,
    this.data.innerAudioContext.startTime = 0,
    this.data.innerAudioContext.loop = false,
    this.data.innerAudioContext.onCanplay(() => {
      console.log('音频可以播放事件')
    })
    this.data.innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    this.data.innerAudioContext.onPause(() => {
      console.log('暂停事件')
    })
    this.data.innerAudioContext.onStop(() => {
      console.log('停止事件')
    })
    this.data.innerAudioContext.onEnded(() => {
      console.log('音频自然结束事件')
    })
    this.data.innerAudioContext.onTimeUpdate(() => {
      console.log('音频播放进度更新事件')
      // console.log(this.data.innerAudioContext)
    })
    this.data.innerAudioContext.onError(() => {
      console.log('音频播放错误事件')
    })
    this.data.innerAudioContext.onWaiting(() => {
      console.log('音频加载中事件')
    })
    this.data.innerAudioContext.onSeeking(() => {
      console.log('音频进行跳转操作事件')
    })
    this.data.innerAudioContext.onSeeked(() => {
      console.log('音频完成跳转操作事件')
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
    this.data.innerAudioContext.play()
  },
  pause(){
    this.data.innerAudioContext.pause()
  },
  stop(){
    this.data.innerAudioContext.stop()
  },
  destory(){
    this.data.innerAudioContext.destroy()
  }
})
//跳到指定位置