export default class TodoService {
  constructor(){

  }
  insert(data) {
    let st = wx.getStorageSync('todoList')
    data.key = Date.parse(new Date())
    st.data.push(data)
    wx.setStorageSync('todoList', st)
  }
  findAll() {

  }
  update() {

  }
}

