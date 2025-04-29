import React from "react";
import { QuestionLogTable } from "./QuestionLogTable";

export function ResultsComponent({ questionLog, result, gameState, resetGame }) {
  return (
    <div className="results">
      {gameState == 2 && <h2>Game Over</h2>}
      {gameState == 3 && <h2>You Win!</h2>}
      <div className="questionLogContainer">
        <QuestionLogTable questionLog={questionLog} />
      </div>
      <p>Result: {result}</p>
      <button onClick={resetGame} className="btn btn-primary">
        Restart
      </button>
    </div>
  );
}
