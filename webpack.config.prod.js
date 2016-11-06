var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      },
      {
        test: /\.png$/,
        loader: "url-loader?prefix=img/&limit=5000"
      },
      {
        test: /\.jpg$/,
        loader: "url-loader?prefix=img/&limit=5000"
      },
      {
        test: /\.gif$/,
        loader: "url-loader?prefix=img/&limit=5000"
      },
      {
        test: /\.woff$/,
        loader: "url-loader?prefix=font/&limit=5000"
      },
      {
        test: /\.woff2$/,
        loader: "url-loader?prefix=font/&limit=5000"
      },
      {
        test: /\.eot$/,
        loader: "file-loader?prefix=font/"
      },
      {
        test: /\.ttf$/,
        loader: "file-loader?prefix=font/"
      },
      {
        test: /\.svg$/,
        loader: "file-loader?prefix=font/"
      }
    ]
  }
}