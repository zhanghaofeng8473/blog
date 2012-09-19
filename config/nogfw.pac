
const DIRECT = 'DIRECT'

const PROXY = 'PROXY 127.0.0.1:1984' // PUFF
//const PROXY = 'PROXY 127.0.0.1:8888' // OOW

var rules = [
  'google'
  //,'github.com'
  ,'gstatic.com'
  ,'gravatar.com'
  ,'pinterest.com'
  ,'python.org'
  ,'twitter'
  ,'twimg'
  ,'youtube'
  ,'ytimg.com'
  ,'blogspot.com'
  ,'blogger.com'
  ,'appspot.com'
  ,'cloudfront.net'
  ,'goo.gl'
  ,'t.co'
  ,'cl.ly'
  ,'bit.ly'
  ,'j.mp'
  ,'facebook.com'
  ,'fbcdn.net'
  ,'fbcdn.net'
  ,'phpied.com'
  ,'dropbox.com'
  ,'wordpress.com'
  ,'npmjs.org'
  ,'nodejs.org'
  ,'lesscss.org'
  ,'quora.com'
  ,'wikipedia.org'
  ,'snip.it'
  ,'mashable.com'
  ,'speakerdeck.com'
  ,'phabricator.org'
  ,'speakerdeck.org'
  ,'kissyui.com'
  ,'jqmobi.com',
  ,'zeptojs.com'
  ,'.aculo.us'
  ,'.name.com'
  ,'xbeta.info'
  ,'slideshare'
]

function FindProxyForURL(url, host) {

  if (url.indexOf('no-gfw') > 0) {
    return PROXY
  }

  if (url.indexOf('direct') > 0) {
    return DIRECT
  }

  for (var i = 0; i < rules.length; i++) {
    if (host.indexOf(rules[i]) > -1) {
      return PROXY
    }
  }

  return DIRECT
}
