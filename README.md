## ES6 정리

## 목차

- [1. 변수 선언](#1-변수-선언)
  - [let](#let)
  - [const](#const)
  - [var](#var)
- [2. 연산자](#2-연산자)
- [3. Truthy vs Falsy](#3-truthy-vs-falsy)
- [4. 함수](#4-함수)
  - [함수 선언식](#함수-선언식)
  - [함수 표현식](#함수-표현식)
  - [화살표 함수](#화살표-함수)
- [5. Array & Object](#5-array--object)
- [6. 스코프](#6-스코프)
- [7. 호이스팅](#7-호이스팅)
- [8. this](#8-this)
- [9. Call & Apply & Bind](#8-call--apply--bind)
- [ES6 추가 기능](#es6-추가-기능)

---

## 1. 변수 선언

### let

- **ES6**부터 도입
- **변수** 선언
- **재할당 가능**
- **블록 스코프** 적용

```js
let count = 1;
count = 2; // 가능
```

### const

- **ES6**부터 도입
- **상수** 선언 (재할당 불가)
- **블록 스코프** 적용
  > **주의:** 객체나 배열의 경우, 변수에 재할당은 불가능하지만 내부 값은 변경 가능

```js
const PI = 3.14;
// PI = 3.1415; // 에러 발생

const obj = { a: 1 };
obj.a = 2; // 내부 변경은 가능
```

### var

- **ES5 이전** 사용
- **변수** 선언
- **재할당 가능**
- **함수 스코프** 적용
  > **권장하지 않음:** 블록 스코프를 지원하지 않아 의도치 않은 버그가 발생할 수 있음

```js
var name = "Alice";
name = "Bob";
```

## 2. 연산자

**연산을 가능하게 하는 기호**

- **자주 쓰이는 연산자 종류**
  - **할당 연산자:** `=`, `+=`, `-=`, …
  - **비교 연산자:** `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`
  - **산술 연산자:** `+`, `-`, `*`, `/`, `%`
  - **논리 연산자:** `&&`, `||`, `!`
  - **조건(삼항) 연산자:** `조건 ? 참일 때 : 거짓일 때`
  - **기타:** 비트 연산자, 전개(Spread) 연산자 등

---

## 3. Truthy vs Falsy

자바스크립트에서 **boolean** 컨텍스트로 평가될 때의 값들

### Falsy 값

다음 값들은 **false**로 평가됩니다:

- `false`
- `0`, `-0`
- `0n` (BigInt 0)
- `""` (빈 문자열)
- `null`
- `undefined`
- `NaN`

### Truthy 값

Falsy 값을 제외한 **모든 값**은 Truthy로 평가됩니다.  
예를 들어:

- 숫자 `1`, `-1`
- `"0"`, `"false"` (문자열)
- 빈 배열 `[]` 및 빈 객체 `{}`
- 공백 문자열 `" "` (빈 문자열과는 다름)

---

## 4. 함수

자바스크립트에서 **함수**는 입력과 출력이 있는 재사용 가능한 로직 단위입니다.

### 함수 선언식

- **문법:** `function func() { ... }`
- **호이스팅:** 함수 전체가 호이스팅되어 선언문 위에서도 호출 가능

```js
hello(); // 호출 가능

function hello() {
  console.log("Hello, World!");
}
```

### 함수 표현식

- **문법:** `const func = function() { ... }`
- **호이스팅:** 변수는 호이스팅되지만, 초기화 전까지는 사용할 수 없음 (TDZ에 걸림)

```js
// hello(); // ReferenceError 발생

const hello = function () {
  console.log("Hello, World!");
};
```

### 화살표 함수

- **ES6**부터 도입
- 간결한 문법 및 **this** 바인딩이 없음 (렉시컬 스코프)
- 주로 **콜백 함수**나 간단한 로직에 사용 권장

```js
const hello = () => console.log("Hello, World!");
```

## 5. Array & Object

### 배열 (Array)

- **순서가 있는 인덱스 기반** 자료구조
- **키**가 아닌 **인덱스**로 요소에 접근
- **예시:**

```js
const array = [1, 2, 3];
console.log(array[0]); // 1
```

### 오브젝트 (Object)

- **키-값** 쌍으로 구성된 자료구조
- **순서 보장이 없음** (일부 ES6 규칙이 적용되지만, 일반적으로 순서에 의존하지 않음)
- **예시:**

```js
const obj = { a: 1, b: 2, c: 3 };
console.log(obj.a); // 1
```

## 6. 스코프

**스코프**는 변수가 접근할 수 있는 **범위**를 의미합니다.

- **글로벌 스코프:** 함수나 블록 외부에 선언된 변수 — 어디서든 접근 가능
- **함수 스코프:** 함수 내부에 선언된 변수 — 함수 내부에서만 접근 가능
- **블록 스코프 (ES6):** `{}` 내부에 선언된 변수 (`let`, `const`) — 해당 블록 내에서만 접근 가능

## 7. 호이스팅

자바스크립트에서는 **선언**이 해당 스코프의 최상단으로 끌어올려지는 현상을 **호이스팅**이라고 합니다.

### 주요 사항

- **var 변수:** 선언과 동시에 `undefined`로 초기화되어 호이스팅됨
- **let, const 변수:** 선언은 호이스팅되지만, 초기화는 해당 코드에 도달했을 때 이루어져 **일시적 사각지대 (TDZ)**에 놓임
- **함수 선언식:** 함수 전체가 호이스팅되어 선언문 위에서도 호출 가능

### 예시

```js
console.log(first); // undefined
var first;

console.log(second); // ReferenceError: Cannot access 'second' before initialization
let second;
```

<table>
  <thead>
    <tr>
      <th>구분</th>
      <th>호이스팅 여부</th>
      <th>초기값</th>
      <th>스코프</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>함수 선언식</td>
      <td>YES</td>
      <td>실제 함수</td>
      <td>블록 (ES6)</td>
    </tr>
    <tr>
      <td>var 변수</td>
      <td>YES</td></td>
      <td>undefined</td>
      <td>함수</td>
    </tr>
    <tr>
      <td>let, const 변수</td>
      <td>NO</td>
      <td>uninitialized</td>
      <td>블록</td>
    </tr>
    <tr>
      <td>함수 표현식 &amp; 화살표 함수</td>
      <td>변수 선언에 따름</td>
      <td>(선언 후 할당)</td>
      <td>변수에 따라 다름</td>
    </tr>
  </tbody>
</table>

## 8. this

**모든 실행 컨텍스트에 만들어지는 특별한 변수**
**this는 static하지 않다. 함수가 호출될 때만 값이 할당**

<table>
  <thead>
    <tr>
      <th></th>
      <th>this</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>메서드</td>
      <td>메서드를 호출하는 오브젝트</td>
    </tr>
    <tr>
      <td>간단한 함수 호출</td>
      <td>Chrome: undefined 
      <br>
      (*strinct mode 기준)
      <br>
      Node.js: global Object
      </td>
    </tr>
    <tr>
      <td>화살표 함수</td>
      <td>둘러싸고 있는 함수 <br>
      (어휘적 this)
      </td>
    </tr>
    <tr>
      <td>이벤트 리스너</td>
      <td>핸들러가 붙어있는 DOM 이벤트</td>
    </tr>
  </tbody>
</table>

## 9. Call & Apply & Bind

- **call**

  - 함수를 호출하는 함수
  - 첫 번째 인자에 this로 세팅하고 싶은 객체를 넘김
  - 나머지 인자를 입력

- **apply**

  - 함수를 호출하는 함수
  - 첫 번째 인자에 this로 세팅하고 싶은 객체를 넘김
  - 나머지 인자를 **배열**로 입력

- **bind**
  - 함수를 실행하지 않고 리턴
  - 나머지 인자는 call, apply와 동일

## ES6 추가 기능

ES6에서는 위에서 다룬 내용 외에도 자바스크립트의 생산성과 가독성을 높여주는 다양한 기능이 추가되었습니다.

- **템플릿 리터럴 (Template Literals):**  
  백틱(`` ` ``)을 사용하여 문자열 내 변수 삽입과 여러 줄 문자열 표현이 가능

  ```js
  const name = "Alice";
  console.log(`Hello, ${name}!`);
  ```

- **디스트럭처링 (Destructuring):**  
  배열이나 객체의 값을 쉽게 추출하여 변수에 할당

  ```js
  const arr = [1, 2, 3];
  const [a, b] = arr;

  const obj = { x: 10, y: 20 };
  const { x, y } = obj;
  ```

- **기본 매개변수 (Default Parameters):**  
  함수의 매개변수에 기본값을 지정
  ```js
  function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  ```
- **나머지 매개변수 (Rest Parameters):**  
  함수의 인수를 배열 형태로 모을 수 있음
  ```js
  function sum(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
  ```
- **전개 연산자 (Spread Operator):**  
  배열이나 객체를 개별 요소로 확장
  ```js
  const arr1 = [1, 2];
  const arr2 = [...arr1, 3, 4];
  ```
- **향상된 객체 리터럴 (Enhanced Object Literals):**  
  프로퍼티 축약, 계산된 프로퍼티 이름, 메서드 정의 등을 지원
  ```js
  const key = "name";
  const person = {
    [key]: "Alice",
    greet() {
      console.log("Hi!");
    },
  };
  ```
- **클래스 (Classes):**  
  프로토타입 기반 상속을 위한 문법적 설탕

  ```js
  class Animal {
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  ```

- **모듈 (Modules):**  
  `import`와 `export`를 사용해 파일 간 코드 분리 및 재사용

  ```js
  // math.js
  export function add(a, b) {
    return a + b;
  }

  // main.js
  import { add } from "./math.js";
  console.log(add(2, 3));
  ```
