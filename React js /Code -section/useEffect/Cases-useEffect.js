 useEffect(() => {
  console.log("Component loaded");
}, []);

//Props cahnged //

 useEffect(() => {
  console.log("Prop changed");
}, [props]);

// State changed//

 useEffect(() => {
  console.log("State changed");
}, [count]);

//Start//

useEffect(() => {
  console.log("Start");

  return () => {
    console.log("Cleanup");
  };
}, [])

(Some important points)
/*
useEffect is a React Hook used to handle side effects.
It runs after the component renders.
Side effects include API calls, timers, logging, subscriptions.
The dependency array controls when useEffect runs.
[] → runs once (on mount).
[value] → runs when that value changes.
No dependency array → runs on every render.
useEffect can return a cleanup function.
Cleanup runs when the component unmounts.
Multiple useEffect hooks can be used in one component.*/
