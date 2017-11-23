'use strict'

function cssLoader (env) {
  return {
    loader: 'css-loader',
    options: {
      minimize: env === 'production'
    }
  }
}

function get (env) {
  return [
    {
      test: /\.js$/,
      use: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: ['style-loader', cssLoader(env), 'postcss-loader']
    },
    {
      test: /\.scss$/,
      use: ['style-loader', cssLoader(env), 'postcss-loader', 'sass-loader']
    }
  ]
}

module.exports = {
  get: get
}
