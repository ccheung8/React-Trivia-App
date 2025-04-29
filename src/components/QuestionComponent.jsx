import React from "react";

export function QuestionComponent({ question, onAnswerSelect, counter}) {
  return (
    <div className="question card">
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <p>{counter > 0 ? counter : "Answer!"}</p>
      <div>
        <button
          disabled={counter > 0}
          onClick={() => onAnswerSelect("True")}
          className="btn btn-success"
        >
          True
        </button>
        <button
          disabled={counter > 0}
          onClick={() => onAnswerSelect("False")}
          className="btn btn-danger"
        >
          False
        </button>
      </div>
    </div>
  )
}