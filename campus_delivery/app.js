// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  data:{
    task_list:[{
      color: '#FDEF53',
      money: 1,
      places: '槿园1号1319',
      distance: 64,
      phonenumber: '17851006320'
    },
    {
      color: '#FDEF53',
      money: 3,
      places: '荔园8号302',
      distance: 829,
      phonenumber: '15684003612'
    },
    {
      color: '#FDEF53',
      money: 6,
      places: '榕园1号408',
      distance: 1634,
      phonenumber: '13358346182'
    },
    {
      color: '#FDEF53',
      money: 2,
      places: '槿园2号1905',
      distance: 157,
      phonenumber: '1884564322'
    },
    {
      color: '#FDEF53',
      money: 0,
      places: '荔园5号204',
      distance: 567,
      phonenumber: '15001648433'
    },
    {
      color: '#FDEF53',
      money: 1,
      places: '槿园1号2214',
      distance: 92,
      phonenumber: '13548779680'
    }],
    accept_list:[]
  }
})