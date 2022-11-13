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

const MineBasePlugin = require('./plugins/mine-base-plugin');
_config.plugins.push(new MineBasePlugin());

const webpackRun = require('./webpack.run');
webpackRun(_config);
