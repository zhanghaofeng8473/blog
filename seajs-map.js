
define(function() {

  var rules = [];


  // markzhi
  rules.push([
    'http://markzhi.com/assets/',
    'http://localhost/~lifesinger/markzhi/portal/src/main/webapp/assets/'
  ]);

  // tms
  rules.push([
    'http://assets.taobaocdn.com/apps/tms/',
    'http://localhost/~lifesinger/svn/apps/tms/'
  ]);


  // map rules
  seajs.config({'map': rules});

});
