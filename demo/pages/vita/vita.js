// pages/vita/vita.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      name: "梁元",
      id: "2**************6"
    },
    date: [{
      time: "03月14日",
      state: "今日·关闭"
    }, {
      time: "03月15日",
      state: "周五·关闭"
    }, {
      time: "03月16日",
      state: "周六·开放"
    }, {
      time: "03月17日",
      state: "周日·开放"
    }, {
      time: "03月18日",
      state: "周一·关闭"
    }, {
      time: "03月19日",
      state: "周二·关闭"
    }, {
      time: "03月20日",
      state: "周三·关闭"
    }, {
      time: "03月21日",
      state: "周四·关闭"
    }],
    time: [{
      time: "9:00-10:00",
      state: "开放"
    }, {
      time: "10:00-11:00",
      state: "开放"
    }, {
      time: "14:00-15:00",
      state: "开放"
    }, {
      time: "15:00-16:00",
      state: "开放"
    }],
    flag: false,
    mydata: {},
    mytime: {},
    idx: 0,
    idx2: 0

  },
  flag: function(e) {
    let idx = e.target.dataset.idx;
    let mydata = this.data.date[idx];
    this.setData({
      flag: true,
      idx,
      mydata
    })
  },
  time: function(e) {
    let idx2 = e.target.dataset.time;
    let mytime = this.data.time[idx2];
    this.setData({
      idx2,
      mytime
    })
  },
  btn: function() {
    wx.setStorageSync('userinfo', {
      userinfo: this.data.userInfo,
      data: this.data.mydata,
      time: this.data.mytime
    })
    wx.navigateTo({
      url: '../set/set?date=' + JSON.stringify(this.data.mydata) + '&time=' + JSON.stringify(this.data.mytime) + '&info=' + JSON.stringify(this.data.userInfo),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})