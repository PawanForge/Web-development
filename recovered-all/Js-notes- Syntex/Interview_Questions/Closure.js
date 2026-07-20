function outer() {
  let count = 0;              // outer variable (stored in closure)

  return function inner() {   // inner function forms closure
    count++;                  // accesses & updates outer variable
    console.log(count);       // prints preserved value
  };
}

const fn = outer();           // outer runs once, returns inner
fn();                         // 1
fn();                         // 2
fn();                         // 3
