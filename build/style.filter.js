'use strict'

const settings = require('./settings')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

let extractPlugin = new ExtractTextPlugin({
  filename: '[name].css?v=[chunkhash:8]'
})

function patchLoaders (loaders) {
  loaders.shift()
  return extractPlugin.extract({
    fallback: 'style-loader',
    use: loaders
  })
}

function isStyleRule (rule) {
  if (rule.test && rule.test.test) {
    if (rule.test.test('a.css') ||
        rule.test.test('a.scss')) {
      return true
    }
  }
  return false
}

function patchRules (rules) {
  for (let i = 0; i < rules.length; i++) {
    let rule = rules[i]
    if (isStyleRule(rule) && Array.isArray(rule.use)) {
      rules[i].use = patchLoaders(rule.use)
    }
  }
  return rules
}

function patchPlugins (plugins) {
  plugins.push(extractPlugin)
  return plugins
}

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
          if (key === 'module.rules') {
            return patchRules(a)
          }
          if (key === 'plugins') {
            return patchPlugins(a)
          }
        }
      })(config, patch)
    }
    return config
  }
}
