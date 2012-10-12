// ==UserScript==
// @name             Ali User Script
// @namespace        lifesinger
// @description      Do boring things automatically, and free your fingers.
// @author           lifesinger@gmail.com
// @source           http://lifesinger.github.com/config/ali.user.js
// @install          http://lifesinger.github.com/config/ali.user.js
// @match            http://*.alipay-inc.com/*
// @version          1.0.0
// ==/UserScript==

(function() {

  var $ = document.querySelector
  var pageUrl = location.href

  // Remove the restriction for meeting system.
  if (pageUrl.indexOf('MeetingRoomBookingEdit.aspx') > 0) {
    var comments = $('#ctl00_ContentPlaceHolder1_tb_comments')
    comments.value = '团队开会'

    var submit = $('#ctl00_ContentPlaceHolder1_btn_booking')
    submit.onclick = null
    submit.value += '无忧'
  }

})()
