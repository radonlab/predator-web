'use strict'

const chalk = require('chalk')

function error (msg) {
  console.log(chalk.bold('[filters] ') + chalk.red(msg))
}

function loadFilter (name) {
  try {
    return require(`./${name}.filter`)
  } catch (e) {
    return null
  }
}

function applyFilters (config) {
  return function (filterNames) {
    for (var i = 0; i < filterNames.length; i++) {
      let name = filterNames[i]
      let filter = loadFilter(name)
      if (filter && typeof filter === 'function') {
        config = filter.filter(config)
      } else {
        throw new Error('Failed to apply filter: ' + name)
      }
    }
    return config
  }
}

module.exports = applyFilters
