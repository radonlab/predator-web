'use strict'
const config = require('./config')

module.exports = {
  entry: './src/app.js',
  output: {
    path: config.distPath,
    filename: `${config.appName}.js`
  }
}
