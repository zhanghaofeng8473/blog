define(function(require, exports) {

  exports.A = require('./a')
  exports.B = require('./b')
  exports.C = require('./c')


  print('The exports of init.js is:')
  print('exports.A.filename = ' + exports.A.filename)
  print('exports.B.filename = ' + exports.B.filename)
  print('exports.C.filename = ' + exports.C.filename)


  function print(message) {
    var out = document.getElementById('out')

    var line = document.createElement('p')
    line.appendChild(document.createTextNode(message))

    out.appendChild(line)
  }

})