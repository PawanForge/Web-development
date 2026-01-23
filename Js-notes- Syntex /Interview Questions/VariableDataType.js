

JS Data Types – Interview Level Questions with Explanations


---

Q1: typeof surprises

console.log(typeof null);
console.log(typeof NaN);
console.log(typeof []);
console.log(typeof (()=>{}));

Why it’s asked:
Tests your knowledge of JS quirks and primitives vs objects.

Answers & Explanation:

typeof null → "object" ✅

> Historical bug: null is a primitive, but JS returns "object" for it.



typeof NaN → "number" ✅

> NaN is a special numeric value representing “Not-a-Number” but still of type number.



typeof [] → "object" ✅

> Arrays are technically objects in JS.



typeof (()=>{}) → "function" ✅

> Functions are callable objects, typeof gives "function".





---

Q2: == vs ===

console.log(0 == "");          
console.log(0 === "");         
console.log(false == "0");     
console.log(false === "0");    
console.log(null == undefined);
console.log(null === undefined);

Why it’s asked:
Checks understanding of type coercion vs strict equality.

Answers & Explanation:

0 == "" → true ✅

> == converts "" → 0 → 0 == 0



0 === "" → false ✅

> === does no coercion, types differ (number vs string)



false == "0" → true ✅

> "0" → 0, false → 0, then 0 == 0



false === "0" → false ✅

> Different types (boolean vs string)



null == undefined → true ✅

> Special JS rule: null == undefined



null === undefined → false ✅

> Strict equality, types differ





---

Q3: Falsy vs Truthy

0, "0", [], {}, NaN, undefined, null, "false"

Why it’s asked:
Determines knowledge of what JS treats as falsy in boolean context.

Answer & Explanation:

Falsy: 0, NaN, undefined, null ✅

> All others are truthy, even "0" (non-empty string), [] (array), {} (object), "false" (string).



Trick: empty array and object are truthy.



---

Q4: Type coercion “fun”

console.log([] + []);        
console.log([] + {});        
console.log({} + []);        
console.log(true + []);      
console.log([] == ![]);

Why it’s asked:
Tests quirky JS behavior with arrays, objects, boolean coercion.

Answers & Explanation:

[] + [] → "" ✅

> Empty arrays are converted to empty strings, + is concatenation.



[] + {} → "[object Object]" ✅

> Empty array [] → "", object → "[object Object]".



{} + [] → 0 or "[object Object]" ✅

> JS may parse {} as block, then +[] → 0



true + [] → "true" ✅

> Boolean → string → "true", then concatenated with empty string



[] == ![] → true ✅

> ![] → false; [] == false → "" == 0 → true





---

Q5: NaN & equality

console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

Why it’s asked:
Checks understanding of NaN uniqueness.

Answers & Explanation:

NaN == NaN → false ✅

> By definition, NaN is not equal to itself.



NaN === NaN → false ✅

> Strict equality doesn’t change this.



Object.is(NaN, NaN) → true ✅

> Object.is can correctly check NaN equality.





---

Q6: Strings and numbers

console.log("5" - "2");        
console.log("5" + "2");        
console.log("5" * "2");        
console.log("5" / "2");        
console.log("5" - 2);

Why it’s asked:
Tests type coercion in arithmetic vs concatenation.

Answers & Explanation:

"5" - "2" → 3 ✅ (- converts strings to numbers)

"5" + "2" → "52" ✅ (+ with string concatenates)

"5" * "2" → 10 ✅ (multiplication coerces to numbers)

"5" / "2" → 2.5 ✅ (division coerces to numbers)

"5" - 2 → 3 ✅



---

Q7: Null vs Undefined

let a;
let b = null;

console.log(a + 2);
console.log(b + 2);
console.log(a == b);
console.log(a === b);

Why it’s asked:
Tests understanding of numeric coercion of null vs undefined.

Answers & Explanation:

a + 2 → NaN ✅ (undefined → NaN in numeric context)

b + 2 → 2 ✅ (null → 0)

a == b → true ✅ (undefined == null)

a === b → false ✅ (strict equality, different types)



---

Q8: Advanced array quirks

console.log([] == 0);
console.log([1] == 1);
console.log([1,2] == "1,2");
console.log([] === 0);

Why it’s asked:
Tests JS coercion with arrays and primitives.

Answers & Explanation:

[] == 0 → true ✅ ([] → "" → 0)

[1] == 1 → true ✅ ([1] → "1" → 1)

[1,2] == "1,2" → true ✅ ([1,2] → "1,2")

[] === 0 → false ✅ (different types, no coercion)



---

Q9: Function and object types

console.log(typeof function(){});
console.log(typeof {});
console.log(typeof []);
console.log(typeof class{});

Why it’s asked:
Checks typeof knowledge including ES6 classes.

Answers & Explanation:

function(){} → "function" ✅

{} → "object" ✅

[] → "object" ✅

class {} → "function" ✅ (classes are functions internally)



---

Q10: Tricky increment/decrement

let x = 5;
console.log(x++);
console.log(++x);
console.log(x--);
console.log(--x);

Why it’s asked:
Tests postfix vs prefix operators.

Answers & Explanation:

x++ → 5 ✅ (returns old value, then increments)

++x → 7 ✅ (increment first, return new value)

x-- → 7 ✅ (post-decrement, returns old value)

--x → 5 ✅ (pre-decrement, returns new value)



---

✅ Key Takeaways:

1. JS has quirky type coercion rules (==, arithmetic, string + number).


2. null, undefined, NaN, [], {}, and functions behave unexpectedly sometimes.


3. Always think step-by-step: what JS converts first, then what operation happens.

