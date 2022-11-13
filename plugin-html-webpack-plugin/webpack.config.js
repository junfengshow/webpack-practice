const { Compiler } = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('./index.js')

const _config = {
	entry: {
		main: './src/main.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: 'development',
	plugins: []
}

_config.plugins.push(new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'test.html'
}))

// const MineHtmlPlugin = require('./plugins/mine-html-plugin')

// _config.plugins.push(new MineHtmlPlugin({
// 	template: './src/index.html',
// 	filename: 'test002.html'
// }))
module.exports = _config;
