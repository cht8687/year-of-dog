var yearOfDragon = require('./');
var test = require('tape');

test('it should check if a year is year of dragon', function(t) {
  t.plan(4);
  t.equal(yearOfDragon(1988), true, "1988 is year of dragon");
  t.equal(yearOfDragon(1989), false, "1989 is not year of dragon");
  t.equal(yearOfDragon(new Date(2000, 0)), true, "2000 is year of dragon");
  t.equal(typeof yearOfDragon() === 'boolean', true);
});
