
var fs = require('fs')

stats2markdown('./github-users-sorted-stats.json', 'github-users.md', 'Most active GitHub users')
stats2markdown('./github-users-sorted-stats-china.json', 'github-users-china.md', 'Most active GitHub users in China')


function stats2markdown(datafile, mdfile, title) {
  var stats = require(datafile)

  var out = '# ' + title + '\n\n'
  out += 'Latest Update: ' + new Date().toGMTString() + '\n'

  out += '<table cellspacing="0"><thead>'
  out += '<th scope="col">#</th>'
  out += '<th scope="col">Username</th>'
  out += '<th scope="col">Contributions</th>'
  out += '<th scope="col">Language</th>'
  out += '<th scope="col">Location</th>'
  out += '<th scope="col">Gravatar</th>'
  out += '</thead><tbody>\n'

  stats.forEach(function(stat, index) {
    out += '<tr>'
    out += '<th scope="row">#' + (index + 1) + '</th>'
    out += '<td><a href="https://github.com/' + stat.username + '">' + stat.username + '</a>( ' + stat.aka + ' )</td>'
    out += '<td>' + stat.contributions + '</td>'
    out += '<td>' + stat.language + '</td>'
    out += '<td>' + stat.location + '</td>'
    out += '<td><img width="30" height="30" src="' + stat.gravatar + '"></td>'
    out += '</tr>\n'
  })

  out += '</tbody></table>'

  fs.writeFileSync(mdfile, out)
  console.log('Saved to ' + mdfile)
}

