
define(function(require) {

  var test = require('./test.js.php#');

  function echo(n) {
    test.assert(true, 'It works! ' + n);
  }

  function done() {
    test.done();
  }

  echo(0);

  return {
    echo: echo,
    done: done
  }

});
