// pages/interface/interface.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemList: ['A', 'B', 'C']
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
  showToast(){
    wx.showToast({
      title: '提示框',
      icon: 'success',
      mask:true
    })
  },
  showModal(){
    wx.showModal({
      title: '模态框',
      content: '内容区域',
      cancelText:'取消',
      cancelColor:'#eee',
      confirmText:'确认',
      confirmColor:'#0f0',
      success(res){
        console.log(res)
        if(res.confirm){
          wx.showToast({
            title: '你点击了确定',
            icon: 'success',
            mask: true
          })
        }else{
          wx.showToast({
            title: '你点击了取消',
            icon: 'none',
            mask: true
          })
        }
      }
    })
  },
  openLoading(){
    wx.showLoading({
      title: '加载中...',
    })
  },
  closeLoading(){
    wx.hideLoading()
  },
  showActionSheet(){
    var _this = this
    wx.showActionSheet({
      itemList: _this.data.itemList,
      itemColor:'#0f0',
      success(res){
        console.log(_this)
        wx.showToast({
          title: `你点击了${_this.data.itemList[res.tapIndex]}`,
          icon: 'success',
          mask: true
        })
      }
    })
  },
  showNavigationBarLoading(){
    wx.showNavigationBarLoading({
      success(res){
        console.log(res)
      }
    })
  },
  hideNavigationBarLoading(){
    wx.hideNavigationBarLoading()
  },
  setNavigationBarTitle(){
    wx.setNavigationBarTitle({
      title: '修改后的标题',
    })
  },
  setNavigationBarColor(){
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#0f0',
    })
  },
  hideHomeButton(){
    wx.hideHomeButton()
  },
  showTabBarRedDot(){
    wx.showTabBarRedDot({
      index: 3,
    })
  },
  hideTabBarRedDot(){
    wx.hideTabBarRedDot({
      index:3
    })
  },
  showTabBar(){
    wx.showTabBar({
      aniamtion: true,
      success(res){
        console.log(res)
      }
    })
  },
  hideTabBar(){
    wx.hideTabBar({
      aniamtion:true
    })
  },
  setTabBarStyle(){
    wx.setTabBarStyle({
      color:'#ff0000',
      selectedColor:'#0000ff',
      backgroundColor:'#00ff00',
      borderStyle:'black'
    })
  },
  setTabBarItem(){
    wx.setTabBarItem({
      index: 3,
      text:'interface'
    })
  },
  setTabBarBadge(){
    wx.setTabBarBadge({
      index: 3,
      text: '99+',
      success(res){
        console.log(res)
      }
    })
  },
  removeTabBarBadge(){
    wx.removeTabBarBadge({
      index: 3,
    })
  },
  startPullDownRefresh(){
    wx.startPullDownRefresh({
      success(res){
        console.log(res)
      }
    })
  },
  stopPullDownRefresh(){
    wx.stopPullDownRefresh()
  },
  pageScrollTo(){
    wx.pageScrollTo({
      scrollTop: 0,
      duration:2000,
      success(res){
        console.log(res)
      }
    })
  },
  getMenuButtonBoundingClientRect(){
    wx.showModal({
      title: '胶囊按钮',
      content: JSON.stringify(wx.getMenuButtonBoundingClientRect()),
    })
  },
  onWindowResize(){
    wx.onWindowResize((res)=>{
      console.log(res)
    })
  }
})