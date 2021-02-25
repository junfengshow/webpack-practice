/**
 * 
 * 当前项目的基本配置
 */
const { joinPath } = require('./utils')
const appBuild = require('./app.build')
const projectConfig = {
  // 入口
  entry: {
    main: [joinPath(`src/${appBuild.localDirName}/${appBuild.entryName}`)]
    // main: [joinPath('src/appEntry.tsx')]
  },
  // 出口
  outputPath: joinPath('dist'),
  // 公共路径
  publicPath: '/',
  // 扩展名
  extensions: ['.js', '.ts', '.json', '.tsx'],
  // 别名
  alias: {
    '@': joinPath('src')
  },
  // 端口
  port: 8008,
  // 拷贝插件的配置 -- 只有在prod环境下才会拷贝
  copyPatterns: [
    { from: joinPath('public/**/*'), to: joinPath('dist') }
  ]
}
module.exports = projectConfig
