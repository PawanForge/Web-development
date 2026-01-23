import { useState } from "react";

function App() {
  const [isSuccess, setIsSuccess] = useState(true);

  return (
    <div className="container mt-5">
      
      {/* Logic-based Bootstrap class */}
      <div className={`alert ${isSuccess ? "alert-success" : "alert-danger"}`}>
        {isSuccess ? "Operation Successful!" : "Something went wrong!"}
      </div>

      <button
        className="btn btn-primary"
        onClick={() => setIsSuccess(!isSuccess)}
      >
        Toggle Status
      </button>
    </div>
  );
}

export default App;
