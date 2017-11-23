'use strict'

function get (env) {
  return [
    {
      test: /\.js$/,
      use: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    }
  ]
}

module.exports = {
  get: get
}
