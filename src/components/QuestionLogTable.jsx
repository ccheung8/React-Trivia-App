import React from "react";
import { QuestionLogItem } from "./QuestionLogItem";

export function QuestionLogTable({ questionLog }) {
  return (
    <table>
      <tr>
        <th>Question</th>
        <th>Your Answer</th>
        <th>Correct Answer</th>
      </tr>
      {questionLog.map((question, index) => {
        return <QuestionLogItem question={question} index={index} />;
      })}
    </table>
  );
}
