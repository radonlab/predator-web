'use strict'

const settings = require('./settings')
module.exports = {
  filter (config) {
    if (settings.options.extractCSS) {
    }
    return config
  }
}
