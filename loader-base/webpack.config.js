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
    './rules/pitch-loader-1',
    './rules/pitch-loader-2',
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


// -------------------------------------------------

const compiler = webpack(_config);


const webpackCompiler = () => {
  return new Promise((resolve, reject) => {
    console.log('编译中...')
    compiler.run((err, stats) => {
      if (err) {
        return reject(err)
      }
      const info = stats.toJson()

      if (stats.hasErrors()) {
        return reject(info.errors)
      }

      if (stats.hasWarnings()) {
        console.log(info.warnings)
      }

      console.log(stats.toString({ colors: true }))
      resolve()
    })
  })
}

const start = () => Promise.resolve()
.then(() => console.log('开始编译'))
.then(webpackCompiler)
.then(() => {
  console.log('======================')
  console.log('===========')
  console.log('编译成功')
  console.log('===========')
  console.log('======================')
})
.catch((err) => {
  console.log('======================')
  if (Array.isArray(err)) {
    err.forEach((item) => {
      console.log(item)
    })
  } else {
    console.log(err)
  }
  console.log('======================')
})
start()
