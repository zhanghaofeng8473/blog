// node update-china-stats.js

var fs = require('fs')
var stats = require('./latest-stats.json')

var chinaStats = stats.filter(function(stat) {
  return isInChina(stat.location)
})

fs.writeFileSync('latest-china-stats.json', JSON.stringify(chinaStats, null, 2))
console.log('Saved to latest-china-stats.json')


// Helpers

function isInChina(location) {
  return /china/i.test(location)
}
