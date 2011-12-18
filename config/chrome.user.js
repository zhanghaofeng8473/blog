// ==UserScript==
// @name           Chrome Config
// @namespace      lifesinger
// @description	   Make Chrome better!
// @auther         lifesinger@gmail.com
// @source         http://lifesinger.github.com/config/chrome.user.js
// @include        *
// @exclude        http://localhost/*
// @exclude        http://local/*
// @exclude        http://127.0.0.1/*
// @version        1.0.0
// ==/UserScript==

(function(g, d, m, s) {
if (location.protocol === 'https:') return;
var l = 'http://localhost/~lifesinger/lifesinger.github.com/config/chrome.js?';
g[m] ? g[m]() : !d[m] && (d.getElementsByTagName('head')[0] || d.body).appendChild((d[m] = 1,s = d.createElement('script'),s.setAttribute('charset', 'utf-8'),s.id = 'lifesinger-user-script',s.src = l + Math.floor(+new Date / 10000000),s))
})(window, document, '__lifesinger');