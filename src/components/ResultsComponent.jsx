import React from "react";

export function ResultsComponent({ result, resetGame }) {
  return (
    <div className="results">
      <p>Result: {result}</p>
      <button onClick={resetGame} className="btn btn-primary">Restart</button>
    </div>
  )
}