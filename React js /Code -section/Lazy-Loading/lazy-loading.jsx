import { lazy, Suspense, useState } from "react";

// Lazy Loading Component
const User = lazy(() => import("./User"));

function LazyLoading() {
  const [load, setLoad] = useState(false);

  return (
    <>
      <h1>Lazy Loading</h1>

      {load ? (
        <Suspense fallback={<h3>Loading.....</h3>}>
          <User />
        </Suspense>
      ) : null}
      {load?<User/>:null}
      <button onClick={() => setLoad(true)}>
        Load User
      </button>
    </>
  );
}

export default LazyLoading;
