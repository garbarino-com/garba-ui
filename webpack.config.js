'use strict';

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

// Stylelint plugin
var StyleLintPlugin = require('stylelint-webpack-plugin');

// Styles compiler plugin
var ExtractTextPlugin = require('extract-text-webpack-plugin');

require('es6-promise').polyfill();

module.exports = {
  entry: './app/index.js',

  output: {
    path: __dirname,
    filename: 'app/app.js'
  },

  plugins: [
    // Specify the resulting CSS filename
    new ExtractTextPlugin('css/garbaui.css')
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
        test: /\.(png|woff|woff2|ttf|eot|svg)(\?[a-z0-9]+)?$/,
        loader: "file-loader"
      },
      {
        test: /\.md$/,
        loaders: [
          'html',
          'markdown'
        ]
      }
    ]
  },

  postcss: [
    autoprefixer({
      browsers: [
      'last 2 versions',
      'IE >= 8',
      'Android >= 4',
      'iOS >= 8',
      'Chrome >= 40',
      'Firefox >= 38',
      'Safari >= 6',
      'Edge >= 12'
      ]
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
