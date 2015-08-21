/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	randc = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'rand-color-hexadecimal', function tests() {

	var re = /^[0-9A-F]{6}$/i;

	it( 'should export a function', function test() {
		expect( randc ).to.be.a( 'function' );
	});

	it( 'should return a 6-letter string', function test() {
		var color = randc();
		expect( color ).to.be.a( 'string' );
		assert.strictEqual( color.length, 6 );
	});

	it( 'should always return a valid hexadecimal color', function test() {
		var color;

		this.timeout( 0 );

		for ( var i = 0; i < 1e6; i++ ) {
			color = randc();
			assert.isTrue( re.test( color ), color );
		}
	});

});
