
"use strict";
/**
 * -------------------------------------------------------
 * [ES6]
 * Block-scoped variables (and constants) without hoisting
 * -------------------------------------------------------
 */

 {
 	let callback = [];
 	for (let i = 0; i <= 2; i++) {
 		callback[i] = function () {
 			return i * 2;
 		};
 	}
 	console.log(callback[0]() === 0);
 	console.log(callback[1]() === 2);
 	console.log(callback[2]() === 4);
 }

/**
* -------------------------------------------------------
* ES6
* Block-scoped function definitions.
* -------------------------------------------------------
*/
{
	function foo() {
		return 1;
	}
	console.log(foo());
	{
		function foo() {
			return 2;
		}
		console.log(foo());
	}
	console.log(foo());
}

/**
 * Scope Test
 */
let a = 2;
if (a > 1) {
	let b = a * 3;
	console.log(b); // 6
	for (let i = a; i <= b; i++) {
		let j = i + 10;
		console.log(j);
	}
	// 12 13 14 15 16
	let c = a + b;
	console.log(c); // 8
}