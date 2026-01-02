// ========================================
// 📌 JavaScript ES6 Features – Complete Notes
// ========================================

// 1. Let & Const
let a = 10;          // Block scoped variable
const b = 20;        // Constant value (cannot reassign)

// 2. Template Literals
let name = "Pawan";
let greeting = `Hello ${name}, welcome to JS ES6`;
console.log(greeting);  // Allows variables inside string

// 3. Arrow Functions
let add = (x, y) => x + y;  // Short function syntax
console.log("Add:", add(5, 3));

// 4. Default Parameters
function greetUser(name = "Guest") {
  console.log(`Hello ${name}`);
}
greetUser();
greetUser("Rahul");

// 5. Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];  // Merge arrays
console.log("Combined:", combined);

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let mergedObj = { ...obj1, ...obj2 };
console.log("Merged Object:", mergedObj);

// 6. Rest Parameter
function sumAll(...nums) {           // Collect unlimited arguments
  return nums.reduce((total, n) => total + n, 0);
}
console.log("Sum All:", sumAll(1, 2, 3, 4, 5));

// 7. Destructuring
let user = { name: "Pawan", age: 22, city: "Delhi" };
let { name: uname, age, city } = user;  // Extract properties
console.log(uname, age, city);

let numbers = [10, 20, 30];
let [first, second, third] = numbers;   // Array destructuring
console.log(first, second, third);

// 8. Object Short Syntax
let x = 10, y = 20;
let point = { x, y };                   // Keys same as variable names
console.log(point);

// 9. Enhanced Object Methods
let person = {
  name: "Rahul",
  greet() {                             // No function keyword needed
    console.log("Hello " + this.name);
  }
};
person.greet();

// 10. Classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}
let dog = new Animal("Dog");
dog.speak();

// 11. Modules (ES6 Import/Export)
// export const pi = 3.14;   // In one file
// import { pi } from './module.js'; // In another file

// 12. Promises
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Done");
  else reject("Error");
});
promise
  .then((msg) => console.log("Promise Resolved:", msg))
  .catch((err) => console.log("Promise Rejected:", err));

// 13. Let’s also cover `for...of` (ES6)
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
  console.log(fruit);
}
