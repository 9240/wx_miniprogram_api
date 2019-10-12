//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    if (e.detail.errMsg =='getUserInfo:fail auth deny'){
      wx.showToast({
        title: '你拒绝了授权',
        icon: 'success',
        duration: 3000,
        success(res) {
          console.log(res)
        }
      })
    }
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },




  goToRouter(){
    wx.navigateTo({
      url: '/pages/router/router',
    })
  },
  goToStorage(){
    wx.navigateTo({
      url: '/pages/storage/storage',
    })
  },
  goToMap(){
    wx.navigateTo({
      url: '/pages/map/map',
    })
  },
  goToPicture(){
    wx.navigateTo({
      url: '/pages/picture/picture',
    })
  },
  goToVideo(){
    wx.navigateTo({
      url: '/pages/video/video',
    })
  },
  goToVoice(){
    wx.navigateTo({
      url: '/pages/voice/voice',
    })
  },
  goToBackgroundAudio(){
    wx.navigateTo({
      url: '/pages/backgroundAudio/backgroundAudio',
    })
  },
  goToCanvas(){
    wx.navigateTo({
      url: '/pages/canvas/canvas',
    })
  },
  goToFile(){
    wx.navigateTo({
      url: '/pages/file/file',
    })
  },
  goToRecord(){
    wx.navigateTo({
      url: '/pages/record/record',
    })
  },
  goToEditor(){
    wx.navigateTo({
      url: '/pages/editor/editor',
    })
  },
  goToCamera(){
    wx.navigateTo({
      url: '/pages/camera/camera',
    })
  },
  goToShare(){
    wx.navigateTo({
      url: '/pages/share/share',
    })
  },
  goToOpenApi(){
    wx.navigateTo({
      url: '/pages/openApi/openApi',
    })
  }
})
