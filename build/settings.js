'use strict'

const path = require('path')

module.exports = {
  srcPath: path.resolve(__dirname, '../src'),
  destPath: path.resolve(__dirname, '../dist'),
  staticPath: path.resolve(__dirname, '../static'),
  destName: {
    js: '[name].js?v=[hash:8]',
    css: '[name].css?v=[contenthash:8]',
    static: '[name].[ext]?v=[hash:8]'
  },
  options: {
    productionSourceMap: 'hidden-source-map',
    extractCSS: true
  }
}
