// node update-latest-stats.js

var https = require('https')
var fs = require('fs')

// from https://gist.github.com/2657075
var usernames = Object.keys(require('./github-contributions-stats.json'))

var MAX_USERS = 1000, MAX_CONTRIBUTIONS = 10000
var count = 0, step = 0
var totalCount = Math.min(usernames.length, MAX_USERS)
var data = {}
var latestStats = []

for(var i = 0; i < totalCount; i++) {
  getUserProfile(usernames[i], function(username, html) {
    var contributions = getContributions(html)
    var location = getLocation(html)

    data[contributions] = data[contributions] || []

    data[contributions].push({
      'username': username,
      'contributions': contributions,
      'location': location
    })

    finish(updateLatestStats)
  })
}

function finish(callback) {
  if (++step === totalCount) {
    callback()
  }
}

function updateLatestStats() {
  for(var i = MAX_CONTRIBUTIONS; i >= 0; i--) {
    var item = data[i]
    if (item) {
      latestStats = latestStats.concat(item)
    }
  }

  fs.writeFileSync('latest-stats.json', JSON.stringify(latestStats, null, 2))
  console.log('Saved to latest-stats.json')
}


// Helpers

function getUserProfile(username, callback) {
  var url = getProfileUrl(username)
  console.log('Fetching ' + url)

  https.get(url, function(res) {
    var html = ''

    res.on('data', function(d) {
      html += d
    })

    res.on('end', function() {
      console.log(++count + '/' + totalCount + ' Fetched ' + url)
      callback(username, html)
    })

  }).on('error', function(e) {
        console.log(++count + '/' + totalCount + ' Got error: ' + e.message)
        callback(username, 'error')
      })
}

function getProfileUrl(username) {
  return 'https://github.com/' + username
}

function getContributions(html) {
  var m = html.match(/<span class="num">([\d,]+) Total<\/span>/) || []
  return parseInt((m[1] || '').replace(/,/g, '')) || 0
}

function getLocation(html) {
  var m = html.match(/<dd itemprop="homeLocation">(.*?)<\/dd>/) || []
  return m[1] || 'Unknown'
}
