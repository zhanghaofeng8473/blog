
const DIRECT = 'DIRECT'

const PROXY = 'PROXY 127.0.0.1:1984' // PUFF
//const PROXY = 'PROXY 127.0.0.1:8888' // OOW

var rules = [
  ///(\w+\.){1,2}github\.com/,
  //'seajs.org',

  'google.com',
//  'github.com',
  'dropbox.com',

  'youtube',
  'ytimg.com',
  'vimeo',
  'slideshare',

  'facebook.com',
  'fbcdn.net',
  'twitter',
  'twimg',
  'wordpress.com',
  'blogspot.com',
  'blogger.com',
  'appspot.com',

  't.co',
  'cl.ly',
  'bit.ly',
  'j.mp',

  'lesscss.org'
]

function FindProxyForURL(url, host) {

  if (url.indexOf('no-gfw') > 0) {
    return PROXY
  }

  if (url.indexOf('direct') > 0) {
    return DIRECT
  }

  for (var i = 0; i < rules.length; i++) {
    var rule = rules[i]
    if (typeof rule === 'string' && host.indexOf(rule) > -1 ||
        rule.test(host)) {
      return PROXY
    }
  }

  return DIRECT
}
