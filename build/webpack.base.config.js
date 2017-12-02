'use strict'

const settings = require('./settings')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    predator: ['./src/app.js', './src/index.scss'],
    vendor: ['react', 'react-dom', 'axios']
  },
  output: {
    path: settings.destPath,
    filename: settings.destName.js
  },
  resolve: {
    alias: {
      '@': settings.srcPath,
      'static': settings.staticPath
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      template: './template/index.html'
    }),
    new CopyWebpackPlugin([{
      from: './static'
    }])
  ]
}
