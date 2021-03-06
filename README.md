Hexadecimal Color
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Pseudorandom hexadecimal color generator.


## Installation

``` bash
$ npm install rand-color-hexadecimal
```


## Usage

``` javascript
var randc = require( 'rand-color-hexadecimal' );
```

#### randc()

Returns a pseudorandom hexadecimal color.

``` javascript
var hex = randc()
// returns '<color>' => e.g., '474747'
```


## Examples

``` javascript
var randc = require( 'rand-color-hexadecimal' );

var colors = new Array( 1000 );
for ( var i = 0; i < colors.length; i++ ) {
	colors[ i ] = randc();
}
console.log( colors );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](http://compute-io.com) Authors.


[npm-image]: http://img.shields.io/npm/v/rand-color-hexadecimal.svg
[npm-url]: https://npmjs.org/package/rand-color-hexadecimal

[travis-image]: http://img.shields.io/travis/rand-io/color-hexadecimal/master.svg
[travis-url]: https://travis-ci.org/rand-io/color-hexadecimal

[codecov-image]: https://img.shields.io/codecov/c/github/rand-io/color-hexadecimal/master.svg
[codecov-url]: https://codecov.io/github/rand-io/color-hexadecimal?branch=master

[dependencies-image]: http://img.shields.io/david/rand-io/color-hexadecimal.svg
[dependencies-url]: https://david-dm.org/rand-io/color-hexadecimal

[dev-dependencies-image]: http://img.shields.io/david/dev/rand-io/color-hexadecimal.svg
[dev-dependencies-url]: https://david-dm.org/dev/rand-io/color-hexadecimal

[github-issues-image]: http://img.shields.io/github/issues/rand-io/color-hexadecimal.svg
[github-issues-url]: https://github.com/rand-io/color-hexadecimal/issues
