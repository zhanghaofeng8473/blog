
var util = require('./util')
var stats = {}

util.getPages(getSearchUrls(99, 'followers%3A%3E0'), parseUsersStats, function() {
  util.saveStats('github-users-stats.json', stats)

  stats = {}
  util.getPages(getSearchUrls(99, 'location%3Achina'), parseUsersStats, function() {
    util.saveStats('github-users-stats-china.json', stats)
  })
})


function getSearchUrls(max, q) {
  var urls = []
  for (var i = 0; i < max; i++) {
    urls[i] = 'https://github.com/search?q=' + q + '&p='
        + (i + 1) + '&ref=searchbar&type=Users'
  }
  return urls
}


function parseUsersStats(html) {
  var m = html.match(/<div class="results">([\s\S]+?)<\/div>\s*<div class="pagination">/)
  if (!m || !m[1]) return

  m[1].split('class="result"').forEach(function(partial) {
    var username = parseField(/<a href="\/.+?">(.+?)<\/a>/, partial)
    if (username) {
      stats[username] = {
        'username': username,
        'aka': parseField(/<span class="aka"> - (.*)?<\/span>/, partial),
        'email': parseField(/<span class="email">\((.*)?\)<\/span>/, partial),
        'gravatar': parseField(/<img height="30" src="(.*?)"/, partial),
        'followers': parseNum(parseField(/([\d,]*) followers/, partial)),
        'repositories': parseNum(parseField(/([\d,]*) repositories/, partial)),
        'location': parseField(/located in (.*?)\s*<\/div>/, partial) || 'Unknown',
        'language': parseField(/repositories([\s\S]+)located/, partial)
            .replace(/<\/?span>/g, '').replace(/[\s|]/g, '').trim()
      }
    }
  })

}


function parseField(regex, html) {
  var m = html.match(regex) || []
  return m[1] || ''
}


function parseNum(string) {
  return parseInt(string.replace(/,/g, '')) || 0
}

