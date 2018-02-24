// pages/mine/mine.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todoList: [1,2,3,4,5,6,7]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'todoList',
      success: res => {
        this.setData({
          todoList: res.data.data
        })
      }
    })
  },

  onShow() {
    wx.getStorage({
      key: 'todoList',
      success: res => {
        this.setData({
          todoList: res.data.data
        })
      }
    })
  }

})