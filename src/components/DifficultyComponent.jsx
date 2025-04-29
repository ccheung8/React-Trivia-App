import React from "react";

export function DifficultyComponent({ setDifficulty }) {
  return (
    <>
      <label htmlFor="triviaDifficulty">Select Difficulty:</label>
      <select
        name="triviaDifficulty"
        onChange={(e) =>
          // leaves blank if difficulty is set to any
          setDifficulty(
            e.target.value == "any" ? "" : "&difficulty=" + e.target.value
          )
        }
      >
        <option value="any">Any Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </>
  );
}
