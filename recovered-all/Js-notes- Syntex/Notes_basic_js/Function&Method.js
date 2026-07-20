

📘 JavaScript Functions & Methods — Deep Concept Clarification


---

1️⃣ Function vs Method (MOST IMPORTANT)

What is a Function?

function show() {
  console.log("Hello");
}
show();

A standalone block of code

Called directly



---

What is a Method?

let obj = {
  show() {
    console.log("Hello");
  }
};
obj.show();

A function attached to an object

Called through object


👉 Key Difference

> Method has an owner object, function does not.




---

2️⃣ this — The Root of All Confusion

What is this?

this refers to the object that calls the function


❌ NOT where function is written
✅ Based on call-site


---

Example 1: Method call

let obj = {
  x: 10,
  show() {
    console.log(this.x);
  }
};
obj.show();

Why it works:

Called using obj.show()

this = obj



---

Example 2: Function call

let fn = obj.show;
fn();

Why it breaks:

Now called as fn()

No object → this = undefined


🧠 Rule:

> Remove the object → this is lost.




---

3️⃣ Arrow Functions — Why They Are Different

What makes arrow functions special?

❌ No this

❌ No arguments

❌ Cannot be constructor

✅ Uses lexical scope



---

Arrow used as method (WRONG)

let obj = {
  x: 10,
  show: () => console.log(this.x)
};
obj.show();

Why undefined?

Arrow does NOT get this from object

Takes this from outer scope (global)


📌 Rule:

> Never use arrow functions as object methods.




---

Arrow inside method (CORRECT)

let obj = {
  x: 10,
  show() {
    let inner = () => console.log(this.x);
    inner();
  }
};

Why it works?

Arrow inherits this from show()

this = obj



---

4️⃣ Losing this in Callbacks (Very Common)

Problem Example

let obj = {
  x: 10,
  show() {
    setTimeout(function () {
      console.log(this.x);
    }, 0);
  }
};
obj.show();

Output

undefined

Why?

setTimeout runs function separately

Regular function → new execution context

this becomes global



---

Fix 1: Arrow function

setTimeout(() => console.log(this.x), 0);

Fix 2: bind

setTimeout(function () {
  console.log(this.x);
}.bind(this), 0);


---

5️⃣ bind, call, apply (Clarified)

call

fn.call(obj, a, b);

Calls immediately

Sets this once



---

apply

fn.apply(obj, [a, b]);

Same as call

Arguments as array



---

bind

let bound = fn.bind(obj);
bound();

Returns new function

this permanently fixed


🧠 Memory Trick:

call → now

apply → now (array)

bind → later



---

6️⃣ Function Hoisting Explained

Function Declaration

hello();
function hello() {}

✔ Works
Reason:

Function declaration hoisted fully



---

Function Expression

hello();
var hello = function() {};

❌ Error
Reason:

var hello hoisted as undefined

Function assigned later



---

7️⃣ Closures (In Simple Words)

What is a Closure?

> A function that remembers variables from its outer scope even after the outer function finishes.




---

Example

function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

Why it works?

Inner function keeps reference to count

Memory not released



---

8️⃣ Closures + Loop (Classic Trap)

Problem

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

Output

3 3 3

Why?

var is function-scoped

One shared i

Loop ends → i = 3



---

Fix

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

Reason:

let is block-scoped



---

9️⃣ Method Chaining

How chaining works

let obj = {
  val: 0,
  inc() {
    this.val++;
    return this;
  }
};

Rule:

> To chain, method must return this.




---

🔟 Execution Context (Big Picture)

Every function call creates:

1. Variable environment


2. this binding


3. Scope chain



Arrow functions skip step 2.


---

🧠 FINAL INTERVIEW THINKING STRATEGY

Before answering:

1. Is it function or method?


2. Is it arrow or regular?


3. How is it called?


4. Any callback / async?


5. Any closure / loop?


