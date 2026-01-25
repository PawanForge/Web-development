

1️⃣ Selecting Elements

Method	What it does	Example

getElementById	Select element by ID	document.getElementById('myDiv')
querySelector	Select first element by CSS selector	document.querySelector('#myDiv')
querySelectorAll	Select all elements matching CSS selector → NodeList	document.querySelectorAll('div')
getElementsByTagName	Select all elements by tag → HTMLCollection	document.getElementsByTagName('p')


Tip:

NodeList → static (forEach works)

HTMLCollection → live (auto updates)



---

2️⃣ innerHTML vs innerText vs textContent

Property	What it shows	Example

innerHTML	Full HTML inside element	<p>Hello</p>
innerText	Only visible text	Hello
textContent	All text (even hidden)	Hello



---

3️⃣ Attributes vs Properties

<input value="123" id="input1">

Attribute → HTML value → getAttribute('value') → "123"

Property → DOM live value → input.value → changes if user types



---

4️⃣ Events

Concept	Example	Notes

Bubbling	Event goes from child → parent	default
Capturing	Event goes from parent → child	addEventListener(..., true)
stopPropagation()	Stops event from bubbling/capturing	e.stopPropagation()
preventDefault()	Stops browser default action	e.preventDefault()
Event delegation	Attach listener to parent, catch child events	Saves performance



---

5️⃣ DOM Traversal

Property	What it returns

parentNode	parent node
children	only element children
childNodes	all children (text nodes included)
firstChild	first child node
firstElementChild	first element only



---

6️⃣ DOM Manipulation

Method	What it does	Example

appendChild	Add node to end of parent	parent.appendChild(child)
append	Add node or string	parent.append(child, "Hi")
insertBefore	Insert before another node	parent.insertBefore(child, parent.firstChild)
cloneNode(true)	Copy element with children	Deep clone
cloneNode(false)	Copy element only	Shallow clone



---

7️⃣ innerHTML vs DOM performance

innerHTML → slow if used repeatedly on big DOM

Better → create element + appendChild

For many nodes → use DocumentFragment



---

8️⃣ Dataset (custom attributes)

<div data-id="123" data-name="John"></div>

let div = document.querySelector('div');
console.log(div.dataset.id);   // 123
console.log(div.dataset.name); // John

Converts data-* to camelCase

Easier than getAttribute



---

9️⃣ Live vs Static NodeLists

let htmlCol = document.getElementsByTagName('p'); // live
let nodeList = document.querySelectorAll('p');     // static

Live → updates automatically if DOM changes

Static → stays same



---

🔟 DOM Ready vs Window Load

document.addEventListener('DOMContentLoaded', fn); // fires early
window.addEventListener('load', fn);             // after all images/resources

Use DOMContentLoaded → faster



---

Extra Tips / Interview Notes

1. Arrow functions do not have their own this


2. Use event delegation for dynamic elements


3. Know difference innerText / textContent / innerHTML


4. Know difference attribute vs property


5. Minimize reflows → batch DOM changes


6. Use DocumentFragment for multiple inserts




---

✅ Quick Memory Trick for Interviews

Select → getElementById / querySelector / querySelectorAll

Text → innerHTML / innerText / textContent

Attributes → HTML (static) vs DOM (live)

Events → bubbling / capturing / delegation / stopPropagation / preventDefault

Performance → appendChild + fragment > innerHTML
