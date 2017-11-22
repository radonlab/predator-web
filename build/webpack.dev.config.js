'use strict'

const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = merge(baseConfig, {
  devtool: 'eval-source-map',
  devServer: {
    port: 8090
  },
  plugins: [
    new DashboardPlugin()
  ]
})
