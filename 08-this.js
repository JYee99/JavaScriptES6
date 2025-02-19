// console.log(this); // {} 빈 객체

const calcAge = function (year) {
  console.log(this); // 많은 obj 값이 나옴
};
// calcAge(1999);

const calcAgeArrow = (year) => {
  console.log(this); // {} 빈 객체
};
// calcAgeArrow(1999);

const profile = {
  firstName: "Kim",
  year: 1999,
  calcAge: function () {
    // console.log(this); // { firstName: 'Kim', year: 1999, calcAge: [Function: calcAge] }
    // console.log(2025 - this.year); // 26

    const isMillenial = () => {
      console.log(this);
      //       {
      //   firstName: 'Kim',
      //   year: 1999,
      //   calcAge: [Function: calcAge],
      //   greet: [Function: greet],
      //   greet2: [Function: greet2]
      // }
    };
    isMillenial();
  },
  greet: () => {
    console.log(`안녕 ${this.firstName}`);
  },
  greet2: function () {
    console.log(`안녕 ${this.firstName}`);
  },
};
profile.calcAge();

const anotherProfile = {
  firstName: "Lee",
  year: 1997,
};
anotherProfile.calcAge = profile.calcAge;
// anotherProfile.calcAge();
// { fistName: 'Lee', year: 1997, calcAge: [Function: calcAge] }
// 28

const foo = profile.calcAge;
// foo(); // 많은 obj 값과 NaN이 출력 됨됨
// profile.greet(); // 안녕 undefined
// profile.greet2(); // 안녕 Kim
