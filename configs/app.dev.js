/**
 * 
 * 开发环境
 */
const { joinPath } = require('./utils')
const appBuild = require('./app.build')

const startServer = () => {
  // 服务
  const express = require('express')
  const webpackDevMiddle = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const { createProxyMiddleware } = require('http-proxy-middleware')
  // 配置
  const webpack = require('webpack')
  const config = require('./webpack.dev')
  const compiler = webpack(config)

  // 配置文件
  const projectConfig = require('./project.config')

  // express服务实例
  const app = express()

  // 使用中间件
  const compilerMiddleware = webpackDevMiddle(compiler, {
    logLevel: 'warn',
    stats: {
      colors: true
    }
  })
  app.use(compilerMiddleware)

  app.use(webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr'
  }))

  // todo: 抽离到 project.config 配置文件中
  app.use('/api', createProxyMiddleware({
    target: 'http://www.junfengshow.com',
    pathRewrite: { '^/api': '' },
    changeOrigin: true
  }))
  app.use('/wages', createProxyMiddleware({
    target: 'http://www.junfengshow.com',
    // pathRewrite: { '^/api': '' },
    changeOrigin: true
  }))

  app.use(express.static(joinPath('dist')))

  // browser history
  app.use('*', (req, res, next) => {
    const filename = joinPath('dist/index.html')
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      res.end()
    })
  })
  // 服务监听
  const server = app.listen(projectConfig.port, function () {
    console.log(`server is running on port ${projectConfig.port}`)
  })
}

appBuild.runBuild()
.then(() => {
  startServer()
  // todo
  // const nodeWatch = require('node-watch')
  // const watcher = nodeWatch(joinPath('configs/'), { recursize: true })
  // watcher.on('ready', () => {
  //   console.log('文件监听启动')
  // })
  // watcher.on('change', () => {
  //   console.log('run build ddss')
  //   destroy()
  //   console.log('kdkddk')
  //   // appBuild.runBuild()
  // })
})
