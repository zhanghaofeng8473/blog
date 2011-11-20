/* chrome user script by lifesinger@gmail.com */

(function() {

  var host = location.host;

  var fns = {

    'google.com': function() {
      // no Google+ notifications
      hideIfExists('#gbi1');

      // no Ads
      [].forEach.call(document.querySelectorAll('.adC'), function(adC) {
        hideIfExists(adC);
      });

      // no search header in google calendar
      if (~location.pathname.indexOf('/calendar/')) {
        hideIfExists('#vr-header');
      }
    },

    'weibo.com': function() {
      // no pullylist
      hideIfExists('#pl_content_pullylist');
    },

    'github.com': function() {
      // no notifications
      hideIfExists('#header .notifications_count');
    }
  };


  function hideIfExists(o) {
    var elem;

    if (typeof o === 'string') {
      elem = document.querySelector(o);
    }
    else if (o.nodeType === 1) {
      elem = o;
    }

    if (elem) {
      elem.style.display = 'none';
    }
  }


  function run() {
    Object.keys(fns).some(function(key) {
      if (~host.indexOf(key)) {
        fns[key]();
        return true;
      }
    });
  }


  // run immediately
  run();

  // register for dom ready
  window.addEventListener('DOMContentLoaded', run, false);

})();
