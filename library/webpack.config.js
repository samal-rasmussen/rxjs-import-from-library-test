const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		index: path.resolve('./src/index.js'),
	},
	output: {
		libraryTarget: 'umd',
		path: path.join(__dirname, 'dist')
	},
	mode: 'development',
	devtool: 'source-map',
	resolve: {
		extensions: [ '.js' ],
	},
	plugins: [
		new CleanWebpackPlugin(),
	],
};
