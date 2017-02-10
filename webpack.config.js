'use strict';

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Stylelint plugin
var StyleLintPlugin = require('stylelint-webpack-plugin');

// Styles compiler plugin
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// Post CSS
var autoprefixer = require('autoprefixer');

require('es6-promise').polyfill();

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './app/index.js'
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
        test: /\.css$/,
        loaders: [
          'style',
          'css'
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      ,{
        test: /\.md$/,
        loaders: [
          'html',
          'markdown'
        ]
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
    // Specify the resulting CSS filename
    new ExtractTextPlugin('./css/garbaui.css', {
      allChunks: true
    }),
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  stats: {
    // Colored output
    colors: true
  },

  // Create Sourcemaps for the bundle
  devtool: 'source-map',

  // Keep proccess running
  watch: true
};
