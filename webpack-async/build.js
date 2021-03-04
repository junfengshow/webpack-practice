const webpack = require('webpack')
const config = require('./webpack.config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

config.plugins.push(new CleanWebpackPlugin())

const compiler = webpack(config)
compiler.run((err, stats) => {
  if (err) {
    throw new Error(err)
  }
  let json = stats.toJson({
    assets: false, hash: true, colors: true
  })
  if (stats.hasErrors) {
    json.errors.forEach((item) => {
      console.error(item.moduleIdentifier)
      console.error(item.message)
    })
  }
  if (stats.hasWarnings) {
    json.warnings.forEach((item) => {
      console.warn(item.message)
    })
  }
  console.log('time: ' + json.time)
  console.log('hash: ' + json.hash)
  console.log('version: ' + json.version)
  console.log('-------------------------------')
  const assetsInfo = stats.compilation.assetsInfo
  assetsInfo.forEach((value, key) => {
    let size = (value.size / 1024).toFixed(2)
    if (size >= 1024) {
      size = (size / 1024).toFixed(2) + 'mb'
    } else {
      size += 'kb'
    }
    console.log(`${key}: ${size}`)
  })
  console.log('-------------------------------')
  // assetsInfo.entries().forEach((key) => {
  //   console.log(assetsInfo.get(key))
  // })
  // 130k

  // 239
  // 292
})
