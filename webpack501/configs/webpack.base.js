/**
 * 
 * webpack 基本配置
 */
const { joinPath } = require('./utils')
const projectConfig = require('./project.config')
// const webpack = require('webpack')
const { CheckerPlugin } = require('awesome-typescript-loader')

const getConfig = ({ mode } = {}) => {
  // 通过mode去决定是否是开发环境
  const ISDEV = mode === 'dev'
  // 配置文件
  const _config = {
    cache: false,
    entry: projectConfig.entry,
    output: {
      filename: ISDEV ? '[name].js' : '[name].[chunkhash:6].js',
      path: projectConfig.outputPath,
      publicPath: projectConfig.publicPath
    },
    resolve: {
      extensions: projectConfig.extensions,
      alias: projectConfig.alias,
      // fallback: { path: false }
    },
    module: {
      rules: []
    },
    plugins: [
      // new CheckerPlugin()
    ]
  }

  // ---------------------------------------------------------------
  // --- js相关
  _config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/, // [joinPath('node_modules')],
    use: [
      {
        loader: 'awesome-typescript-loader',
        options: {
          configFile: joinPath('tsconfig.json')
        }
      }
    ]
  })

  // ---------------------------------------------------------------
  // --- 样式相关
  // todo modules
  const MiniCssExtractPlugin = require('mini-css-extract-plugin')
  _config.module.rules.push({
    test: /(\.s[ac]ss$|\.css)/,
    exclude: /node_modules/, 
    use: [
      {
        loader: ISDEV ? 'style-loader' : MiniCssExtractPlugin.loader,
      },
      {
        loader: 'css-loader',
        options: {
          esModule: false,
          // fix：不能加auto，加了之后一直警告 export styles (as default) not found
          // 然后模块也不能形成
          modules: {
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          },
          importLoaders: 2,
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            config: false,
            plugins: [
              ['postcss-preset-env',
              {
                stage: 3,
                browsers: 'last 3 versions'
              }]
            ]
          }
        }
      },
      {
        loader: 'sass-loader',
      },
    ]
  })
  _config.plugins.push(new MiniCssExtractPlugin({
    filename: ISDEV ? '[name].css' : '[name].[contenthash].css',
    chunkFilename: ISDEV ? '[id].js' : '[id].[contenthash].css'
  }))
  // ---------------------------------------------------------------
  // --- md 相关
  _config.module.rules.push({
    test: /\.md$/,
    exclude: /node_modules/,
    use: [
      {loader: 'raw-loader', options: { esModule: false }}
    ]
  })
  // ---------------------------------------------------------------
  // --- html 相关
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  _config.plugins.push(new HtmlWebpackPlugin({
    template: joinPath('src/index.html')
  }))

  // ---------------------------------------------------------------
  // --- 图片 相关
  _config.module.rules.push({
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  },)

  // ---------------------------------------------------------------
  // --- fonts
  ;[
    ['woff', 'application/font-woff'],
    ['woff2', 'application/font-woff2'],
    ['otf', 'font/opentype'],
    ['ttf', 'application/octet-stream'],
    ['eot', 'application/vnd.ms-fontobject'],
    ['svg', 'image/svg+xml'],
  ].forEach((font) => {
    const extension = font[0]
    const mimetype = font[1]
  
    _config.module.rules.push({
      test    : new RegExp(`\\.${extension}$`),
      loader  : 'url-loader',
      options : {
        name  : 'fonts/[name].[ext]',
        limit : 10000,
        mimetype,
      },
    })
  })

  return _config
}

module.exports = getConfig
