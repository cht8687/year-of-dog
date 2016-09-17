var yearOfHorse = require('./');
var test = require('tape');

test('it should check if a year is year of horse', function(t) {
  t.plan(4);
  t.equal(yearOfHorse(1990), true, "1990 is year of horse");
  t.equal(yearOfHorse(1991), false, "1991 is not year of horse");
  t.equal(yearOfHorse(new Date(2002, 0)), true, "2002 is year of horse");
  t.equal(typeof yearOfHorse() === 'boolean', true);
});
