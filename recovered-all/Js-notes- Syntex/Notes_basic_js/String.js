// ========================================
// 📌 JavaScript Strings – Complete Notes
// ========================================

let text = "  Hello JavaScript World  ";

// 1. length
console.log(text.length);

// 2. toUpperCase()
console.log(text.toUpperCase());

// 3. toLowerCase()
console.log(text.toLowerCase());

// 4. trim()
let cleanText = text.trim();
console.log(cleanText);

// 5. includes()
console.log(cleanText.includes("JavaScript"));

// 6. slice()
console.log(cleanText.slice(6, 16));

// 7. replace()
console.log(cleanText.replace("World", "User"));

// 8. split()
let words = cleanText.split(" ");
console.log(words);

// 9. concat()
let msg = "Welcome ".concat("to ", "JS");
console.log(msg);
