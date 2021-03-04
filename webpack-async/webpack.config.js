const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
    // a: './src/a.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  // 公共模块提取
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     minSize: 0,
  //     minChunks: 1
  //   }
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                // entry 在入口引入 import 'corejs'
                // usage 根据使用情况自动引入
                // useBuiltIns: 'usage',
                // // core-js 版本
                // corejs: 3,
                // targets: {
                //   'ie': '8'
                // }
              }]
            ],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                // {
                //   corejs: 3
                // }
              ]
            ]
          }
        }
      }
    ]
  }
}
/**
 * main.js:6 Uncaught ReferenceError: regeneratorRuntime is not defined
    at main.js:6
    at main.js:9726
    at main.js:9913
 */
