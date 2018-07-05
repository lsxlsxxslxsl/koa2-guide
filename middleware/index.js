const path = require('path')
const ip = require('ip')
const bodyParser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')
const staticFiles = require('koa-static')

const miSend = require('./mi-send')
const miLog = require('./mi-log') // 日志中间件
const miHttpError = require('./mi-http-error') // 请求错误中间件
const miRule = require('./mi-rule') // 引入规则中件间

module.exports = (app) => {
  /**
   * 在接口的开头调用
   * 指定 controller 文件夹下的 js 文件，挂载在 app.controller 属性
   * 指定 service 文件夹下的 js 文件，挂载在 app.service 属性
   */ 
  miRule({
    app,
    rules: [
      {
        folder: path.join(__dirname, '../controller'),
        name: 'controller'
      },
      {
        folder: path.join(__dirname, '../service'),
        name: 'service'
      }
    ]
  })
  
  app.use(miHttpError({
    errorPageFolder: path.resolve(__dirname, '../errorPage')
  }))

  // 将配置中间件的参数在注册中间件时作为参数传入
  app.use(miLog(app.env, {
    env: app.env,  // koa 提供的环境变量
    projectName: 'koa2-tutorial',
    appLogLevel: 'debug',
    dir: 'logs',
    serverIp: ip.address()
  }))
  
  app.use(staticFiles(path.resolve(__dirname, '../public')))
  app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, '../views'), // 指定视图位置
    nunjucksConfig: {
      trimBlocks: true // 开启转义，防xss攻击
    }
  }))

  app.use(bodyParser())
  app.use(miSend())

  // 增加错误的监听处理
  app.on("error", (err, ctx) => {
    if (ctx && !ctx.headerSent && ctx.status < 500) {
      ctx.status = 500
    }
    if (ctx && ctx.log && ctx.log.error) {
      if (!ctx.state.logged) {
        ctx.log.error(err.stack)
      }
    }
  }) 
}