const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const log4js = require('./utils/log4.js')
const index = require('./routes/index')
const users = require('./routes/users')
const articles = require("./routes/article")
require('./config/db.js')
const cors = require('koa-cors');

app.use(cors());  // 允许所有源进行跨域请求

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(articles.routes(), articles.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  log4js.error(err)
});

app.listen(8888,()=>{
  console.log('端口 8888 启动中')
})

module.exports = app
