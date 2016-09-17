var yearOfSheep = require('./');
var test = require('tape');

test('it should check if a year is year of sheep', function(t) {
  t.plan(4);
  t.equal(yearOfSheep(1991), true, "1991 is year of sheep");
  t.equal(yearOfSheep(1992), false, "1992 is not year of sheep");
  t.equal(yearOfSheep(new Date(2003, 0)), true, "2003 is year of sheep");
  t.equal(typeof yearOfSheep() === 'boolean', true);
});
