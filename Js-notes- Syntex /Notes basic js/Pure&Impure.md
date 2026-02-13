Pure vs Impure 
1️⃣ Pure Function

A pure function is a function that:

Always returns the same output for the same input

Does not change anything outside the function

Does not depend on external variables


✅ Example of Pure Function

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5

Why is this pure?

It only uses a and b

It does not change any outside variable

Same input → same output



---

Another Pure Example

function square(n) {
  return n * n;
}

square(4) will always return 16.


---

2️⃣ Impure Function

An impure function:

May return different outputs for the same input

Changes external variables

Depends on outside data



---

❌ Example of Impure Function

let count = 0;

function increase() {
  count++;
  return count;
}

increase(); // 1
increase(); // 2
increase(); // 3

Why is this impure?

It changes the external variable count

Same function call gives different results



---

Another Impure Example

function getTime() {
  return new Date();
}

Every time you call it, the result is different.


---

🔥 Simple Comparison

Pure Function	Impure Function

Same input → Same output	Same input → Different output
No side effects	Has side effects
Does not change outside data	Changes outside data
Easy to test	Harder to test



---

🎯 Interview Definition

Pure Function: A function that always produces the same output for the same input and has no side effects.

Impure Function: A function that may produce different outputs for the same input or modifies external state.


---

If you want, I can also explain this with real-life examples or React examples for better understanding.
