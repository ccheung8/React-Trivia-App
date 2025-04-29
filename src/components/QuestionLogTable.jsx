import React from "react";
import { QuestionLogItem } from "./QuestionLogItem";

export function QuestionLogTable({ questionLog }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Question</th>
          <th>Your Answer</th>
          <th>Correct Answer</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        {questionLog.map((question, index) => {
          return <QuestionLogItem question={question} index={index} />;
        })}
      </tbody>
    </table>
  );
}
