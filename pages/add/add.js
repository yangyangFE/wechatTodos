// pages/add/add.js
const util = require('../../utils/util.js')
const TodoService = require('../../service/addList.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '', // 名称
    completeStatus: false, // 完成状态
    detail: '', // 明细
    beginDate: "",   // 开始时间
    endDate: "",    // 结束时间
    note:"",    // 备注
    classArray: ['study', 'life', 'others'],  
    priority: 1, // 重要程度
    index: 0, // 类别索引
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      beginDate: util.formatTime(new Date()),
      endDate: util.formatTime(new Date())
    })
  },
  /**
   * 获取备忘录名称
   */
  bindTitleInput(e) {
    this.setData({
      title: e.detail.value
    })
  },

  /**
   * 获取完成状态
   */
  switch2Change(e) {
    this.setData({
      completeStatus: e.detail.value
    })
  },

  /**
   * 获取备忘录明细
   */
  bindDetailInput(e) {
    this.setData({
      detail: e.detail.value
    })
  },

  /**
   * 获取完成时间
   */
  bindBeginDateChange: function(e) {
    this.setData({
      beginDate: e.detail.value
    })
  },

  /**
   * 获取结束时间 
   */
  bindEndDateChange(e) {
    this.setData({
      endDate: e.detail.value
    })
  },

  /**
   * 获取备忘录分类
   */
  bindClassChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },

  /**
   * 获取备忘录重要程度级别
   */
  slider4change:function(e) {
    this.setData({
      priority: e.detail.value
    })
  },

  bindNoteInput(e) {
    this.setData({
      note: e.detail.value
    })
  },
 

  bindViewTap(e) {
    console.log(e.target)
  },

  submit() {
    // todo 存数据库
    console.log(this.data)
    let todoService = new TodoService.default
    todoService.insert(this.data)
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
    setTimeout(()=>{
      wx.switchTab({
        url: '/pages/todo/todo'
      })
    },2000)
  }
})