
const PROXY = 'PROXY localhost:8888';

var rules = [
  'google.com'
  ,'twitter.com'
  ,'blogspot.com'
  ,'appspot.com'
  ,'cloudfront.net'
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

// javascript:void((function(){var url=(document.getElementsByClassName('failedUrl')[0]||0).innerHTML;if(url){location.replace(url+(url.indexOf('?')===-1?'?':'&')+'no-gfw')}})());
