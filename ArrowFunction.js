"use strict"

/**
 * -------------------------------------------------------
 * [ES6]
 * Arrow Function
 * -------------------------------------------------------
 */

// single-line expression
var f1 = () => 12;
var f2 = x => x * 2;

// multi-line expresssion
var f3 = (x, y) => {
	var z = x * 2 + y;
	y++;
	x *= 3;
	return (x + y + z) / 2;
};

// [Test Source]
// ------------------------------------------------
// console.log(f1());
// console.log(f2(10));
// console.log(f3(10,20));

var arr = [1,2,3,4,5];
arr = arr.map(v => v*2);
console.log(arr);


