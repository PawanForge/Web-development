import React, { useState } from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";

export default function App() {
  const [subject, setSubject] = useState("English");

  return (
    <div style={{ backgroundColor: "yellow", padding: 10 }}>
      
      <SubjectContext.Provider value={subject}>
        
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">Select subject</option>
          <option value="Math">Math</option>
          <option value="History">History</option>
          <option value="English">English</option>
        </select>

        <h1>Context API</h1>
        <College />

      </SubjectContext.Provider>
    </div>
  );
}
