"use strict"
/**
 * [ES6]
 * Object Short-hand
 */
let x = "name";
let y = "daniel";
let obj = { x,y }; // { x: 'name', y: 'daniel' }
console.log(obj);

/**
 * [ES6]
 * Computed Property Names
 */
function getName(){
	return "-objProperty";
};

let cpnObj = {
	foo: "bar",
	[ "baz" + getName() ]: 42
};
console.log(cpnObj); // { foo: 'bar', 'baz-objName': 42 }


/**
 * [ES6]
 * Support Method Notation
 */
let funcObj = {
	// Regular Functions
	a(a,b){
		return "func-a";
	},
	b(a,b){
		return "func-b";
	},
	c(a,b){
		return "func-c";
	},
	// [ES6]
	// Generator Function
	// : A generator can pause itself in mid-execution,
	//   and can be resumed either right away or at a later time
	*d(a,b){
		return console.log("generator func");
	}
}
console.log(funcObj.c("a","b"));
console.log(funcObj.d("a","b"));