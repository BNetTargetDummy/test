const data = require('./test-data.json')

/**
 * Used by the TargetDummy team to generate random data for testing the
 * Battle.net API.
 */
class DataGenerator {
  constructor (options) {
    this.options = options || {}
  }

  /**
   * Returns a random region usable by the Battle.net API.
   */
  region () {
    return data.regions[this.randomNumber(0, data.regions.length)]
  }

  /**
   * Returns a random game usable by the Battle.net API.
   */
  game () {
    return data.games[this.randomNumber(0, data.games.length)]
  }

  /**
   * Returns a random number using the provided values as the minimum
   * (inclusive) and maximum (exclusive). If no (or invalid) values
   * are provided, 0 and 100,000 are used respectively.
   *
   * @param {number} min
   * @param {number} max
   *
   * @returns {number}
   */
  randomNumber (min, max) {
    if (isNaN(min)) min = 0
    if (isNaN(max)) max = 100000

    return Math.floor(Math.random() * (max - min) + min)
  }
}

module.exports = DataGenerator
