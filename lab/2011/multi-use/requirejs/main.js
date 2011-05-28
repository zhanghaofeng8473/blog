
define(['http://seajs.com/test/test.js'], function(test) {

  function echo(msg) {
    test.print(msg);
  }

  function done() {
    test.done();
  }

  echo('main.js is loaded.');

  return {
    echo: echo,
    done: done
  }

});
