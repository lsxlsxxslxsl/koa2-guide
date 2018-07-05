module.exports = () => {
  function render(json) {
    ctx.set("Content-Type", "application/json")
    ctx.body = JSON.stringify(json)
  }
  return async(ctx, next) => {
    ctx.send = render.bind(ctx) // 把 JSON 数据的处理方法挂载在 ctx 对象中，名为 send,方便调用
    ctx.log.error('ikcamp') // 调用ctx上的log方法下的error方法打印日志
    await next()
  }
}