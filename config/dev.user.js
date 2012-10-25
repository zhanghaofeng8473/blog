// ==UserScript==
// @name             User Script for Development
// @namespace        lifesinger
// @description      Do boring things automatically, and free your fingers.
// @author           lifesinger@gmail.com
// @source           http://lifesinger.github.com/config/dev.user.js
// @match            file://localhost/Users/lifesinger/Sites/*
// @version          1.0.1
// ==/UserScript==

(function() {

  location.href = location.href.replace('file://localhost/Users/lifesinger/Sites/', 'http://localhost/~lifesinger/')

})()
