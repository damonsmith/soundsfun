var HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: { allowTsInNodeModules: true }
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "web/index.template.html"
		})
	],
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	devtool: "nosources-source-map"
};