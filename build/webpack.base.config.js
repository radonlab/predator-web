'use strict'

const config = require('./config')
const style = require('./style.filter')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
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
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
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

config = style.filter(config)

module.exports = config
