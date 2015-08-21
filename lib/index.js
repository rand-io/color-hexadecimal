'use strict';

// MODULES //

var lcg = require( 'compute-lcg' )();


// VARIABLES //

/*
* Notes:
*	-	#ffffff == 16777215 in decimal.
*	-	16777216 === 2^24.
*	-	Use bitwise shifts to make 16777216 a 32-bit integer.
*/
var MAX = 1<<24;


// RANDC //

/**
* FUNCTION: randc()
*	Returns a pseudorandom hexadecimal color.
*
* @returns {String} hexadecimal color
*/
function randc() {
	var num,
		c, i;

	// [1] Use bitwise `not` to convert the random number to a 32-bit integer, effectively flooring the float.
	// [2] Convert to a hexadecimal string.
	c = (~~( lcg()*MAX ) ).toString( 16 );

	// [3] If need be, pad with zeros.
	num = 6 - c.length;
	for ( i = 0; i < num; i++ ) {
		c = '0' + c;
	}
	return c;
} // end FUNCTION randc()


// EXPORTS //

module.exports = randc;
