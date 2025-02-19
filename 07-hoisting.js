"strict mode";
// console.log(me);  undefined
// console.log(job);  ReferenceError
// console.log(year);  ReferenceError
var me = "Kim";
let job = "engineer";
const year = 1999;

// console.log(addDecl(5, 5));  10
// console.log(addExpr(5, 5));  ReferenceError
// console.log(addArrow(5, 5));  ReferenceError

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;
console.log(numProducts);

if (!numProducts) {
  deleteShoppingCart();
}
var numProducts = 10;
function deleteShoppingCart() {
  console.log("모든 상품 삭제");
}
