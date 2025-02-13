// Array
const fruit1 = "apple";
const fruit2 = "banana";
const fruit3 = "kiwi";

const fruits = [fruit1, fruit2, fruit3];

const differentTypeArray = ["hi", 25, true, null];
// console.log(differentTypeArray); [ 'hi', 25, true, null ]
// console.log(fruits[2]); 'kiwi'
// console.log(fruits.length); 3
fruits[2] = "mango";
// console.log(fruits[2]); 'mango'
// console.log(fruit3); 'kiwi'

const birthYearArray = [1967, 1994, 1999];
const agesArray = birthYearArray.map((yearVal) => 2025 - yearVal);
// console.log(agesArray);

// Array Method
const cars = ["Hyundai", "BMW", "Audi", "Benz"];

// add element
cars.push("Toyota"); // [ 'Hyundai', 'BMW', 'Audi', 'Benz', 'Toyota' ]

cars.unshift("Porsche"); //[ 'Porsche', 'Hyundai', 'BMW', 'Audi', 'Benz', 'Toyota' ]

// remove element
cars.pop(); // [ 'Porsche', 'Hyundai', 'BMW', 'Audi', 'Benz' ]
cars.shift(); //["Hyundai", "BMW", "Audi", "Benz"];

// get Index
cars.indexOf("BMW"); // 1
cars.indexOf("Benz"); // 3

// is contain
cars.includes("Audi"); // true
cars.includes("Porsche"); // false

// 여러 개의 Array 연결
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2]; //[ 1, 2, 3, 4, 5, 6 ]

// Object, key-vlaue pair
const profile = {
  firstName: "Kim",
  lastName: "JinYeong",
  age: 25,
  job: "engineer",
  isMarried: false,
};
profile.firstName; // 'Kim'
profile["firstName"]; // 'Kim'
profile.age++; // 26

// 여러 개의 Object 연결
const obj1 = {
  name: "Kim",
  age: 25,
};

const obj2 = {
  aeeress: "seoul",
  job: "engineer",
};
const combinedObj = {
  ...obj1,
  ...obj2,
}; // { name: 'Kim', age: 25, aeeress: 'seoul', job: 'engineer' }

// Object Method
Object.keys(combinedObj); // [ 'name', 'age', 'aeeress', 'job' ]
Object.keys(combinedObj).map((key) => combinedObj[key]); // [ 'Kim', 25, 'seoul', 'engineer' ]

const calculateTip = (bills) => {
  const tips = [];
  bills.map((a) => {
    if (a > 30) tips.push(a * 0.15);
    else if (a <= 30) tips.push(a * 0.2);
  });
  console.log(tips);
};
calculateTip([30, 50, 60, 100]);
