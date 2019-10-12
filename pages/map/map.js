// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    map:null,
    markers: [{
      iconPath: '/assets/32794429.jpg',
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 30,
      height: 30
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
          longitude: 113.324520,
          latitude: 23.21229
      }],
      color: "#0f0",
      width: 10,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/assets/32794429.jpg',
      position: {
        left: 0,
        top:0,
        width: 30,
        height: 30
      },
      clickable: true
    }]
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
      map: wx.createMapContext('map', this)
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
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  getCenterLocation(){
    this.data.map.getCenterLocation({
      success(res){
        console.log(res)
        showModal('当前经纬度',JSON.stringify(res))
      },
      fail(err){
        console.log("获取当前地图中心经纬度出错："+err)
      }
    })
  },
  getRegion(){
    this.data.map.getRegion({
      success(res){
        showModal('当前地图视野范围', JSON.stringify(res))
      }
    })
  },
  getRotate(){
    this.data.map.getRotate({
      success(res){
        console.log(res)
        showModal('当前地图旋转角', JSON.stringify(res))
      },
      fail(err){
        console.log(err)
      }
    })
  },
  getScale(){
    this.data.map.getScale({
      success(res){
        showModal('当前地图缩放级别',JSON.stringify(res))
      }
    })
  },
  getSkew(){
    this.data.map.getSkew({
      success(res){
        showModal('当前地图倾斜角',JSON.stringify(res))
      }
    })
  },
  includePoints(){
    this.data.map.includePoints({
      success(res){
        console.log(res)
        showModal('展示所有经纬度',JSON.stringify(res))
      }
    })
  },
  moveToLocation(){
    this.data.map.moveToLocation({
      success(res){
        console.log(res)
      }
    })
  },
  translateMarker(){
    this.data.map.translateMarker({
      markerId:0,
      destination:{
        latitude: 22.721740000000008,
        longitude: 114.06030999999997
      },
      autoRotate:true,
      duration:2000,
      animationEnd(){
        console.log('动画结束')
      },
      success(res){
        console.log(res)
      }
    })
  },
  startLocationUpdateBackground(){
    wx.startLocationUpdateBackground({
      success(res){
        console.log(res)
      },
      fail(err){
        console.log(err)
      }
    })
  }
})

function showModal(title,content){
  wx.showModal({
    title: title,
    content: content,
  })
}