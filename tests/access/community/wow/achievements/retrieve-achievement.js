const Access = require('../../../../../src/access')

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
      game: 'wow',
      type: 'achievement',
      args: {
        id: 2144,
        origin: 'us'
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
