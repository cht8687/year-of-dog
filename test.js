var yearOfRooster = require('./');
var test = require('tape');

test('it should check if a year is year of rooster', function(t) {
  t.plan(4);
  t.equal(yearOfRooster(1994), true, "1994 is year of rooster");
  t.equal(yearOfRooster(1995), false, "1995 is not year of rooster");
  t.equal(yearOfRooster(new Date(2006, 0)), true, "2005 is year of rooster");
  t.equal(typeof yearOfRooster() === 'boolean', true);
});
