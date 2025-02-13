// 할당 연산자
const count = 4;
const count2 = 10;
const totalCount = count + count2;

let appleCount = 3;
appleCount += 10; // appleCount = appleCount + 10

appleCount -= 2; // appleCount = appleCount - 2

appleCount *= 20; // appleCount = appleCount * 20

appleCount /= 5; // appleCount = appleCount / 5

// 타입 변환과 타입 강제
const year = "1999";
// console.log(Number(year) + 10);
// console.log(Number('hi')); // NaN
// console.log(String(40), 30); // string 40, number 30
// console.log("나는" + 27 + "살이다."); // string 나는27살이다.
// console.log("20" - 5.5); // number 14.5
// console.log("20" + 5.5); // string 205.5

// 비교 연산자
const stringThree = "3";
const numberThree = 3;
// console.log(stringThree == numberThree); // true
// console.log(stringThree === numberThree); // false

const stringIsTrue = "true";
const booleanIsTrue = true;
const numberIsTrue = 1;
// console.log(stringIsTrue === booleanIsTrue); // false
// console.log(stringIsTrue == booleanIsTrue); // false
// console.log(booleanIsTrue == numberIsTrue); // true

// 산술 연산자
let num = 3;
num++; // num = num + 1
num--; // num = num - 1

// 논리 연산자

// and 연산
const a1 = true && true; // true
const a2 = true && false; // false
const a3 = false && true; // false
const a4 = false && 3 === 4; // false
const a5 = "cat" && "dog"; // true && 'dog' -> 'dog'
const a6 = false && "cat"; // false
const a7 = "cat" && false; // false

// or 연산
const o1 = true || true; // true
const o2 = false || true; // true
const o3 = true || false; // true
const o4 = false || 3 == 5; // false
const o5 = "cat" || "dog"; // 'cat'
const o6 = false || "cat"; // 'cat'
const o7 = "cat" || false; // 'cat'

// 조건 (삼항) 연산자
const age = 25;
const adultCheck = age >= 18 ? "성인" : "청소년";
// if (age >= 18) return "성인";
// else return "청소년";

const alex = 1.75 * 75;
const brain = 1.82 * 82;
console.log(alex, brain);

const alexBmiHigher = alex > brain ? true : false;
console.log(alexBmiHigher);
