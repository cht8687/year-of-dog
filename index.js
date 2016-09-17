'use strict';
module.exports = function (year) {
	year = year || new Date();
	year = year instanceof Date ? year.getFullYear() : year;
	return (year % 12 === 1);
};
