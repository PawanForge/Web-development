
---

🔥 Destructuring & Rest – Practice Question Set


---

🟢 LEVEL 1: Basics (Warm-up)

Q1

const [a, b] = [10, 20];
console.log(a, b);

✅ Answer: 10 20


---

Q2

const [a, , b] = [1, 2, 3];
console.log(a, b);

✅ Answer: 1 3


---

Q3

const [a = 5, b = 10] = [1];
console.log(a, b);

✅ Answer: 1 10


---

🟡 LEVEL 2: Rest Operator Practice

Q4

const [a, ...rest] = [1,2,3,4];
console.log(a, rest);

✅ Answer: 1 [2,3,4]


---

Q5

const [, ...rest] = [10,20,30];
console.log(rest);

✅ Answer: [20,30]


---

Q6

const [a, b, ...rest] = [1,2];
console.log(rest);

✅ Answer: []


---

🟡 LEVEL 3: Empty & Missing Values

Q7

const [a, ...rest] = [];
console.log(a, rest);

✅ Answer: undefined []


---

Q8

const [a = 10, ...rest] = [undefined, 2, 3];
console.log(a, rest);

✅ Answer: 10 [2,3]


---

🟠 LEVEL 4: Nested Destructuring

Q9

const arr = [1, [2, 3], 4];
const [a, [b, c], d] = arr;
console.log(a, b, c, d);

✅ Answer: 1 2 3 4


---

Q10

const [a, [b, ...rest]] = [1, [2,3,4]];
console.log(a, b, rest);

✅ Answer: 1 2 [3,4]


---

🔴 LEVEL 5: Object Destructuring + Rest

Q11

const user = { name: "Pawan", age: 22, city: "Delhi" };
const { name, ...rest } = user;
console.log(name, rest);

✅ Answer:
Pawan { age: 22, city: "Delhi" }


---

Q12

const { a = 5, ...rest } = { b: 10 };
console.log(a, rest);

✅ Answer:
5 { b: 10 }


---

🔥 LEVEL 6: Function Parameters (INTERVIEW FAVORITE)

Q13

function test([a, ...rest]) {
  console.log(a, rest);
}
test([1,2,3,4]);

✅ Answer: 1 [2,3,4]


---

Q14

function test(...args) {
  console.log(args);
}
test(1,2,3);

✅ Answer: [1,2,3]


---

Q15

function test({ a, ...rest }) {
  console.log(a, rest);
}
test({ a: 1, b: 2, c: 3 });

✅ Answer:
1 { b: 2, c: 3 }


---

🚨 LEVEL 7: INVALID (Spot the Error)

Q16

const [...rest, a] = [1,2,3];

❌ Answer: Syntax Error
📌 Rest must be last


---

Q17

const ...rest = [1,2];

❌ Answer: Invalid
📌 Rest cannot exist alone


---

🧠 LEVEL 8: THINK & EXPLAIN (Interview Style)

Q18

Why does rest always return an array?

✅ Answer:
Because it collects multiple values and needs a container.


---

Q19

Can destructuring work without rest?
✅ Yes

Can rest work without destructuring?
❌ No


---

Q20 (FINAL TRICK 🔥)

const [a, ...rest] = [1];
console.log(rest.length);

✅ Answer: 0


---

🎯 How to Master This (Do This Daily)

1. Read code


2. Simulate assignment


3. Identify destructuring part


4. Identify rest part


5. Check rule: rest last, returns array




---

🧠 ONE GOLDEN LINE (Repeat Before Interview)

> Destructuring assigns values, rest collects remaining values into an array or object.


