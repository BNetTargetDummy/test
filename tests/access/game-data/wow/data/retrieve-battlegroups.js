const Access = require('../../../../../src/access')

class Battlegroups extends Access {
  constructor (options) {
    super(options)

    this.name = 'WoW Battlegroups Access'
    this.description = 'Verifies access to the WoW Game Data Battlegroups endpoint.'
  }
}

module.exports = Battlegroups
