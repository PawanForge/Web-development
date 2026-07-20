

🔁 Loops & Strings – Interview Level Questions


---

Q1: Loop with string indexing

let str = "hello";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

Why it’s asked:
Tests string immutability + indexing with loops.

Output:

h
e
l
l
o

Explanation:

Strings are array-like (indexable).

Loop runs from 0 to length - 1.

str[i] accesses each character.



---

Q2: Reverse a string using loop

let str = "abc";
let result = "";

for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
}
console.log(result);

Why it’s asked:
Classic interview question for loops + string manipulation.

Output:

cba

Explanation:

Start from last index.

Append each character to result.

Strings are immutable → new string is created.



---

Q3: String immutability

let str = "hello";
str[0] = "H";
console.log(str);

Why it’s asked:
Tests understanding of string immutability.

Output:

hello

Explanation:

Strings cannot be modified in place.

str[0] = "H" is ignored silently.



---

Q4: for...of vs for...in

let str = "hi";

for (let i in str) {
    console.log(i);
}

for (let c of str) {
    console.log(c);
}

Why it’s asked:
Tests difference between for...in and for...of.

Output:

0
1
h
i

Explanation:

for...in → iterates over indexes (keys)

for...of → iterates over values (characters)



---

Q5: Loop with break

let str = "javascript";

for (let i = 0; i < str.length; i++) {
    if (str[i] === "s") break;
    console.log(str[i]);
}

Why it’s asked:
Tests loop control (break) with strings.

Output:

j
a
v
a

Explanation:

Loop stops immediately when "s" is found.

break exits the loop completely.



---

Q6: continue with string

let str = "banana";

for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") continue;
    console.log(str[i]);
}

Why it’s asked:
Tests continue behavior.

Output:

b
n
n

Explanation:

continue skips current iteration.

"a" characters are ignored.



---

Q7: Nested loop with string

let str = "ab";

for (let i = 0; i < str.length; i++) {
    for (let j = 0; j <= i; j++) {
        console.log(str[i]);
    }
}

Why it’s asked:
Tests nested loops + string indexing.

Output:

a
b
b

Explanation:

i = 0 → prints "a" once

i = 1 → prints "b" twice



---

Q8: Count vowels

let str = "interview";
let count = 0;

for (let char of str) {
    if ("aeiou".includes(char)) {
        count++;
    }
}
console.log(count);

Why it’s asked:
Real-world string processing question.

Output:

4

Explanation:

for...of loops characters.

includes() checks vowel membership.

In "interview" → i,e,i,e → 4 vowels.



---

Q9: while loop with string

let str = "abc";
let i = 0;

while (i < str.length) {
    console.log(str[i]);
    i++;
}

Why it’s asked:
Tests while loop control with strings.

Output:

a
b
c

Explanation:

Same logic as for, but manual control of index.



---

Q10: Tricky loop

for (let i = 0; i < "hello"; i++) {
    console.log(i);
}

Why it’s asked:
Tests type coercion in loop condition.

Output:

(no output)

Explanation:

"hello" → NaN in numeric comparison

i < NaN is always false

Loop never runs.



---

Q11: String comparison in loop

let str = "abc";

for (let i = 0; i < str.length; i++) {
    if (str[i] > "a") {
        console.log(str[i]);
    }
}

Why it’s asked:
Tests lexicographical (Unicode) comparison.

Output:

b
c

Explanation:

String comparison uses Unicode values.

"b" and "c" are greater than "a".



---

Q12: Loop + reassignment

let str = "hi";

for (let i = 0; i < 2; i++) {
    str += "!";
}
console.log(str);

Why it’s asked:
Tests string reassignment inside loops.

Output:

hi!!

Explanation:

Strings are immutable → new string created each time.

+= reassigns str.



---

✅ Interview Takeaways (Memorize This)

Strings are immutable

for...of → characters

for...in → indexes

break → exit loop

continue → skip iteration

String comparison is Unicode-based

Loops don’t auto-convert non-numeric conditions safely
