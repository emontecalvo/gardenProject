module.exports = {
	entry: "./client/js/index.js",
	output: {
		path: "./build",
		filename: "app.js"
	},
	devtool: 'inline-source-map',
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			loader: 'babel',
		}]
	},
}
