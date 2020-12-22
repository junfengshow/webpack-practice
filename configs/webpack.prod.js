/**
 * 
 * 生产环境下的webpack配置
 */
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')({ mode: 'prod' })
const projectConfig = require('./project.config')

const _config = {
  mode: 'production',
  plugins: baseConfig.plugins
}

// --------------------------------------------------------
// 拷贝静态文件
const CopyPlugin = require('copy-webpack-plugin')
_config.plugins.push(new CopyPlugin({
  patterns: projectConfig.copyPatterns,
  options: {
    concurrency: 100,
  },
}))

// --------------------------------------------------------
// 清除 output.path 下的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
_config.plugins.push(new CleanWebpackPlugin())

module.exports = merge(baseConfig, _config)
