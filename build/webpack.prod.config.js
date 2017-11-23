'use strict'

const settings = require('./settings')
const baseConfig = require('./webpack.base.config')
const loaders = require('./loaders')
const webpack = require('webpack')
const merge = require('webpack-merge')

module.exports = merge(baseConfig, {
  output: {
    filename: settings.targetName
  },
  module: {
    rules: loaders.get('production')
  },
  devtool: settings.options.productionSourceMap,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: settings.options.productionSourceMap
    })
  ]
})
