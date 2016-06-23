# ES6- Classes
## Concept
#### 예제1)
```javascript
// ES6
class Sample {
	constructor(a, b) {
		this. x = a;
		this. y = b;
	}
	gimmeXY() {
    	return this. x * this. y;
    }
}
// Before ES6
function Sample(a, b) {
	this.x = a;
	this.y = b;
}
Foo.prototype.gimmeXY = function() {
	return this. x * this. y;
}
```
### 기본 특징
- 클래스는 기본적으로 기존 자바스크립트에서 (생성자) 함수를 만드는 것과 동일하다.
- 위 코드에서 constructor에 해당하는 부분은 기존 생성자 함수에서 함수 코드 블럭에 해당한다.(Before ES6에서 Sample 함수의 코드 블럭 영역)
- 객체 리터럴과 다르게 ES6 클래스에서는 객체 맴버들의 구분자로 ,(컴마)를 사용하지 않는다.
- 결과적으로 ES6나 기존 형식의 문법에서나 객체를 생성하는 함수로 사용하는 것은 동일하다.

### 차이점
- ES6 클래스는 new 연산자를 이용해서만 객체(인스턴스)를 생성할 수 있다.
- function 키워드를 사용하는 방식은 호이스팅이 발생하지만, 클래스는 호이스팅이 발생하지 않기 때문에, 반드시 클래스를 선언하고 객체를 생성해야 한다.
- 리플랙션(InstanceOf)은 동일하게 작동하지만, ES6에서는 Symbol.hasinstance를 활용하는 구문이 추가되었다.


## 프로토타입
#### 예제2)
```javascript
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

var lionKing = new Tiger( 5, 15, 25 );
lionKing.x;           // 5
lionKing.y;           // 15
lionKing.z;           // 25
lionKing.gimmeXYZ();  // 1875
```
### 프로토타입 상속
- 기존 클래스 기반의 OOP 언어처럼 ES6에서도 extends 키워드를 사용하여 객체를 확장(상속)할 수 있다.
- super 키워드를 사용하여 부모 클래스를 참조할 수 있으며, Java와 같은 언어에서처럼 Constructor(생성자)에서 기본적으로 부모 클래스를 초기화하는 작업을 꼭 해줘야 한다.
- 결과적으로, 기존 자바스크립트 함수에서 프로토타입을 사용하여 상속을 구현하듯이, ES6에서도 class를 상속하여 사용하게 된다.
> 내부적으로는 결국 기존 FirstClassObject 의 성격을 만족시키는 자바스크립트 함수를 특히 생성자로서의 역할을 클래스라는 키워드에 맞게끔 사용하도록 ES6에서 문법적으로 추가된 것으로 생각하는 것이 편하다. 물론 기존 함수 단위로 특히 프로토타입을 직접 상속하여 구현하는 것은 코드로 보나 이것을 이해하는 사람으로 보나 불편한 부분이 분명히 생기기 때문에, 이런 class 단위로 작성하는 방법을 고안한것은 굉장히 고무적으로 생각된다.
