/**
 * 
 * 跑生产环境
 */
const webpack = require('webpack')
const config = require('./webpack.prod.js')
const compiler = webpack(config)
const appBuild = require('./app.build')
const run = () => {
  compiler.run((err, stats) => {
    if (err) {
      console.error(err)
      return
    }
    const json = stats.toJson()
    if (stats.hasWarnings) {}
    // console.log(stats.toString())
  })
}

appBuild.runBuild()
.then(run)

