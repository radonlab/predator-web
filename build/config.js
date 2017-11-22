'use strict'

const path = require('path')

module.exports = {
  srcPath: path.resolve(__dirname, '../src'),
  destPath: path.resolve(__dirname, '../dist'),
  targetName: '[name].js?v=[chunkhash:8]',
  options: {
    extractCSS: false
  }
}
