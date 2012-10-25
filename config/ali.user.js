// ==UserScript==
// @name             User Script for Alipay
// @namespace        lifesinger
// @description      Do boring things automatically, and free your fingers.
// @author           lifesinger@gmail.com
// @source           http://lifesinger.github.com/config/ali.user.js
// @match            http://*.alipay-inc.com/*
// @version          1.0.1
// ==/UserScript==

(function() {

  var pageUrl = location.href

  // Remove the restriction for meeting system.
  if (pageUrl.indexOf('MeetingRoomBookingEdit.aspx') > 0) {
    var submit = $('#ctl00_ContentPlaceHolder1_btn_booking')
    submit.onclick = null
    submit.value += '无忧'

    var dialog = $('#ctl00_ContentPlaceHolder1_dialog')
    if (dialog.style.display === 'block') {
      location.href = '/MyBooking.aspx'
    }
  }


  // Helpers

  function $(selector) {
    return document.querySelector(selector)
  }

})()
