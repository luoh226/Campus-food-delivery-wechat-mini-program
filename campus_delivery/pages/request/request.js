// pages/request/request.js
const app = getApp();
import { getRandomInt } from '../utils'
Page({
  // 页面的初始数据
  data: {
    new_task: {
      color: '#FDEF53',
      money: 0,
      places: '',
      distance: 0,
      phonenumber: ''
    }
  },

  //添加任务
  add_task: function () {
    let flag = 0
    if(this.data.new_task.phonenumber=='')flag=2
    if(this.data.new_task.places=='')flag=1
    if(flag==0){
      // 任务栏添加
      this.setData({
        'new_task.distance': getRandomInt(1200),
      })
      app.data.task_list.push(JSON.parse(JSON.stringify(this.data.new_task))) //深拷贝
      // 订单栏添加（变色）
      this.setData({
        'new_task.color': '#FAC45D',
      })
      app.data.accept_list.push(JSON.parse(JSON.stringify(this.data.new_task))) //深拷贝
      this.setData({
        'new_task.color': '#FDEF53',
      })
      console.log(app.data.task_list)
      wx.showToast({
        title: '发布成功',
        icon: 'success',
        duration: 2000 //持续的时间
      })
      this.setData({
        'new_task.places': '',
        'new_task.phonenumber': '',
        'new_task.money': 0
      })
    }else if(flag==1){
      wx.showToast({
        title: '请输入配送地址',
        icon: 'error',
        duration: 2000 //持续的时间
      })
    }else if(flag==2){
      wx.showToast({
        title: '请输入电话号码',
        icon: 'error',
        duration: 2000 //持续的时间
      })
    }

  },
  //获取money slider数值
  moneychange: function(e){
    this.setData({
      'new_task.money': e.detail.value
    })
  },
  // 读取配送地址
  get_address: function(e){
    this.setData({
      'new_task.places': e.detail.value
    })
  },
  // 读取手机尾号
  get_phonenumber: function(e){
    this.setData({
      'new_task.phonenumber': e.detail.value
    })
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