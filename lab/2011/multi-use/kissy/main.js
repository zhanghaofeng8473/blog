
KISSY.add(function(S, test) {

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

}, { requires: ['test'] });
