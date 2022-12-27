// pages/index/index.js
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    task_list: app.data.task_list,
    show_list: app.data.task_list,
    money: '',
    places: '',
    distance: ''
  },

  //更新show_list
  updatelist: function(){
    console.log([
      '佣金', this.data.money,
      '地址', this.data.places,
      '距离', this.data.distance
    ])
    let tmp_list = []
    for(var i = 0; i < this.data.task_list.length; i++){
      let item = this.data.task_list[i]
      // console.log(item)
      //筛选佣金
      if(this.data.money!='14'||this.data.money!=''){
        if(this.data.money=='11'){
          if(item.money>1)continue;
        }else if(this.data.money=='12'){
          if(item.money>4||item.money<2)continue;
        }else if(this.data.money=='13'){
          if(item.money<5)continue;
        }
      }
      //筛选地址
      if(this.data.places!='24'||this.data.places!=''){
        if(this.data.places=='21'){
          if(item.places.indexOf("槿园") == -1)continue;
        }else if(this.data.places=='22'){
          if(item.places.indexOf("榕园") == -1)continue;
        }else if(this.data.places=='23'){
          if(item.places.indexOf("荔园") == -1)continue;
        }
      }
      //筛选距离
      if(this.data.distance!='34'||this.data.distance!=''){
        if(this.data.distance=='31'){
          if(item.distance>100)continue;
        }else if(this.data.distance=='32'){
          if(item.distance>500||item.distance<100)continue;
        }else if(this.data.distance=='33'){
          if(item.distance<500)continue;
        }
      }
      //加入展示
      tmp_list.push(item)
    }
    this.setData({'show_list': tmp_list})
  },

  //获取Filter里raito信息的改变
  radioChange1: function(e){
    if(e.detail.value=='1'){
      this.setData({money : "11"})
      this.updatelist()
    }else if(e.detail.value=='2'){
      this.setData({money : "12"})
      this.updatelist()
    }else if(e.detail.value=='3'){
      this.setData({money : "13"})
      this.updatelist()
    }else if(e.detail.value=='4'){
      this.setData({money : "14"})
      this.updatelist()
    }
    this.setData({
      'task_list' : app.data.task_list
    })
  },
  radioChange2: function(e){
    if(e.detail.value=='1'){
      this.setData({places : "21"})
      this.updatelist()
    }else if(e.detail.value=='2'){
      this.setData({places : "22"})
      this.updatelist()
    }else if(e.detail.value=='3'){
      this.setData({places : "23"})
      this.updatelist()
    }else if(e.detail.value=='4'){
      this.setData({places : "24"})
      this.updatelist()
    }
    this.setData({
      'task_list' : app.data.task_list
    })
  },
  radioChange3: function(e){
    if(e.detail.value=='1'){
      this.setData({distance : "31"})
      this.updatelist()
    }else if(e.detail.value=='2'){
      this.setData({distance : "32"})
      this.updatelist()
    }else if(e.detail.value=='3'){
      this.setData({distance : "33"})
      this.updatelist()
    }else if(e.detail.value=='4'){
      this.setData({distance : "34"})
      this.updatelist()
    }
    this.setData({
      'task_list' : app.data.task_list
    })
  },

  //接受任务
  accept_task: function(e){
    let idx = e.currentTarget.dataset.currentimg
    app.data.accept_list.push(JSON.parse(JSON.stringify(app.data.task_list[idx])))
    app.data.task_list.splice(idx,1)
    this.setData({
      'task_list' : app.data.task_list,
    })
    this.updatelist()
    wx.showToast({
      title: '接受成功',
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
      'task_list' : app.data.task_list,
    })
    this.updatelist()
    // console.log(app.data.show_list)
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