// ========================================
// 📌 JavaScript Arrays – Complete Notes
// ========================================

// 1. Create Array
let numbers = [10, 20, 30, 40];

// 2. Access by index
console.log(numbers[0]); // 10

// 3. Length of array
console.log("Length:", numbers.length);

// 4. push() → Add at end
numbers.push(50);
console.log(numbers);

// 5. pop() → Remove from end
numbers.pop();
console.log(numbers);

// 6. unshift() → Add at start
numbers.unshift(5);
console.log(numbers);

// 7. shift() → Remove from start
numbers.shift();
console.log(numbers);

// 8. forEach() → Loop
numbers.forEach((num) => {
  console.log("forEach:", num);
});

// 9. map() → Create new array
let double = numbers.map((num) => num * 2);
console.log("Map:", double);

// 10. filter() → Condition
let greater = numbers.filter((num) => num > 20);
console.log("Filter:", greater);

// 11. reduce() → Combine values
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Reduce Sum:", sum);

// 12. find() → First match
let found = numbers.find((num) => num > 25);
console.log("Find:", found);

// 13. includes() → Check value
console.log(numbers.includes(20));

// 14. sort()
numbers.sort();
console.log("Sorted:", numbers);

// 15. reverse()
numbers.reverse();
console.log("Reverse:", numbers);
