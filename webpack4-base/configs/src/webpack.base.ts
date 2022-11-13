/**
 * 基础配置
 */
import path from 'path'
import { Configuration, ProgressPlugin, BannerPlugin } from 'webpack'

import HtmlWebpackPlugin from 'html-webpack-plugin'

class WebpackBaseConfig {
  entry: Configuration['entry'] = {
    main: process.cwd() + '/src/main.ts'
  }
  mode: Configuration['mode'] = 'development';
  devtool: Configuration['devtool'] = 'hidden-source-map';
  plugins: Array<any> = [
    new ProgressPlugin({
      entries: true
    }),
    // new BannerPlugin({
    //   banner: 'fullhash:[fullhash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]'
    // }),
    new HtmlWebpackPlugin(),
    // new AutomaticPrefetchPlugin()
  ]
}
export default WebpackBaseConfig
