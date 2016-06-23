"use strict"
/**
 * -------------------------------------------------------
 * [ES6]
 * Default Value Assignment
 * -------------------------------------------------------
 */

// ~[ES5] Style
// function foo(x,y){
// 	x = x || 11;
// 	y = y || 31;
// 	console.log(x+y);
// }

// foo();
// foo(5,6);
// foo(5);
// foo(null, 6);
// foo(0, 42); // 53 => Not Expected Value

// function foo(x,y){
// 	x = (x !== undefined) ? x : 11;
// 	y = (y !== undefined) ? y : 31;
// 	console.log(x+y);
// }

function foo(x=11, y=31){
	console.log(arguments);
	console.log(x+y);
}
foo();  // 42
foo( 5, 6 );  // 11
foo( 0, 42 );  // 42

// any valid expression, ex) function call
function foo(x = y + 3, z = bar( x )) {
	console.log( x, z );
}

function bar(val) {
	console.log( "bar called!" );
	return y + val;
}


var y = 5;
foo();  // "bar called"
foo( 10 );  // "bar called"
y = 6;
foo( undefined, 10 );  // 9 10
