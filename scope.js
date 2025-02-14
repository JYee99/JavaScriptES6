// scope
"strict mode"; // 엄격한 모드
function calcAge(year) {
  const age = 2025 - year;
  function printAge() {
    // 함수 밖에서 선언된 변수는 불러올 수 있음
    const output = `${firstName}, 너는 ${age}살 이다. 그리고 ${year}년도에 태어남`;
    output; //Kim, 너는 34살 이다. 그리고 1991년도에 태어남

    if (year >= 1981 && year <= 1996) {
      var millenial = true;
      // firstName 블록 안에 밖에서 선언된 변수의 같은 이름을 선언할 수 있음
      const firstName = "Yun";
      const str = `${firstName}, 밀레니얼's`;
      str; // Yun, 밀레니얼's

      function add(a, b) {
        return a + b;
      }
    }
    millenial; // true
    add(2, 5); //7
  }
  printAge();
  return age;
}
// firstName
const firstName = "Kim";
calcAge(1991);
// console.log(age); // ReferenceError 함수 안에서 선언된 변수는 함수 밖에서 불러올 수 없음
