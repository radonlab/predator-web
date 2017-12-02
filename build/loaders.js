'use strict'

function cssLoader (env) {
  return {
    loader: 'css-loader',
    options: {
      minimize: env === 'production'
    }
  }
}

function urlLoader (env) {
  return {
    loader: 'url-loader',
    options: {
      name: '[path][name].[ext]?v=[hash:8]',
      limit: 1024 * 8
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
    },
    {
      test: /\.(jpg|png|svg)$/,
      use: [urlLoader(env)]
    }
  ]
}

module.exports = {
  get: get
}
