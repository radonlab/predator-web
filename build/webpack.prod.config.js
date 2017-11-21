'use strict'

const config = require('./config')
const baseConfig = require('./webpack.base.config')
const webpack = require('webpack')
const merge = require('webpack-merge')

module.exports = merge(baseConfig, {
  output: {
    filename: `${config.appName}.min.js`
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
})
