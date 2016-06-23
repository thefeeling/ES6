"use strict"
/**
 * [ES6]
 * Default Class
 */
class Shape{
	constructor(id, x, y){
		this.id = id;
		this.move(x,y)
	}
	move(x,y){
		this.x = x;
		this.y = y;
	}
}

// [Test Source]
// -------------------------------------
// let s1 = new Shape("daniel", 10, 30);
// console.log(s1);
// s1.move(20,30);
// console.log(s1);


/**
 * [ES6]
 * class extends and static member
 */
class Rectangle extends Shape{
	constructor(id, x, y, width, height){
		super(id,x,y)
		this.width = width;
		this.height = height;
	}
	static defaultRectangle () {
		return new Rectangle("default", 0, 0, 100, 100)
	}	
}

class Circle extends Shape{
	constructor(id, x, y, radius){
		super(id,x,y);
		this.radius = radius;
	}

	static defaultCircle () {
		return new Circle("default", 0, 0, 100)
	}	
}

// [Test Source]
// ------------------------------------------------
// let rec = new Rectangle("rec1", 0, 0, 200, 200);
// console.log(rec);
// let cir = new Circle("rec1", 0, 0, 200);
// console.log(cir);

// let s_rec = Rectangle.defaultRectangle();
// console.log(s_rec);
// let s_cir = Circle.defaultCircle();
// console.log(s_cir);


/**
 * [ES6]
 * Getter&Setter Class
 */
class Person{
	constructor(name, age){
		var name = name;
		var age = age;

		this._name = name;
		this._age = age;
	}
	set name(name){
		this._name = name
	}
	get name(){
		return this._name;
	}

	set age(age){
		this._age = age;
	}

	get age(){
		return this._age;
	}
}
//[Test Source]
//------------------------------------------------
let john = new Person("John", 27);
console.log(john.setAge(20));
console.log(john.getAge());



