const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		index: path.resolve('./src/index.ts'),
	},
	output: {
		libraryTarget: 'umd',
		path: path.join(__dirname, 'dist')
	},
	mode: 'development',
	devtool: 'source-map',
	resolve: {
		extensions: [ '.ts', '.js' ],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
					{
						loader: 'ts-loader',
					},
				],
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
	],
};
