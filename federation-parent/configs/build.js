const webpack = require('webpack')
const config = require('./webpack.config')
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

  // 239
  // 292
})
