// pages/picture/picture.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseImageUrl:[],
    previewUrls:[]
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
  chooseImage() {
    var _this = this
    wx.chooseImage({
      success: function (res) {
        console.log(res)
        _this.data.previewUrls.push(res.tempFilePaths[0])
        _this.data.chooseImageUrl.push(res.tempFilePaths[0])
        _this.setData({
          chooseImageUrl: _this.data.chooseImageUrl,
          previewUrls: _this.data.previewUrls
        })
      },
    })
  },
  previewImage(){
    var _this = this
    wx.previewImage({
      urls: _this.data.previewUrls,
    })
  },
  getImageInfo(){
    wx.getImageInfo({
      src: this.data.chooseImageUrl[0],
      success(res){
        showModal('图片信息',JSON.stringify(res))
      }
    })
  },
  saveImageToPhotosAlbum(){
    wx.saveImageToPhotosAlbum({
      filePath: this.data.chooseImageUrl[0],
      success(res){
        showModal('保存图片成功', JSON.stringify(res))
      }
    })
  }
})

function showModal(title, content) {
  wx.showModal({
    title: title,
    content: content,
  })
}