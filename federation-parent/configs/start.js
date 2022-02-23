
const webpack = require('webpack');
const config = require('./webpack.config');
const DevServer = require('webpack-dev-server');
const path = require('path');
const compiler = webpack(config);

const port = 8081;
const server = new DevServer(compiler, {
  contentBase: path.resolve(__dirname, '../dist'),
  port,
});

server.listen(port, () => {
  console.log(`server is running port = ${port}`)
});
