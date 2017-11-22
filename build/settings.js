'use strict'

const path = require('path')

module.exports = {
  srcPath: path.resolve(__dirname, '../src'),
  destPath: path.resolve(__dirname, '../dist'),
  targetName: '[name].js?v=[hash:8]',
  options: {
    productionSourceMap: 'hidden-source-map',
    extractCSS: false
  }
}
