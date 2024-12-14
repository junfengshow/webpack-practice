const webpack = require("webpack");
const path = require("path");
const joinPath = (pathname) => path.join(__dirname, "..", pathname);

// 基础配置
const _config = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: joinPath("src/bootstrap.js"),
  },
  output: {
    path: joinPath("dist"),
    filename: "[name].js",
  },
  plugins: [],
  module: {
    rules: [],
  },
};

// html
const HtmlWebpackPlugin = require("html-webpack-plugin");

_config.plugins.push(
  new HtmlWebpackPlugin({
    template: joinPath("src/index.html"),
  })
);

// copy
// const CopyWebpackPlugin = require('copy-webpack-plugin')
// _config.plugins.push(new CopyWebpackPlugin({
//   patterns: [
//     { from: joinPath('public'), to: joinPath('dist')}
//   ]
// }))

// 联邦模块
const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

// 导出模块
_config.plugins.push(
  new ModuleFederationPlugin({
    name: "federation",
    filename: "testFederation.js",
    exposes: {
      "./User": "./src/User.js",
      // './Person': './src/Person.js',
      // './Total': './src/Total',
    },
    // shared: {
    //   'react': {
    //     eager: true,
    //   },
    //   'react-dom': {
    //     eager: true,
    //   },
    // }
  })
);

// 导入模块
// _config.plugins.push(new ModuleFederationPlugin({
//   name: 'abcdef',
//   remotes: {
//     remoteHost: 'abcdef@http://127.0.0.1:8080/testFederation1.js'
//   }
// }))

// js
_config.module.rules.push({
  test: /\.(js)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/env", "@babel/react"],
    },
  },
});

const MiniCssExtraPlugin = require("mini-css-extract-plugin");
_config.plugins.push(new MiniCssExtraPlugin());
_config.module.rules.push({
  test: /\.(css)$/,
  exclude: /node_modules/,
  use: [MiniCssExtraPlugin.loader, "css-loader"],
});

// 资源模块
_config.module.rules.push({
  test: /\.(png|jpg|gif)$/,
  // 通用资源类型
  type: "asset",
  parser: {
    dataUrlCondition: {
      maxSize: 8 * 1024,
    },
  },
});
_config.module.rules.push({
  test: /\.(woff|eot|woff2|ttf|svg)$/,
  // 通用资源类型
  type: "asset",
  // parser: {
  // }
});

// 文件缓存
_config.cache = {
  type: "filesystem",
  cacheDirectory: joinPath(".cache/webpack"),
};

module.exports = _config;
