'use strict'
const config = require('./config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: config.distPath,
    filename: `${config.appName}.js`
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template/index.html'
    })
  ]
}
