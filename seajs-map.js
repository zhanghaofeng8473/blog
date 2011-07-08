
define(function() {

  var rules = [];


  // markzhi
  rules.push([
    'http://markzhi.com/assets/',
    'http://localhost/~lifesinger/markzhi/portal/src/main/webapp/assets/'
  ]);

  // rms
  rules.push([
    'http://assets.taobaocdn.com/apps/tms/rms/',
    'http://localhost/~lifesinger/svn/apps/tms/rms/'
  ]);


  // map rules
  seajs.config({'map': rules});

});
