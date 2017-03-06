'use strict';

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var webpack = require("webpack");

// Stylelint plugin
var StyleLintPlugin = require('stylelint-webpack-plugin');

// Styles compiler plugin
var ExtractTextPlugin = require('extract-text-webpack-plugin');

require('es6-promise').polyfill();

module.exports = {

  entry: {
    dev:  './app/app.js',
    prod: './app/prod.js'
  },

  output: {
    path: './dist/',
    filename: './js/[name]-bundle.js'
  },

  plugins: [
    // Specify the resulting CSS filename
    new ExtractTextPlugin('stylesheets/[name].css'),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      lintDirtyModulesOnly: 'true'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
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
      {
        test: /\.md$/,
        loaders: [
          'html',
          'markdown'
        ]
      },
      {
        test: /[\/\\]app[\/\\]js[\/\\]bootstrap-carousel\.js$/,
        loader: "imports-loader?this=>window"
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
      'Edge >= 12',
      '> 5%'
      ]
    })
  ],

  // Colored output
  stats: {
    colors: true
  },

  // Create Sourcemaps for the bundle
  devtool: 'source-map',

  // Keep proccess running
  watch: true
};
