'use strict'

const baseConfig = require('./webpack.base.config')
const loaders = require('./loaders')
const filters = require('./filters')
const webpack = require('webpack')
const merge = require('webpack-merge')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = filters(merge(baseConfig, {
  module: {
    rules: loaders.get('development')
  },
  devtool: 'eval-source-map',
  devServer: {
    https: true,
    host: 'localhost',
    port: 8090,
    hot: true
  },
  plugins: [
    new DashboardPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}))(['style'])
