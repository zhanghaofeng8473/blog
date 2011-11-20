/* chrome user script by lifesinger@gmail.com */

(function() {

  var host = location.host;

  function better() {

    if (~host.indexOf('google.com')) {

      // no Google+ notification
      var gbi1 = document.getElementById('gbi1');
      if (gbi1) {
        gbi1.className = '';
      }

      // no Ads
      [].forEach.call(document.querySelectorAll('.adC'), function(container) {
        container.style.display = 'none';
      });

      // no search header in google calendar
      if (~location.pathname.indexOf('/calendar/')) {
        var vrHeader = document.getElementById('vr-header');
        if (vrHeader) vrHeader.style.display = 'none';
     }

    }
    else if (~host.indexOf('weibo.com')) {

      // no pullylist
      var pullylist = document.getElementById('pl_content_pullylist');
      if (pullylist) pullylist.style.display = 'none';

    }

  }

  window.addEventListener('DOMContentLoaded', better, false);
})();
