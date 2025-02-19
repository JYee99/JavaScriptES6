// let (ES6), block scope  초기값이 없거나, 변하는 값을 할당 할 때 사용
let age = 25;
age = 26;
// console.log(age); 26

let defaultAge;
// console.log(defaultAge); undefined
defaultAge = 30;
// console.log(defaultAge); 30

// const (ES6) 초기값이 있거나, 변하지 않는 값을 할당 할 때 사용
const birthYear = 1999;
// birthYear = 2000;
// console.log(birthYear);  error
// const defaultBirthYear;  error

// var (ES5), function scope
var address = "seoul";
address = "incheon";
