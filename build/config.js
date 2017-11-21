'use strict'

const path = require('path')

module.exports = {
  destPath: path.resolve(__dirname, '../dist'),
  targetName: '[name].js?v=[chunkhash]'
}
