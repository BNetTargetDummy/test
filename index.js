/**
 * config.json =
 * {
 *   apikey: 'supersecret'
 * }
 */
const config = require('./config.json')

const AchievementTest = require('./tests/access/community/wow/achievements/retrieve-achievement')
const test = new AchievementTest({apikey: config.apikey})

test.execute().then(response => console.log(response))
