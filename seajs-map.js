
define(function() {

  var rules = [];


  // markzhi
  rules.push([
    'http://markzhi.net/assets/',
    'http://localhost/~lifesinger/markzhi/portal/src/main/webapp/assets/'
  ]);

  // rms
  rules.push([
    'http://assets.daily.taobao.net/apps/tms/rms/',
    'http://localhost/~lifesinger/svn/apps/tms/rms/'
  ]);


  // map rules
  seajs.config({'map': rules});

});