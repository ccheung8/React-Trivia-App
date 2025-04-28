import React from "react";

export function QuestionComponent({ question, onAnswerSelect}) {
  return (
    <div className="question card">
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        <button
          onClick={() => onAnswerSelect("True")}
          className="btn btn-success"
        >
          True
        </button>
        <button
          onClick={() => onAnswerSelect("False")}
          className="btn btn-danger"
        >
          False
        </button>
      </div>
    </div>
  )
}