// ==UserScript==
// @name             User Script for Development
// @namespace        lifesinger
// @description      Do boring things automatically, and free your fingers.
// @author           lifesinger@gmail.com
// @source           http://lifesinger.github.com/config/dev.user.js
// @match            file://localhost/Users/lifesinger/Sites/*
// @version          1.0.2
// ==/UserScript==

(function() {
  var href = location.href

  if (href.indexOf('?file') === -1) {
    location.href = href.replace('file://localhost/Users/lifesinger/Sites/', 'http://localhost/~lifesinger/')
  }
})()
