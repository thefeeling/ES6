"use strict"
let letValue = [0,1,2];

/**
 * -------------------------------------------------------
 * [ES5]
 * forEach
 * -------------------------------------------------------
 */
console.log("-----forEach Test-----");
letValue.forEach(function(value){
	console.log(value);
});

/**
 * -----------------------------------------------------
 * [ES6]
 * For ~ Of -> DataSet(Map, Set, Array)
 * CF) For ~ in -> For Object
 * -----------------------------------------------------
 */
console.log("-----for~of Test-----");
for(let value of letValue){
	console.log(value);
};

/**
 * forEach + Arrow Function
 */
letValue.forEach(v => {
	if (v % 2 === 0) {
		console.log("even");
	}
	else{
		console.log("odd");
	}
});

console.log("Hello Develop Branch");
console.log("Iterator");
