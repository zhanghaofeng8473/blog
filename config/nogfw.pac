
const PROXY = 'PROXY localhost:8888';
const DIRECT = 'DIRECT';

var rules = [
  'google'
  ,'twitter'
  ,'youtube'
  ,'ytimg.com'
  ,'blogspot.com'
  ,'blogger.com'
  ,'appspot.com'
  ,'cloudfront.net'
  ,'t.co'
  ,'bit.ly'
  ,'j.mp'
  ,'facebook.com'
  ,'fbcdn.net'
  ,'phpied.com'
  ,'dropbox.com'
  ,'wordpress.com'
  ,'npmjs.org'
];

function FindProxyForURL(url, host) {
  if (url.indexOf('no-gfw') !== -1) {
    return PROXY;
  }
  if (url.indexOf('direct') !== -1) {
    return DIRECT;
  }

  for (var i = 0; i < rules.length; i++) {
    if (host.indexOf(rules[i]) !== -1) {
      return PROXY;
    }
  }

  return DIRECT;
}

//((function() {
  //var url = (document.querySelector('.failedUrl') || 0).innerHTML || document.querySelector('ul a').href;
  //if (url) {location.replace(url + (url.indexOf('?') === -1 ? '?' : '&') + 'no-gfw')}
//})());
