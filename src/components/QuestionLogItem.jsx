import React from "react";

export function QuestionLogItem({ question, index }) {
  return (
    <tr key={index}>
      <td
        style={{ textAlign: "left" }}
        dangerouslySetInnerHTML={{ __html: question.question }}
      ></td>
      <td>{question.answer}</td>
      <td>{question.correctAnswer}</td>
      <td>
        {question.answer == question.correctAnswer ? "Correct" : "Incorrect"}
      </td>
    </tr>
  );
}
