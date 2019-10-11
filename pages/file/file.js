// pages/file/file.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temppdfUrl:null,
    isLoading:false,
    savedFileList:null
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
  downloadFile(){
    var _this = this
    this.setData({
      isLoading:true
    })
    wx.downloadFile({
      url: 'http://9240.fun/files/api.pdf',
      success: function(res) {
        console.log(res)
        _this.setData({
          temppdfUrl: res.tempFilePath,
          isLoading:false
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    }).onProgressUpdate(res => {
      console.log(res)
    })
  },
  openFile() {
    var _this = this
    wx.openDocument({
      filePath: this.data.temppdfUrl,
      fileType: 'pdf',
      success(res){
        console.log(res)
      },
      fail(res) {},
      complete() {},
    })
  },
  saveFile(){
    var _this = this
    wx.saveFile({
      tempFilePath: this.data.temppdfUrl,
      success: function(res) {
        _this.setData({
          temppdfUrl: null
        })
        wx.showToast({
          title: '文件保存成功',
          icon: 'success',
          mask: true,
        })
      },
      fail: function(res) {
        wx.showToast({
          title: '文件保存失败',
          icon: 'none',
          mask: true,
        })
      },
      complete: function(res) {},
    })
  },
  getSavedFileList(){
    var _this = this
    wx.getSavedFileList({
      success: function(res) {
        console.log(res)
        if (res.fileList[0]){
          _this.setData({
            savedFileList: res.fileList[0].filePath
          })
        }else{
          wx.showToast({
            title: '本地无缓存文件',
            icon: 'success',
            duration: 2000,
            mask: true,
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  getSavedFileInfo(){
    var _this = this
    wx.getSavedFileInfo({
      filePath: _this.data.savedFileList,
      success: function(res) {
        console.log(res)
        wx.showModal({
          title: '第一个文件信息',
          content: JSON.stringify(res),
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  removeSavedFile(){
    var _this = this
    wx.removeSavedFile({
      filePath: _this.data.savedFileList,
      success: function(res) {
        console.log(res)
        _this.setData({
          savedFileList:null
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})