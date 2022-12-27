// pages/order/order.js
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    accept_list: app.data.accept_list
  },

  //完成任务
  finish_task: function(e){
    let idx = e.currentTarget.dataset.currentimg
    app.data.accept_list.splice(idx,1)
    this.setData({
      'accept_list' : app.data.accept_list
    })
    wx.showToast({
      title: '订单完成',
      icon: 'success',
      duration: 1500 //持续的时间
    })
  },

  back() {
    wx.navigateBack({})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      'accept_list' : app.data.accept_list
    })
    // console.log(app.data.accept_list)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})