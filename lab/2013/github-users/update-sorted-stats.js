
var util = require('./util')
var MAX_CONTRIBUTIONS = 20000

sortStats('./github-users-stats.json', 'github-users-sorted-stats.json')
sortStats('./github-users-stats-china.json', 'github-users-sorted-stats-china.json')


function sortStats(filename, outfile) {
  var stats = require(filename)
  var cache = {}
  var sortedStats = []

  Object.keys(stats).forEach(function(username) {
    var stat = stats[username]
    var contributions = stat.contributions

    if (contributions > 0) {
      cache[contributions] = cache[contributions] || []
      cache[contributions].push(stat)
    }
  })

  for (var i = MAX_CONTRIBUTIONS; i >= 0; i--) {
    if (cache[i]) {
      sortedStats = sortedStats.concat(cache[i])
    }
  }

  util.saveStats(outfile, sortedStats)
}

