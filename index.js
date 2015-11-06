'use strict';

module.exports = {
  generate: function(b, minSize, uc) {

    minSize = minSize || 4;
    uc = uc || true;

    // 0123456789ABCDEFGHIJKLMNOPQRSTUV
    var s = b.toString(32);

    while (s.length < minSize) s = '0' + s;

    // replace 10IO with WXYZ
    s = s.replace(/1/g, 'w');
    s = s.replace(/0/g, 'x');
    s = s.replace(/i/g, 'y');
    s = s.replace(/o/g, 'z');

    if (uc)
      s = s.toUpperCase();

    return s;
  }
}