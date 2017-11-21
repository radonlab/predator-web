'use strict'

const config = require('./config')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    predator: './src/app.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    path: config.destPath,
    filename: config.targetName
  },
  resolve: {
    alias: {
      '@': config.srcPath
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      template: './template/index.html'
    })
  ]
}
