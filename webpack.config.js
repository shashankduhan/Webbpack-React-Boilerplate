const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const outputPath = path.resolve(__dirname, 'build');
const isDevServer = !!process.argv.find(v => v.includes('webpack-dev-server'));

module.exports = {
	mode: isDevServer ? 'development' : 'production',
	entry: ['@babel/polyfill', './src/js/index.js'],
	output: {
		path: outputPath,
		publicPath: '/',
		filename: isDevServer ? '[name].js' : '[name].[contentHash].js',
	},
	devServer: {
		contentBase: './build',
		historyApiFallback: true,
	    host: '0.0.0.0',
		port: 1555,
		https: true,
		watchOptions: {
			ignored: /node_modules/,
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			}
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	devtool: isDevServer ? 'eval-source-map' : 'cheap-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve('./public/index.html'),
			inject: true,
			minify: true,
		}),
		new CopyWebpackPlugin({ patterns: [
			{ from: './src/assets/images', to: `${outputPath}/assets/images` }
		]}),
	],
	optimization: {
		minimize: !isDevServer,
		mergeDuplicateChunks: !isDevServer,
		removeEmptyChunks: true,
	},
};
