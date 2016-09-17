var yearOfSnake = require('./');
var test = require('tape');

test('it should check if a year is year of snake', function(t) {
  t.plan(4);
  t.equal(yearOfSnake(1989), true, "1989 is year of snake");
  t.equal(yearOfSnake(1990), false, "1990 is not year of snake");
  t.equal(yearOfSnake(new Date(2001, 0)), true, "2001 is year of snake");
  t.equal(typeof yearOfSnake() === 'boolean', true);
});
