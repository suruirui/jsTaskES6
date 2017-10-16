var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './app/index.js'),
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			/*babel编译es6*/
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loaders: ['babel-loader?presets[]=es2015']
			}
		]
	},
	devServer: { //配置服务
		hot: true,
		inline: true
	}
}