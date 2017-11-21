'use strict'

const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')

module.exports = merge(baseConfig, {
  devServer: {
    port: 8090
  }
})
