var HtmlWebpackPlugin = require('html-webpack-plugin');

// Stylelint plugin
var StyleLintPlugin = require('stylelint-webpack-plugin');

// Styles compiler plugin
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './app/js/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: "./js/script.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin('./css/garbaui.css', {
      allChunks: true
    }),
  ],
  watch: true
};
