// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ctx:null,
    color:'#000000',
    width:5,
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
    // var ctx = wx.createCanvasContext('firstCanvas', this)
    // ctx.setStrokeStyle('#00ff00')
    // ctx.setLineWidth(5)
    // ctx.rect(0, 0, 100, 100)
    // ctx.stroke()
    // ctx.setStrokeStyle('#ff0000')
    // ctx.setLineWidth(2)
    // ctx.moveTo(90, 50)
    // ctx.arc(50, 50, 40, 0, 2 * Math.PI, true)
    // ctx.moveTo(75, 50)
    // ctx.arc(50, 50, 25, 0, Math.PI, false)
    // ctx.moveTo(70, 30)
    // ctx.arc(65, 30, 5, 0, 2 * Math.PI, true)
    // ctx.moveTo(40, 30)
    // ctx.arc(35, 30, 5, 0, 2 * Math.PI, true)
    // ctx.stroke()
    // ctx.setStrokeStyle('#ff0000')
    // ctx.moveTo(220,50)
    // ctx.arc(170, 50,50,0,2*Math.PI,true)
    // ctx.setStrokeStyle('#0000ff')
    // ctx.stroke()
    // ctx.setFontSize(20)
    // ctx.fillText('hello world',240,20)
    // ctx.draw()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      ctx: wx.createCanvasContext('firstCanvas', this)
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
  changeWidth(e){
    this.setData({
      width:Number(e.detail.value)
    })
  },
  changeColor(e){
    this.setData({
      color: e.detail.value
    })
  },
  startDraw(e){
    this.data.ctx.setStrokeStyle(this.data.color)
    this.data.ctx.setLineWidth(this.data.width)
    this.data.ctx.moveTo(e.changedTouches[0].x, e.changedTouches[0].y)
  },
  moveDraw(e){
    this.data.ctx.lineTo(e.changedTouches[0].x, e.changedTouches[0].y);
    this.data.ctx.stroke()
  },
  endDraw(e){
    this.data.ctx.draw()
  }
})