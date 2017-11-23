'use strict'

const settings = require('./settings')
const style = require('./style.filter')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let baseConfig = {
  entry: {
    predator: ['./src/app.js', './src/index.scss'],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: settings.destPath,
    filename: settings.targetName
  },
  resolve: {
    alias: {
      '@': settings.srcPath
    }
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

baseConfig = style.filter(baseConfig)

module.exports = baseConfig
