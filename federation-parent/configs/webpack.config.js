const webpack = require("webpack");
const path = require("path");
const joinPath = (pathname) => path.join(__dirname, "..", pathname);
const depts = require("../package.json").dependencies;

// 基础配置
const _config = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: joinPath("src/main.js"),
  },
  output: {
    path: joinPath("dist"),
    filename: "[name].js",
  },
  plugins: [],
  module: {
    rules: [],
  },
  optimization: {
    sideEffects: false,
    moduleIds: "named",
    chunkIds: "named",
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: {
          test: /\/node_modules\/(react|react-dom)/,
          chunks: "initial",
          name: "vendors",
          priority: -5,
        },
      },
    },
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
// _config.plugins.push(new ModuleFederationPlugin({
//   name: 'abcdef',
//   filename: 'testFederation.js',
//   exposes: {
//     './Us': './src/User.js'
//   }
// }))

// 导入模块
_config.plugins.push(
  new ModuleFederationPlugin({
    name: "federation",
    remotes: {
      // remoteHost: "federation@http://127.0.0.1:8080/testFederation.js",
      remoteHost:
        "federation@http://localhost:3000/_next/static/testFederation.js",
    },
    // shared: {
    //   react: {
    //     eager: true,
    //     import: "react",
    //     shareKey: "react",
    //     shareScope: "default",
    //     singleton: true,
    //     requiredVersion: depts["react"],
    //   },
    //   "react-dom": {
    //     eager: true,
    //     singleton: true,
    //     requiredVersion: depts["react-dom"],
    //   },
    // },
  })
);

// js
_config.module.rules.push({
  test: /\.(js)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/env", "@babel/react"],
      plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-regenerator",
      ],
    },
  },
});

_config.module.rules.push({
  test: /\.(css)$/,
  exclude: /node_modules/,
  use: ["style-loader", "css-loader"],
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
