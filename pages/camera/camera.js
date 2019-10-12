// pages/camera/camera.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cameraContext:null,
    takePhotoUrl:null,
    videoUrl:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if(options&&options.sendData =="1"){
      const eventChannel = this.getOpenerEventChannel()
      eventChannel.on('sendData',(res)=>{
        console.log(res)
      })
    }
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
  reject(){
    wx.showToast({
      title: '你拒绝了使用摄像头',
      duration:3000,
    })
  },
  getCameraContext(){
    this.setData({
      cameraContext:wx.createCameraContext()
    })
  },
  tokephoto(){
    var _this = this
    this.data.cameraContext.takePhoto({
      quality:'high',
      success(res){
        _this.setData({
          takePhotoUrl: res.tempImagePath
        })
      }
    })
  },
  startRecord(){
    this.data.cameraContext.startRecord({
      timeoutCallback(res){
        console.log(res)
      },
      success(res){
        console.log(res)
      },
      fail(res){
        console.log(res)
        wx.showToast({
          title: '开始录像失败',
          duration:3000,
          icon:'none'
        })
      }
    })
  },
  stopRecord(){
    var _this = this
    this.data.cameraContext.stopRecord({
      success(res) {
        console.log(res)
        _this.setData({
          videoUrl: res.tempVideoPath
        })
      },
      fail(res) {
        console.log(res)
        wx.showToast({
          title: '结束录像失败',
          duration: 3000,
          icon: 'none'
        })
      }
    })
  }
})