module.exports = {
  serverPort: '5757',

  // 小程序 appId 和 appSecret 
  // 请到 https://mp.weixin.qq.com 获取 AppID 和 AppSecret
  appId: 'wx49db9eb526d437f0',
  appSecret: '59c058bc1102693386db4b66b4772aec',

  // mongodb 连接配置，生产环境请使用更复杂的用户名密码
  mongoHost: '127.0.0.1',
  mongoPort: '27017',
  mongoUser: 'weapp',
  mongoPass: 'weapp-dev',
  mongoDb: 'weapp'
};