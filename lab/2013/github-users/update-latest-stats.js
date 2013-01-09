
// https://gist.github.com/2657075

var https = require('https')
var fs = require('fs')

var usernames = Object.keys(require('./github-contributions-stats.json'))
var MAX = 1000
var count = 0, step = 0
var totalCount = Math.min(usernames.length, MAX)
var latestData = {}


for(var i = 0; i < totalCount; i++) {
  var username = usernames[i]
  getUserProfile(username, function(name, html) {
    latestData[name] = {
      html: html
    }
    finish(function() {
      parseLatestData()
      saveStats()
    })
  })
}


function finish(callback) {
  if (++step === totalCount) {
    callback()
  }
}

function parseLatestData() {
  Object.keys(latestData).forEach(function(username) {
    var html = latestData[username].html
    latestData[username] = {
      'contributions': getContributions(html),
      'location': getLocation(html)
    }
  })
}

function saveStats() {
  //console.log(latestData)
  fs.writeFileSync('latest-stats.json', JSON.stringify(latestData, null, 2))
  console.log('Saved to latest-stats.json')
}


// Helpers

function getUserProfile(username, callback) {
  var url = getProfileUrl(username)
  var progress = ++count + '/' + totalCount
  console.log(progress + ' Fetching ' + url)

  https.get(url, function(res) {
    var html = ''

    res.on('data', function(d) {
      html += d
    })

    res.on('end', function() {
      console.log(progress + ' Fetched ' + url)
      callback(username, html)
    })

  }).on('error', function(e) {
        console.log(progress + ' Got error: ' + e.message)
        callback(username, 'error')
      })
}

function getProfileUrl(username) {
  return 'https://github.com/' + username
}

function getContributions(html) {
  var m = html.match(/<span class="num">([\d,]+) Total<\/span>/) || []
  return parseInt((m[1] || '').replace(/,/g, ''))
}

function getLocation(html) {
  var m = html.match(/<dd itemprop="homeLocation">(.*?)<\/dd>/)
  return m ? (m[1] || 'error') : 'error'
}
