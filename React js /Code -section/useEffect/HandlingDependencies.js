
//..... 
1️⃣ Run once (on mount)
Jsx
useEffect(() => {
  console.log("Component mounted");
}, []);

//........

2️⃣ Run when a state changes
Copy code
Jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Count changed:", count);
}, [count]);

//........

3️⃣ Run when a prop changes
Copy code
Jsx
function Child({ name }) {
  useEffect(() => {
    console.log("Name prop changed:", name);
  }, [name]);
}

//........

4️⃣ Run on every render
Copy code
Jsx
useEffect(() => {
  console.log("Runs every render");
});

//........

5️⃣ Cleanup example with dependency
Copy code
Jsx
useEffect(() => {
  const timer = setInterval(() => console.log("Tick"), 1000);

  return () => clearInterval(timer); // cleanup before next effect or unmount
}, []); // or [someDependency]
