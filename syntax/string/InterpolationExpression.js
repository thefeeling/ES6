"use strict"
/**
 * ES6
 * [Intepolation Expressions]
 */
let student = {
	name : "Choi",
	age  : 20
}

// Parameter Binding ${obj.property}
let msg = `
	Hello~
	My name is ${student.name}.
	This year, My age is ${student.age}
`
console.log(msg);



function upper(str){
	return str.toUpperCase();
}

// Nested and Function Call Parameter Binding
let msg2 = `
	Hello~
	My name is ${upper(`${student.name}`)}.
	This year, My age is ${student.age}
`
console.log(msg2);