const Access = require('../../../../../src/access')

class ConnectedRealms extends Access {
  constructor (options) {
    super(options)

    this.name = 'WoW Connected Realms Access'
    this.description = 'Verifies access to the WoW Game Data Connected Realms endpoint.'
  }
}

module.exports = ConnectedRealms
