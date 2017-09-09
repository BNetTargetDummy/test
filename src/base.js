let blizzard

class Base {
  constructor (options) {
    if (options.name !== undefined) this.name = options.name
    else this.name = ''

    if (options.description !== undefined) this.description = options.description
    else this.description = ''

    if (options.path !== undefined) this.path = options.path
    else this.path = ''

    if (options.onPreExecute !== undefined) this.onPreExecute = options.onPreExecute
    else this.onPreExecute = function () {}

    if (options.onExecute !== undefined) this.onExecute = options.onExecute
    else this.onExecute = function () {}

    if (options.onPostExecute !== undefined) this.onPostExecute = options.onPostExecute
    else this.onPostExecute = function () {}

    if (options.apikey !== undefined) this.apikey = options.apikey
    else this.apikey = ''

    if (options.region !== undefined) this.region = options.region
    else this.region = ''

    blizzard = require('blizzard.js').initialize({apikey: this.apikey})
  }

  executeWoWRequest (request) {
    return new Promise((resolve, reject) => {
      switch (request.type) {
        case 'achievement':
          blizzard.wow.achievement(request.args)
            .then(response => resolve(response))
            .catch(err => resolve(err.response))
          break
      }
    })
  }
}

module.exports = Base
