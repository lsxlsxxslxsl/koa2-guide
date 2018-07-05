module.exports = {
  register: async(name, pwd) => {
    let data
    if (name == 'liusixin' && pwd == '123456') {
      data = {
        status: 0,
        data: {
          title: '个人中心',
          content: '欢迎进入刘思鑫的博客'
        }
      }
    } else {
      data = {
        status: -1,
        data: {
          title: '登录失败',
          content: '账号信息错误，请重新输入'
        }
      }
    }
    return data
  }
}