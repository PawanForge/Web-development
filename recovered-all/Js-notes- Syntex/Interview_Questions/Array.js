
---

🧩 JavaScript Arrays – Tricky Interview Practice


---

Q1: typeof array

console.log(typeof []);

Why asked:
Tests JS type quirks.

Output:

object

Reason:
Arrays are special objects in JS. Use Array.isArray() to detect arrays.


---

Q2: Empty array truthiness

if ([]) {
  console.log("Yes");
}

Why asked:
Tests truthy/falsy knowledge.

Output:

Yes

Reason:
Empty arrays are truthy, unlike empty strings or 0.


---

Q3: Length manipulation

let arr = [1, 2, 3];
arr.length = 1;
console.log(arr);

Why asked:
Tests array mutability.

Output:

[1]

Reason:
Reducing length removes elements from the end.


---

Q4: Increasing length

let arr = [1, 2];
arr.length = 5;
console.log(arr);

Why asked:
Tests sparse arrays.

Output:

[1, 2, <3 empty items>]

Reason:
JS creates empty slots, not undefined values.


---

Q5: delete vs splice

let arr = [1, 2, 3];
delete arr[1];
console.log(arr, arr.length);

Why asked:
Tests understanding of array holes.

Output:

[1, <1 empty item>, 3] 3

Reason:
delete removes value but does not shift indexes or change length.


---

Q6: Equality trap

console.log([] == []);

Why asked:
Tests reference comparison.

Output:

false

Reason:
Arrays are objects → compared by reference, not value.


---

Q7: Array + array

console.log([1,2] + [3,4]);

Why asked:
Tests coercion.

Output:

"1,23,4"

Reason:
Arrays convert to strings → "1,2" + "3,4".


---

Q8: indexOf vs includes

console.log([NaN].indexOf(NaN));
console.log([NaN].includes(NaN));

Why asked:
Tests NaN behavior.

Output:

-1
true

Reason:

indexOf uses ===

includes uses SameValueZero (handles NaN)



---

Q9: forEach return value

let result = [1,2,3].forEach(x => x * 2);
console.log(result);

Why asked:
Tests method behavior.

Output:

undefined

Reason:
forEach does not return a new array.


---

Q10: map vs forEach

let arr = [1,2,3];
let res = arr.map(x => {
  x * 2;
});
console.log(res);

Why asked:
Tests arrow function return.

Output:

[undefined, undefined, undefined]

Reason:
Curly braces require explicit return.


---

Q11: fill reference trap

let arr = Array(3).fill([]);
arr[0].push(1);
console.log(arr);

Why asked:
Tests reference sharing.

Output:

[[1],[1],[1]]

Reason:
All indexes point to same array reference.


---

Q12: Shallow copy trap

let a = [[1],[2]];
let b = a.slice();
b[0].push(9);
console.log(a);

Why asked:
Tests shallow copy.

Output:

[[1,9],[2]]

Reason:
slice() copies array, not nested objects.


---

Q13: Spread operator

let a = [1,2];
let b = [...a];
b.push(3);
console.log(a);

Why asked:
Tests shallow copy again.

Output:

[1,2]

Reason:
Spread creates a new array (top-level).


---

Q14: reduce without return

let sum = [1,2,3].reduce((a,c) => {
  a + c;
}, 0);
console.log(sum);

Why asked:
Tests reduce behavior.

Output:

undefined

Reason:
reduce must return accumulator.


---

Q15: find vs filter

console.log([1,2,3].find(x => x > 1));
console.log([1,2,3].filter(x => x > 1));

Why asked:
Tests array methods difference.

Output:

2
[2,3]

Reason:

find → first match

filter → all matches



---

Q16: Mutating during loop

let arr = [1,2,3];

for (let i = 0; i < arr.length; i++) {
  arr.push(i);
}
console.log(arr);

Why asked:
Tests dynamic length in loops.

Output:

[1,2,3,0]

Reason:
Length increases → condition fails after first iteration.


---

Q17: Sparse array loop

let arr = [ , , 3];

arr.forEach(x => console.log(x));

Why asked:
Tests sparse array behavior.

Output:

3

Reason:
forEach skips empty slots.


---

Q18: Array destructuring

let [a,,b] = [1,2,3];
console.log(a, b);

Why asked:
Tests destructuring.

Output:

1 3

Reason:
Commas skip elements.


---

🧠 Interview Golden Rules (Arrays)

Arrays are objects

Comparison is by reference

length is mutable

Most array methods are shallow

forEach returns undefined

map, filter, reduce need return

Sparse arrays behave differently



-
