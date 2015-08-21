'use strict';

var randc = require( './../lib' );

var colors = new Array( 1000 );
for ( var i = 0; i < colors.length; i++ ) {
	colors[ i ] = randc();
}
console.log( colors );
