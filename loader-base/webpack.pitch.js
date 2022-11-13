/**
 * 
 * 这里是webpack loader的 pitch loader
 */
const webpack = require('webpack');
const path = require('path');

// -------------------------------------------------

const _config = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/pitchEntry.js',
  output: {
    path: path.resolve(__dirname, 'pitch-dist'),
    filename: '[name].js'
  },

  plugins: [],
  module: {
    rules: [],
  }
};

_config.module.rules.push({
  test: /\.tpl$/,
  use: [
    './rules/pitch-loader-1',
    './rules/pitch-loader-2',
  ]
});

 
// ----------------------------------------------
// run
const webpackRun = require('./webpack.run');
webpackRun(_config);
 
