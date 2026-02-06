import React, { useContext } from "react";
import { SubjectContext } from "./ContextData";

export default function Subject() {
  const subject = useContext(SubjectContext);

  return (
    <div style={{ backgroundColor: "white", padding: 10 }}>
      <h1>Subject: {subject}</h1>
    </div>
  );
}
