# Block-Scope
## let
자바스크립트는 기본적으로 **함수 단위** 블록 스코프를 지원한다.그렇기 때문에, {} 중괄호 단위의 블록 스코핑이 사실상 크게 의미가 없다. 그렇기 때문에, 스코프를 위해서 함수를 나눠놓고 사용하거나 즉시 호출 패턴([IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) )등을 사용하여 스코프를 나눠서 사용하는 등 다양하게 스코프를 나누는 방법등이 사용되고 있었다.

ES6에서는 이러한 불편한 부분을 해소하고자 <code>let</code>이라는 키워드를 제공하여 **블록 단위** 스코프를 지원하고 있다. **<code>let</code>은 기본적으로 상수 성격을 지니고 있어서 한번 선언 및 할당을 하게 되면, 다시 변경이 불가하다.**
> 다시 선언하게 되면 has already been declared(...) 이라는 오류 메세지를 볼 수 있다.

```javascript
// Before ES6
var a = 10;
(function(){
      var a = 20;
      console.log(a); // 20
}())

// ES6
let a = 10;
{
      let a = 20;
      console.log(a); // 20
}
```

위 코드에서 볼 수 있듯이, 중괄호{} 안에 <code>let</code> 키워드를 사용하여 선언하면, 현재 속한 스코프에 있는 변수를 바로 참조하여 사용할 수 있다. 중괄호 단위의 스코프는 다른 언어(java, c 등)를 해봤다면 자연스럽게 이해할 수 있는 항목이라 크게 불편한 것은 없을꺼라고 생각된다.

위와 같은 성격와 특징을 이용하여 <code>if</code>와 <code>for</code>문에서 어떻게 적용 되는지 확인해보면 쉽게 이해할 수 있을 것이다.

```javascript
// for statement
let a = 10;
for(let x = 1 ; x <= 5 ; x++){
      let tmp = a+x;
      console.log(tmp) // 11, 12, 13, 14, 15
}

// if statement
let a = 10;
if(a > 5){
      let a = 20;
      console.log(a); // 20
}
```
<code>for</code>문부터 살펴보면 for안에 속한 변수 <code>let x, let tmp</code>는 안쪽 스코프에 속한 변수들이고 가장 상단에 있는 <code>let a</code>는 바깥 스코프(전역이 될 수도 있다.)에 속한다.
> 반복이 진행되면서 let x, let tmp는 그때그때 새롭게 생성이 된다. 만약 여기에 var 키워드를 대신하여 사용했다면 문이 포함된 범위 스코프(함수 혹은 전역)에 속하기 때문에 클로져를 사용해야 하는 상황일 경우, 생각치도 못한 값을 넘겨줄 수도 있다. (하단 참조)

```javascript
// 잘못된 예
var callbacks = [];
for (var i = 0; i < 5; i++) {
      callbacks.push( function(){
            console.log(i);
      });
}
callbacks[0]() // 5


// 올바른 예
var callbacks = [];
for (let i = 0; i < 5; i++) {
      callbacks.push( function(){
            console.log( i );
      });
}
callbacks[1]() // 1
```

for문과 마찬가지로, if문 역시 중괄호에서의 <code>let a</code>의 스코프와 중괄호 밖에서의 <code>let a</code>는 다른 스코프에 속하기 때문에, 중괄호 안에서의 <code>console.log(a)</code>에서 20이라는 값을 출력할 수 있는 것이다.

> 요약하자면, 변수 스코프 체인(정식 명칭인지는 모르겠네요)을 형성하는 기준이 하나 더 추가된 문법형태로 보면 좋을꺼 같다. 기존 함수 단위에서 겪었던 불편함이 조금은 개선된 코드 형태라 그런지 괜찮은거 같다.

```javascript
{
      console.log(x);
      console.log(y);

      var x = "var 변수";
      let y = "let 변수"
}     
```

분명 개발을 하다보면, <code>var</code> 변수 선언과 <code>let</code> 변수 선언 둘다 모두 사용하는 경우가 많이 발생하리라 생각된다. 위 코드와 같은 경우가 대표적으로 잘못 사용했을 경우인데, <code>var</code> 변수 선언 및 <code>function</code>선언의 경우 변수명에 상관없이 "undefined" 로 초기화를 하게 된다.
> **함수 변수와 일반 var 변수명이 겹쳤을 경우 덮어씌우게 된다.**


하지만 <code>let</code>의 경우 선언은 되어 있지만 초기화가 안되 실제로 y를 호출하는 부분에서 **ReferenceError**가 발생하게 된다. ES6 이전에는 <code>var</code> 선언만을 사용했기 때문에, 약간 생소할 수 있지만, 결론적으로 **<code>let</code> 변수 선언은 바로 초기화 작업이 이뤄지지 않는다** 정도로 요약할 수 있을것 같다.
> <code>let</code> 초기화와 관련하여 발생하는 오류를 가리켜 **TDZ(TEMPORAL DEAD ZONE)**
라고 부른다.


### 요약
* <code>let</code>과 중괄호를 통하여 블럭 단위의 스코프를 가질 수 있다.
* <code>let</code> 상수 성격을 가지고 있어서, 한번 초기화 후 다시 변경이 불가하다.
* <code>if</code>문과 <code>for</code>문에서도 마찬가지로 블럭 단위 스코프를 가짐
* <code>let</code> 변수 선언과 관련하여 초기화 오류를 TDZ라고 부른다.
* 이러한 TDZ를 피하기 위해서는 <code>let</code>변수 선언은 스코프의 가장 상단에 위치시켜 놓자
  * 사실 var 변수만을 사용하던 시절에도 이것은 암묵적으로 다들 지키는 내용이었다.


## const
말 그대로 상수(Constants)이다. let과 마찬가지로 블록 단위 스코프를 지원하며, const 변수는 값이 한 번 할당되면 변경을 허용하지 않는다.

```javascript
const PI = 3.141593;
PI = 3.14;
console.log(PI);

// Object
{
      const x = {};
      x.name = "choi";
      x.age = 20;
      console.dir(x);
}

// Array
{
      const todoList = [];
      todoList.push("공부하기");
      todoList.push("놀기");
      todoList.push("숙제하기");
      todoList.push("청소하기");
      for(let todo of todoList){
      	console.log(todo);
      };
}
```

변경을 허용하지 않는다고 해도 Array 혹은 Object의 경우 프로퍼티를 할당하거나 값을 넣는건 가능하다
기존 <code>var</code>변수에 상수 성격의 데이터를 집어넣고 대문자로 변수명을 할당하지 않아도 이제 상수를 사용할 수 있다 :)
> 즉, 위 예제에서 <code>const x</code>와<code>const todoList</code>는 해당 Array 혹은 Object의 참조가 바뀌는 것을 허용하지 않는 것이지, Array 혹은 Object 내부에서의 변경은 상관이 없다는 이야기이다.

### 요약
* <code>const</code> 키워드를 사용하여 상수를 선언하여 활용할 수 있다.
* 배열(Array) 혹은 객체(Object)에 값이나 참조를 할당하는 것에는 제한이 없다.


## 참고자료
* [MSDN - let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)
* [TEMPORAL DEAD ZONE(TDZ) DEMYSTIFIED](http://jsrocks.org/2015/01/temporal-dead-zone-tdz-demystified/)
