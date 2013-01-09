// node converter.js

var fs = require('fs')
var stats = require('./latest-china-stats.json')

var out = '# Most active GitHub users in China\n\n'
out += 'Latest Update: ' + new Date().toGMTString() + '\n'

out += '<table cellspacing="0"><thead>'
out += '<th scope="col">Username</th>'
out += '<th scope="col">Contributions</th>'
out += '<th scope="col">Location</th>'
out += '</thead><tbody>\n'

stats.forEach(function(stat, index) {
  out += '<tr>'
  out += '<td scope="row">#' + (index + 1) + ': '
  out += '<a href="https://github.com/' + stat.username + '">' + stat.username + '</a></td>'
  out += '<td>' + stat.contributions + '</td>'
  out += '<td>' + stat.location + '</td>'
  out += '</tr>\n'
})

out += '</tbody></table>'

fs.writeFileSync('active.md', out)
console.log('Saved to active.md')

