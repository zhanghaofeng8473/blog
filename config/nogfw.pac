
const PROXY = 'PROXY localhost:8888';

var rules = [
  'google'
  ,'twitter'
  ,'blogspot.com'
  ,'blogger.com'
  ,'appspot.com'
  ,'cloudfront.net'
  ,'t.co'
  ,'facebook.com'
  ,'fbcdn.net'
  ,'phpied.com'
  ,'dropbox.com'
];

function FindProxyForURL(url, host) {
  if (url.indexOf('no-gfw') !== -1) {
    return PROXY;
  }

  for (var i = 0; i < rules.length; i++) {
    if (host.indexOf(rules[i]) !== -1) {
      return PROXY;
    }
  }

  return 'DIRECT';
}

//((function() {
  //var url = (document.querySelector('.failedUrl') || 0).innerHTML || document.querySelector('ul a').href;
  //if (url) {location.replace(url + (url.indexOf('?') === -1 ? '?' : '&') + 'no-gfw')}
//})());
