// pages/internet/internet.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    downLoadPercent:0,
    totalBytesWritten:0,
    totalBytesExpectedToWrite:0,
    downloadTask:null,
    uploadTask:null,
    uploadPercent:0,
    totalBytesExpectedToSend:0,
    totalBytesSent:0,
    socketOpen:false,
    socketMsgQueue:[],
    resData:[]
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
  request(){
    const requestTask = wx.request({
      url: app.globalData.requestUrl + '/mini',
      data: '',
      header: {
        'content-type':'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res)
        wx.showModal({
          title: '请求结果',
          content: JSON.stringify(res),
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  downLoadFile(){
    this.setData({
      downloadTask: wx.downloadFile({
        url: app.globalData.requestUrl + '/upload/1570674239632.rar',
        success: function (res) {
          console.log(res)
          wx.showToast({
            title: '下载成功',
            icon:'success',
            duration:2000,
            mask:true
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    })
    this.data.downloadTask.onProgressUpdate(res=>{
      this.setData({
        downLoadPercent:res.progress,
        totalBytesExpectedToWrite: res.totalBytesExpectedToWrite,
        totalBytesWritten: res.totalBytesWritten
      })
    })
  },
  cancelDownLoad(){
    this.data.downloadTask.abort()
  },
  uploadLoadFile(){
    var _this = this
    wx.chooseImage({
      success: function(res) {
        console.log(res)
        const tempFilePath = res.tempFilePaths[0]
        _this.setData({
          uploadTask: wx.uploadFile({
            url: app.globalData.requestUrl + '/upload',
            filePath: tempFilePath,
            name: 'img',
            success(res) {
              console.log(res)
              wx.showToast({
                title: '上传成功',
                icon: 'success',
                duration: 2000,
                mask: true
              })
            }
          })
        })
        _this.data.uploadTask.onProgressUpdate(res=>{
          console.log(res)
          _this.setData({
            uploadPercent: res.progress,
            totalBytesExpectedToSend: res.totalBytesExpectedToSend,
            totalBytesSent: res.totalBytesSent
          })
        })
      },
    })
  },
  cancelUploadLoad(){
    this.data.uploadTask.abort()
  },
  connectSocket(){
    var _this = this
    wx.connectSocket({
      url: 'ws://9240.fun:3000',
      success(res){
        console.log(res)
        _this.setData({
          socketOpen:true
        })
        
      },
      fail(err){
        console.log("连接失败")
      }
    })
    wx.onSocketOpen(function (res) {
      var length = _this.data.socketMsgQueue.length
      for (let i = 0; i < length; i++) {
        wx.sendSocketMessage({
          data: _this.data.socketMsgQueue[0],
          success(res){
            _this.data.socketMsgQueue.shift();
            _this.setData({
              socketMsgQueue: _this.data.socketMsgQueue
            })
          }
        })
      }
    })
    wx.onSocketMessage(function (res) {
      console.log(res)
      _this.data.resData.push(res.data)
      _this.setData({
        resData: _this.data.resData
      })
    })
  },
  closesocket(){
    var _this = this
    wx.closeSocket({
      success(res){
        console.log(res)
        _this.setData({
          socketOpen: false
        })
      },
      fail(err){
        console.log("关闭失败")
      }
    })
  },
  sendMsg(){
    var text = "helloworld" + Math.ceil(Math.random() * 30)
    var _this = this
    if (this.data.socketOpen){
      wx.sendSocketMessage({
        data: text,
        success(res){
          console.log(res)
        }
      })
      wx.onSocketMessage(function (res) {
        _this.data.resData.push(res.data)
        _this.setData({
          resData: _this.data.resData
        })
      })
    }else{
      this.data.socketMsgQueue.push(text)
      this.setData({
        socketMsgQueue: this.data.socketMsgQueue
      })
    }
  }
})