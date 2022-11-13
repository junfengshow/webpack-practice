/**
 * 启动编译
 */
const webpack = require('webpack');

// -------------------------------------------------
const webpackCompiler = (compiler) => {
  return new Promise((resolve, reject) => {
    console.log('编译中...')
    compiler.run((err, stats) => {
      if (err) {
        return reject(err)
      }
      const info = stats.toJson()

      if (stats.hasErrors()) {
        return reject(info.errors)
      }

      if (stats.hasWarnings()) {
        console.log(info.warnings)
      }

      console.log(stats.toString({ colors: true }))
      resolve()
    })
  })
}

const start = (compiler) => Promise.resolve()
.then(() => console.log('开始编译'))
.then(() => {
  return webpackCompiler(compiler)
})
.then(() => {
  console.log('======================')
  console.log('===========')
  console.log('编译成功')
  console.log('===========')
  console.log('======================')
})
.catch((err) => {
  console.log('======================')
  if (Array.isArray(err)) {
    err.forEach((item) => {
      console.log(item)
    })
  } else {
    console.log(err)
  }
  console.log('======================')
});

module.exports = function (_config) {
  const compiler = webpack(_config);
  start(compiler);
};
