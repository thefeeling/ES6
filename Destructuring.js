"use strict"
/**
 * [ES6]
 * Destructuring Assignment
 * Node Version >= 6.0.0
 */

function foo(){
	return {
		a:1,
		b:2,
		c:3
	}
}

function bar(){
	return [4,5,6];
}

// Shorter syntax
var [a = 3, b = 6, c = 9, d = 12] = foo();
console.log(a, b, c, d);

// Object Property Assignment Pattern
// [source: target] Pattern
var {a : bam ,b : baz ,c : bap} = foo();

console.log("Object Destructuring => " + bam, baz, bap);
// console.log("Object Destructuring => " + a, b, c); Reference Error

var [x,y,z] = bar();
console.log("Array Destructuring => "  + x, y, z);