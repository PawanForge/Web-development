
1️⃣ Hoisting (var, let, const)

console.log(a);
var a=10;

console.log(b);
let b=20;

console.log(c);
const c=30;

🔹 What happens?

var a → prints undefined

let b → ❌ ReferenceError

const c → ❌ ReferenceError


🔹 Why?

Because of Hoisting.

🔸 var

Hoisted to top

Initialized with undefined

So:

var a;
console.log(a); // undefined
a = 10;


🔸 let & const

Also hoisted

BUT not initialized

They stay in Temporal Dead Zone (TDZ)

Access before declaration → ReferenceError


🔹 How memory works?

Memory phase:

a → undefined
b → uninitialized
c → uninitialized

Execution phase:

Accessing b or c before initialization → error



---

2️⃣ var vs let in loop (Closures + Scope)

for(var i=0; i<3; i++){
    setTimeout(()=>console.log(i),1);
}

🔹 Output:

3
3
3

🔹 Why?

var is function scoped

Only ONE i

Loop ends → i = 3

setTimeout runs later

So it prints 3 three times



---

for(let i=0; i<3; i++){
    setTimeout(()=>console.log(i),1);
}

🔹 Output:

0
1
2

🔹 Why?

let is block scoped

New i created each iteration

Each timeout remembers its own i



---

3️⃣ typeof NaN

console.log(typeof NaN);

Output:

"number"

Why?

NaN = Not a Number

But internally it is a special numeric value

So type is "number"



---

4️⃣ Weird + Operator Conversions

console.log([]+[]);

Output:

""

Why?

[] → converts to ""

"" + "" = ""



---

console.log([]+{});

Output:

"[object Object]"

Why?

[] → ""

{} → "[object Object]"

Result = string concatenation



---

console.log({}+[]);

Output:

0  OR "[object Object]"

Why?

JS sometimes treats {} as block, not object
Then:

+[] → 0

This is a parsing trick of JavaScript.


---

5️⃣ Loose vs Strict Equality

false=="0" // true

Why?

"0" → converted to number → 0

false → converted to number → 0

0 == 0 → true



---

false==="0" // false

Why?

Strict equality checks type

boolean !== string



---

null==undefined // true

Special rule in JS: Only these two are loosely equal.


---

false===undefined // false

Different types.


---

6️⃣ this Keyword

const obj={
    name:"JS",
    show(){
        console.log(this.name);
    }
};
const fn=obj.show;
fn();
obj.show();

🔹 Output:

undefined
JS

Why?

fn() → normal function call

this = global (window)

window.name = undefined


obj.show() → method call

this = obj

prints "JS"




---

7️⃣ Arrow Function and this

const obj={
    name:"JS",
    show:()=>{
        console.log(this.name);
    }
};

Why it prints undefined?

Arrow functions:

DO NOT have their own this

They take this from surrounding scope

Here surrounding scope = global


So this.name → undefined


---

8️⃣ Event Loop (Call Stack + Microtask + Macrotask)

console.log("Start");

setTimeout(()=>console.log("Timeout"),0);

Promise.resolve().then(()=>console.log("Promises"));

console.log("end");

🔹 Output:

Start
end
Promises
Timeout

🔹 Why?

JS order:

1. Synchronous code runs first


2. Microtasks (Promises)


3. Macrotasks (setTimeout)



Even 0ms timeout waits for call stack to clear.

Order:

Start

end

Promise

Timeout



---

9️⃣ Object Reference

const obj1={name:"JS"};
const obj2=obj1;
obj2.name="Java Script";
console.log(obj1.name);

Output:

Java Script

Why?

Objects are stored in heap

obj1 and obj2 point to SAME memory

So change via obj2 affects obj1



---

🔟 Closures (Very Important)

function outer(){
    let count=0;
    return function(){
        return ++count;
    };
}

🔹 What is Closure?

Closure = Function + its lexical environment


---

const fn1=outer();
const fn2=outer();

console.log(fn1()); // 1
console.log(fn1()); // 2
console.log(fn2()); // 1

🔹 Why?

Each time outer() runs:

New count created

Stored in memory

Returned function remembers it


Memory structure:

fn1 → count = 0
fn2 → count = 0

fn1:

1

2


fn2:

starts fresh → 1



---

🧠 Final Concepts Covered

You just tested:

Hoisting

Temporal Dead Zone

Scope (var vs let)

Closures

this keyword

Arrow functions

Type coercion

Event loop

Object references

Microtask vs Macrotask

