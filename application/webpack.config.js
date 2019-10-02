const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: {
		main: ['./src/index'],
	},
	resolve: {
		extensions: ['.js'],
	},
	plugins: [
		new htmlWebpackPlugin(),
	],
};
