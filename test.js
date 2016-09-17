var yearOfRooster = require('./');
var test = require('tape');

test('it should check if a year is year of rooster', function(t) {
  t.plan(4);
  t.equal(yearOfRooster(1992), true, "1992 is year of rooster");
  t.equal(yearOfRooster(1993), false, "1993 is not year of rooster");
  t.equal(yearOfRooster(new Date(2005, 0)), true, "2003 is year of rooster");
  t.equal(typeof yearOfRooster() === 'boolean', true);
});
