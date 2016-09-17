var yearOfMonkey = require('./');
var test = require('tape');

test('it should check if a year is year of monkey', function(t) {
  t.plan(4);
  t.equal(yearOfMonkey(1992), true, "1991 is year of monkey");
  t.equal(yearOfMonkey(1993), false, "1992 is not year of monkey");
  t.equal(yearOfMonkey(new Date(2004, 0)), true, "2003 is year of monkey");
  t.equal(typeof yearOfMonkey() === 'boolean', true);
});
