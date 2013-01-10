
var fs = require('fs')
var https = require('https')


exports.getPages = function(urls, stepCallback, finalCallback) {
  var totalCount = urls.length
  var fetchedCount = 0

  urls.forEach(function(url) {
    getUrl(url, function(html) {
      stepCallback(html, url)

      if (fetchedCount === totalCount) {
        finalCallback()
      }
    })
  })

  function getUrl(url, callback) {
    console.log('  Fetching ' + url)

    https.get(url, function(res) {
      var html = ''
      res.on('data', function(data) {
        html += data
      })

      res.on('end', function() {
        console.log('  ' + ++fetchedCount + '/' + totalCount
            + ' Fetched ' + url)
        callback(html)
      })

    }).on('error', function(e) {
          console.log('Got error: ' + e.message)
          process.exit(1)
        })

  }
}


exports.saveStats = function(filename, stats) {
  fs.writeFileSync(filename, JSON.stringify(stats, null, 2))
  console.log('  Saved to ' + filename)
}
