// ========================================
// 📌 JavaScript Functions – Complete Notes
// ========================================

// ---------- NORMAL FUNCTION ----------
function greet() {
  console.log("Hello JavaScript");
}
greet();

// ---------- FUNCTION WITH PARAMETER ----------
function add(a, b) {
  console.log("Sum:", a + b);
}
add(10, 5);

// ---------- RETURN FUNCTION ----------
function multiply(x, y) {
  return x * y;
}
let result = multiply(4, 5);
console.log("Multiply:", result);

// ---------- FUNCTION EXPRESSION ----------
let square = function (n) {
  return n * n;
};
console.log("Square:", square(5));

// ---------- ARROW FUNCTION ----------
let cube = (n) => n * n * n;
console.log("Cube:", cube(3));

// ---------- DEFAULT PARAMETER ----------
function sayHello(name = "Guest") {
  console.log("Hello", name);
}
sayHello();
sayHello("Pawan");

// ---------- CALLBACK FUNCTION ----------
function operation(a, b, callback) {
  return callback(a, b);
}
let sum = operation(5, 3, function (x, y) {
  return x + y;
});
console.log("Callback Sum:", sum);

// ---------- IIFE ----------
(function () {
  console.log("IIFE Called");
})();

// ---------- NESTED FUNCTION ----------
function outer() {
  function inner() {
    console.log("Inner Function");
  }
  inner();
}
outer();

// ---------- REST PARAMETER ----------
function total(...numbers) {
  let sum = 0;
  for (let n of numbers) {
    sum += n;
  }
  return sum;
}
console.log("Total:", total(1, 2, 3, 4));

// ---------- SCOPE EXAMPLE ----------
let globalVar = "Global";
function testScope() {
  let localVar = "Local";
  console.log(globalVar);
}
testScope();
