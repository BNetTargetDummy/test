const Access = require('../../../../../src/access')
const DataGenerator = require('../../../../../data/data-generator')
const datagen = new DataGenerator()

class RetrieveAchievement extends Access {
  constructor (options) {
    super(options)

    this.name = 'WoWAchievement Test'
    this.description = 'Tests the WoW Community Achievement endpoint.'
  }

  pass (args) {
    return {
      result: 'PASS',
      status: args.status,
      data: args.data
    }
  }

  fail (args) {
    return {
      result: 'FAIL',
      status: args.status,
      reason: args.data.detail
    }
  }

  requestObject () {
    return {
      game: 'wow', // Achievement requests are only valid for WoW (could use datagen.game())
      type: 'achievement', // Indicates to the base class we're testing the achievements
      args: {
        id: datagen.randomNumber(),
        origin: datagen.region()
      }
    }
  }

  execute () {
    return new Promise((resolve, reject) => {
      super.executeWoWRequest(this.requestObject()).then(response => {
        switch (parseInt(response.status)) {
          case 200:
            resolve(this.pass(response))
            break

          case 403:
            resolve(this.fail(response))
            break

          default:
            console.log(response)
        }
      })
    })
  }
}

module.exports = RetrieveAchievement
