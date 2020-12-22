/**
 * 
 * 本地开发环境下的webpack配置
 */
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')({ mode: 'dev' })

// --------------------------------------------------------------------------------
// 添加自动刷新的依赖
const reloadPath = 'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true&noInfo=true'
for (const attr in baseConfig.entry) {
  if (Array.isArray(baseConfig.entry[attr])) {
    baseConfig.entry[attr].unshift(reloadPath)
  } else {
    baseConfig.entry[attr] = [reloadPath, baseConfig.entry[attr]] 
  }
}

const _config = {
  mode: 'development',
  plugins: baseConfig.plugins
}

_config.plugins.push(new webpack.HotModuleReplacementPlugin())
module.exports = merge(baseConfig, _config)
