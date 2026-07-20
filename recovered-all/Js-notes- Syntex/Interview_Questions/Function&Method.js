
1️⃣ Function vs Method (this loss)

let obj = {
  x: 10,
  show() {
    console.log(this.x);
  }
};

let fn = obj.show;
fn();

Output

undefined

Reason

this depends on how a function is called

fn() is a plain function call

No object → this becomes undefined (strict mode)


🧠 Interview line:

> Method loses its context when assigned to a variable.




---

2️⃣ Method call

obj.show();

Output

10

Reason

Function is called through object

this points to obj



---

3️⃣ Arrow function as method (TRAP)

let obj = {
  x: 10,
  show: () => console.log(this.x)
};
obj.show();

Output

undefined

Reason

Arrow functions do not have their own this

this is taken from outer scope, not object


🧠 Interview line:

> Arrow functions should not be used as object methods.




---

4️⃣ Arrow inside method (Correct use)

let obj = {
  x: 10,
  show() {
    let inner = () => console.log(this.x);
    inner();
  }
};
obj.show();

Output

10

Reason

Arrow inherits this from surrounding method

Method this = obj



---

5️⃣ bind()

function show() {
  console.log(this.x);
}
let obj = { x: 20 };

let bound = show.bind(obj);
bound();

Output

20

Reason

bind() creates a new function

this is permanently fixed



---

6️⃣ bind() does not execute

show.bind(obj);

Output

(no output)

Reason

bind() only returns a function

Execution happens only when function is called



---

7️⃣ call() vs apply()

sum.call(null, 2, 3);
sum.apply(null, [2, 3]);

Output

5
5

Reason

Difference is argument passing

call → comma separated

apply → array



---

8️⃣ arguments object

function test() {
  console.log(arguments);
}
test(1, 2);

Output

Arguments object

Reason

Regular functions get arguments

It stores all passed parameters



---

9️⃣ Arrow has no arguments

const test = () => console.log(arguments);

Output

ReferenceError

Reason

Arrow functions do not have arguments

They inherit from parent (none here)



---

🔟 Function hoisting

hello();
function hello() {
  console.log("Hi");
}

Output

Hi

Reason

Function declarations are hoisted completely

Memory allocated before execution



---

1️⃣1️⃣ Function expression hoisting

hello();
var hello = function() {};

Output

TypeError

Reason

var hello is hoisted as undefined

Calling undefined() causes error



---

1️⃣2️⃣ Named function expression

let f = function test() {
  console.log(typeof test);
};
f();

Output

function

Reason

Function name exists only inside its body

Used for recursion & debugging



---

1️⃣3️⃣ Closure

function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

Reason

Inner function remembers outer variables

Even after outer function finishes


🧠 Interview line:

> Closure is a function bundled with its lexical environment.




---

1️⃣4️⃣ setTimeout context loss

setTimeout(function() {
  console.log(this.x);
});

Output

undefined

Reason

Regular function → new execution context

this becomes global / undefined



---

1️⃣5️⃣ Fix using arrow

setTimeout(() => console.log(this.x));

Reason

Arrow inherits this from surrounding scope



---

1️⃣6️⃣ Default parameters

function test(a = 10, b = a) {
  console.log(a, b);
}
test(undefined, 20);

Output

10 20

Reason

undefined triggers default value

Passed value overrides default



---

1️⃣7️⃣ Method chaining

obj.inc().inc();

Reason

Each method returns this

Enables chaining



---

🧠 MASTER INTERVIEW RULES (Memorize)

this is decided by call-site

Arrow functions inherit this

bind fixes context forever

call/apply set context once

Closures preserve scope

Function declarations hoist fully

Function expressions do not

Methods lose context when detached

