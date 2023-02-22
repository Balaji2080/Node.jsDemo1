//ES5 Code
let a = function (x, y) {
  return x * y;
};

const r1 = a(5, 5);
console.log(r1);

//ES6Code
let b = (x, y) => x * y;
const c = (x, y) => {
  let add = x + y;
  return add * 3.14;
};

const r3 = c(6, 7);
console.log(r3);
const r2 = b(2, 3);
console.log(r2);
