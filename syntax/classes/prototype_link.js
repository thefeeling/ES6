"use strict"
class Animal {
	constructor(a,b){
		this.x = a;
		this.y = b;
	}
	gimmeXY(){
		return this.x * this.y;
	}
}


class Tiger extends Animal {
	constructor(a, b, c) {
		super(a, b);
		this.z = c;
	}
	gimmeXYZ() {
		return super.gimmeXY() * this.z;
	}
}

var b = new Tiger( 5, 15, 25 );
b.x;           // 5
b.y;           // 15
b.z;           // 25
b.gimmeXYZ();  // 1875