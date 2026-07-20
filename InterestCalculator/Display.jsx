import React, { useState } from "react";
import Amount from "./Principal";
import Rate from "./InterestRate";
import "./INStyle.css";

export default function Display() {
  const [pvalue, setPvalue] = useState("");
  const [rvalue, setRvalue] = useState("");
  const [year, setYear] = useState("");
  const [si, setSI] = useState(0);

  function Calculate() {
    if (!pvalue || !rvalue || !year) {
      alert("Please fill all fields");
      return;
    }

    const result =
      (Number(pvalue) * Number(rvalue) * Number(year)) / 100;

    setSI(result);
    console.log(result);
  }

  function Reset() {
    setPvalue("");
    setRvalue("");
    setYear("");
    setSI(0);
  }

  return (
    <div className="main">
      <h3>Interest Calculator</h3>
      <h1>Total Interest : {si}</h1>

      <Amount value={pvalue} setValue={setPvalue} />

      <br />
      <br />

      <Rate value={rvalue} setValue={setRvalue} />

      <br />
      <br />

      <input
        type="text"
        value={year}
        placeholder="Time period in (year)"
        onChange={(e) => setYear(e.target.value)}
      />

      <br />
      <br />

      <div className="btn-group">
        <button className="calculate" onClick={Calculate}>
          Calculate
        </button>

        <button className="reset" onClick={Reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
