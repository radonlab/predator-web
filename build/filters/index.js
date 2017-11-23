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

/**
 * Apply filters to webpack config object
 * @param {object} config - config object
 * @returns {function} - a function accepting the names of filters
 */
function applyFilters (config) {
  return function (filterNames) {
    try {
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
    } catch (e) {
      error(e.toString())
      process.exit(1)
    }
  }
}

module.exports = applyFilters
