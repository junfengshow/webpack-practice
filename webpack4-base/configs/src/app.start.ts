/**
 * 
 * dev 配置
 */
import WebpackBaseConfig from './webpack.base'
import webpack, { Stats, Configuration } from 'webpack'
import { Logger } from './utils'
const webpackConfigs = new WebpackBaseConfig()

const runWebpackCompiler = (webpackConfigs: Configuration) => new Promise((resolve, reject) => {
  webpack(webpackConfigs).run((error: Error, stats: Stats) => {
    if (error) {
      reject(error)
      throw Error(error.message)
    }
    const statsJson = stats.toJson()
    if (stats.hasWarnings()) {
      statsJson.warnings.forEach(Logger.warn)
    }
    if (stats.hasErrors()) {
      return reject(statsJson.errors)
    }
    resolve(stats)
  })
})

const compile = () => {
  return Promise.resolve()
  .then(() => Logger.info('... 开始编译 ...'))
  .then(() => runWebpackCompiler(webpackConfigs))
  .then((stats: any) => {
    // 这里可以拷贝资源等任务
    return stats
  })
  .then((stats) => {
    Logger.log(stats.toString({
      colors: true,
      chunks: false,
    }))
    Logger.success(`=======`)
    Logger.success(`编译成功`)
    Logger.success(`=======`)
  })
  .catch((errors) => {
    Logger.error(errors)
  })
}
compile()
