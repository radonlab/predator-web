'use strict'

const config = require('./config')
const baseConfig = require('./webpack.base.config')
const webpack = require('webpack')
const merge = require('webpack-merge')

module.exports = merge(baseConfig, {
  output: {
    filename: config.targetName
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
})
