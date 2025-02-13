// 함수 선언
function logger() {
  console.log("logging");
}
logger(); // 함수 호출

function buySomeFruits(params, params2) {
  const fruits = `복숭아 ${params}개, 키위 ${params2}개 구입`;
  return fruits;
}
const peachAndKiwi = buySomeFruits(10, 5);
console.log(peachAndKiwi);

// 함수 선언식
console.log(calcAge(1999));
function calcAge(birthYear) {
  return 2025 - birthYear;
}

// 함수 표현식
// console.log(calcAge2(2002)); ReferenceError
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};
console.log(calcAge2(2002));

// 화살표 함수
// console.log(calcAge3(2015)); ReferenceError
const calcAge3 = (birthYear) => {
  return 2025 - birthYear;
};
console.log(calcAge3(2015));
