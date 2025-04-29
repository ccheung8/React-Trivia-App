import React from "react";
import { QuestionLogTable } from "./QuestionLogTable";

export function ResultsComponent({ questionLog, result, resetGame }) {
  return (
    <div className="results">
      <div className="questionLogContainer">
        <QuestionLogTable
          questionLog={questionLog}
        />
      </div>
      <p>Result: {result}</p>
      <button onClick={resetGame} className="btn btn-primary">
        Restart
      </button>
    </div>
  );
}
