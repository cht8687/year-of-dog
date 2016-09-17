var yearOfDog = require('./');
var test = require('tape');

test('it should check if a year is year of dog', function(t) {
  t.plan(4);
  t.equal(yearOfDog(1994), true, "1994 is year of dog");
  t.equal(yearOfDog(1995), false, "1995 is not year of dog");
  t.equal(yearOfDog(new Date(2006, 0)), true, "2005 is year of dog");
  t.equal(typeof yearOfDog() === 'boolean', true);
});
