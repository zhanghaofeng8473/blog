// ==UserScript==
// @name             User Script for WeiXin
// @namespace        lifesinger
// @description      Do boring things automatically, and free your fingers.
// @author           lifesinger@gmail.com
// @source           http://lifesinger.github.com/config/weixin.user.js
// @match            http://mp.weixin.qq.com/mp/appmsg/*
// @version          1.0.0
// ==/UserScript==

(function() {

  // Hide unwanted things
  importStyle(
      '.page-bizinfo, .page-content { width: 600px; margin: 0 auto!important }'
  )


  // Helpers

  function importStyle(cssText) {
    var element = document.createElement('style')
    element.appendChild(document.createTextNode(cssText))
    document.head.appendChild(element)
  }

})()
