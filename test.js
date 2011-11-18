

var A = ['a1', 'a2', 'a3'];
var B = ['b1', 'b2'];
var C = ['c1', 'c2', 'c3', 'c4', 'c5'];


function combo(a, b) {
  var ret = [];
  var n = a.length;
  var m = b.length;

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      ret.push(a[i] + '_' + b[j]);
    }
  }

  return ret;
}


console.log(combo(A, combo(B, C)));
