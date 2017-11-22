'use strict'

const settings = require('./settings')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

let patch = {
  module: {
    rules: []
  },
  plugins: []
}

module.exports = {
  filter (config) {
    if (settings.options.extractCSS) {
      config = merge({
        customizeArray (a, b, key) {
        }
      })(config, patch)
    }
    return config
  }
}
