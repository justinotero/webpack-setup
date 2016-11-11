const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("[name].css", {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
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
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=docs/fonts/[name].[ext]'
      }
    ]
  },
  devServer: {
    contentBase: './docs',
    hot: true,
    colors: true,
    inline: true
  }
}