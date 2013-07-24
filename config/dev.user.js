// ==UserScript==
// @name             User Script for Development
// @namespace        lifesinger
// @description      Do boring things automatically, and free your fingers.
// @author           lifesinger@gmail.com
// @match            file://*/*
// @version          1.0.13
// ==/UserScript==

(function(href) {
  if (href.indexOf('file:///Users/lifesinger/Sites/') === 0) {
    location.href = href.replace(
        'file:///Users/lifesinger/Sites/',
        'http://localhost/~lifesinger/')
  }
})(location.href)
