const webpack = require('webpack');
const path = require('path');

// -------------------------------------------------

const _config = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  plugins: [],
  module: {
    rules: [],
  }
};

_config.module.rules.push({
  test: /\.png$/,
  use: {
    loader: './rules/raw-loader'
  }
});

_config.module.rules.push({
  test: /\.tpl$/,
  use: [
    {
      loader:'./rules/console-none-loader',
      options: {
        allowCache: false
      }
    },
  ]
});

_config.module.rules.push({
  test: /\.tpl1$/,
  use: [
    {
      loader:'./rules/sync-loader',
      options: {
        allowCache: false
      }
    },
  ]
});

_config.module.rules.push({
  test: /\.tpl2$/,
  use: [
    {
      loader:'./rules/async-loader',
      options: {
        allowCache: false
      }
    },
  ]
});


const webpackRun = require('./webpack.run');
webpackRun(_config);
