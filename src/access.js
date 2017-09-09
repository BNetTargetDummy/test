const Base = require('./base')

class Access extends Base {
  constructor (options) {
    super(options)

    this.name = 'API Access Test'
    this.description = 'For testing access to the Battle.net API.'
  }
}

module.exports = Access
