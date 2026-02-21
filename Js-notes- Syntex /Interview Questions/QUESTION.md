

🔥 1. Variables (var, let, const)

var → function scoped (old way)

let → block scoped

const → block scoped, cannot reassign


let age = 25;
const name = "John";


---

🔥 2. Data Types

🔹 Primitive

string

number

boolean

null

undefined

bigint

symbol


Stored by value.

🔹 Non-Primitive

object

array

function


Stored by reference.


---

🔥 3. Operators

Arithmetic → + - * / %

Comparison → == === != !==

Logical → && || !

Ternary → condition ? true : false



---

🔥 4. Truthy & Falsy Values

Falsy values:

false
0
""
null
undefined
NaN

Everything else is truthy (even [] and {}).


---

🔥 5. Functions

🔹 Normal Function

function greet(name) {
  return "Hello " + name;
}

🔹 Arrow Function

const greet = (name) => `Hello ${name}`;


---

🔥 6. Array Methods (Very Important)

map() → transforms array

filter() → filters array

reduce() → reduces to single value

forEach() → loops

find() → first match

some() → at least one true

every() → all true

includes() → checks value

slice() → copy portion

splice() → modify original



---

🔥 7. Destructuring

Array Destructuring

const [a, b] = [1, 2];

Object Destructuring

const { name, age } = { name: "John", age: 25 };


---

🔥 8. Spread & Rest Operator (...)

Spread (copy/merge)

const arr2 = [...arr1];

Rest (collect values)

const [a, ...rest] = [1,2,3];


---

🔥 9. Hoisting

var is hoisted (initialized as undefined)

let & const are hoisted but in TDZ (Temporal Dead Zone)



---

🔥 10. Closures

Function remembering its outer variables.

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}


---

🔥 11. Scope

Global Scope

Function Scope

Block Scope



---

🔥 12. Objects

Used to store key-value pairs.

const person = {
  name: "John",
  age: 25
};


---

🔥 13. this Keyword

Refers to current object

In arrow function → does NOT have its own this



---

🔥 14. Promises

Used for async operations.

const promise = new Promise((resolve, reject) => {
  resolve("Success");
});

States:

pending

fulfilled

rejected



---

🔥 15. Async / Await

Cleaner way to handle promises.

async function getData() {
  const result = await fetch(url);
}


---

🔥 16. Event Loop (Core Concept)

JavaScript is:

Single-threaded

Non-blocking

Uses call stack + callback queue



---

🔥 17. DOM Manipulation

Used to interact with HTML.

document.getElementById("id");
document.querySelector(".class");


---

🔥 18. ES6 Features

Template literals

Arrow functions

Destructuring

Spread operator

Classes

Modules



---

🔥 19. Error Handling

try {
  riskyCode();
} catch (error) {
  console.log(error);
} finally {
  console.log("Done");
}


---

🔥 20. Important Interview Topics

map vs forEach

slice vs splice

== vs ===

var vs let vs const

Call, Apply, Bind

Shallow vs Deep Copy

Debounce & Throttle

Event Delegation
