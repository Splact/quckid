var quickid = require('..');

var i = 0;
while (i++ < 20) {
  console.log(quickid.generate(i));
}