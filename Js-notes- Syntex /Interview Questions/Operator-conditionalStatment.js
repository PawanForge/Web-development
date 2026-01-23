

JS Operators & Conditional Statements – Interview Practice


---

Q1: Short-circuit evaluation

console.log(true || false);  
console.log(false || "Hello");  
console.log(false && "Hello");  
console.log("Hi" && 0);  
console.log(null || 42);

Why it’s asked: Tests logical operators and short-circuiting.

Answers & Explanation:

true || false → true ✅

> || returns first truthy value



false || "Hello" → "Hello" ✅

> || returns first truthy



false && "Hello" → false ✅

> && returns first falsy value



"Hi" && 0 → 0 ✅

> && returns first falsy



null || 42 → 42 ✅

> || returns first truthy





---

Q2: Ternary operator

let age = 18;
console.log(age >= 18 ? "Adult" : "Minor");
console.log(false ? 1 : 0);
console.log("" ? "yes" : "no");

Why it’s asked: Tests conditional shorthand and truthy/falsy evaluation.

Answers & Explanation:

age >= 18 ? "Adult" : "Minor" → "Adult" ✅

false ? 1 : 0 → 0 ✅

"" ? "yes" : "no" → "no" ✅ (empty string is falsy)



---

Q3: Operator precedence

console.log(3 + 4 * 2);     
console.log((3 + 4) * 2);   
console.log(10 > 5 && 5 > 1);  
console.log(10 > 5 || 5 < 1);

Why it’s asked: Tests operator precedence and evaluation order.

Answers & Explanation:

3 + 4 * 2 → 11 ✅ (* has higher precedence)

(3 + 4) * 2 → 14 ✅ (parentheses override)

10 > 5 && 5 > 1 → true ✅ (&& evaluates both sides, both true)

10 > 5 || 5 < 1 → true ✅ (|| is true if any side true)



---

Q4: Tricky conditional

let x = 0;
if (x || x === 0) {
    console.log("Pass");
} else {
    console.log("Fail");
}

Why it’s asked: Tests falsy values in conditions.

Answer & Explanation:

Output → "Pass" ✅

x || x === 0 → 0 || true → true

Important: 0 is falsy, but we explicitly check x === 0.



---

Q5: Mixed operators

console.log(1 + 2 + "3");  
console.log("1" + 2 + 3);  
console.log(1 + 2 * 3);    
console.log(4 / 2 + 6);

Why it’s asked: Tests operator precedence + type coercion.

Answers & Explanation:

1 + 2 + "3" → "33" ✅

> 1 + 2 = 3, then 3 + "3" = "33"



"1" + 2 + 3 → "123" ✅

> "1" + 2 = "12", "12" + 3 = "123"



1 + 2 * 3 → 7 ✅ (* has higher precedence)

4 / 2 + 6 → 8 ✅



---

Q6: Comparison operators

console.log(5 > 4);   
console.log(5 >= "5");  
console.log("5" < 10);  
console.log("a" > "b");

Why it’s asked: Tests type coercion with comparisons.

Answers & Explanation:

5 > 4 → true ✅

5 >= "5" → true ✅ ("5" → 5)

"5" < 10 → true ✅ ("5" → 5)

"a" > "b" → false ✅ (string comparison via Unicode code points)



---

Q7: Logical NOT and double NOT

console.log(!true);  
console.log(!0);     
console.log(!!"Hello");  
console.log(!!"");

Why it’s asked: Tests truthy/falsy conversion using !.

Answers & Explanation:

!true → false ✅

!0 → true ✅ (0 is falsy)

!!"Hello" → true ✅ (double NOT converts to boolean)

!!"" → false ✅ (empty string is falsy)



---

Q8: Conditional with assignment

let a = 10, b = 20;
if (a = b) {
    console.log("Yes");
} else {
    console.log("No");
}

Why it’s asked: Tests assignment inside condition.

Answer & Explanation:

Output → "Yes" ✅

a = b assigns 20 to a, returns 20 → truthy → "Yes"



---

Q9: Tricky precedence

let result = true && false || true;  
console.log(result);

Why it’s asked: Tests logical operator precedence.

Answer & Explanation:

Output → true ✅

&& has higher precedence than ||

Step: true && false → false, then false || true → true



---

Q10: Nested ternary

let score = 85;
let grade = score > 90 ? "A" : score > 80 ? "B" : "C";
console.log(grade);

Why it’s asked: Tests nested ternary understanding.

Answer & Explanation:

Output → "B" ✅

Step: score > 90 → false, check next ternary score > 80 → true → "B"



---

💡 Interview Tip:

+ operator is overloaded → string concat if any operand is string.

&& and || return actual values, not always true/false.

Assignment inside if can be truthy/falsy trick.

Always consider operator precedence: * > + > > > && > ||.

