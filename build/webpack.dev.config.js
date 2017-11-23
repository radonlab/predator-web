'use strict'

const baseConfig = require('./webpack.base.config')
const webpack = require('webpack')
const merge = require('webpack-merge')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = merge(baseConfig, {
  devtool: 'eval-source-map',
  devServer: {
    port: 8090,
    hot: true
  },
  plugins: [
    new DashboardPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
