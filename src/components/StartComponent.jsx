import React from "react";
import { CategoryComponent } from "./CategoryComponent";
import { DifficultyComponent } from "./DifficultyComponent";

export function StartComponent({ onClick, token, setDifficulty, setCategory }) {
  return (
    <div className="start">
      <div className="dropdowns">
        <DifficultyComponent setDifficulty={setDifficulty} />
        <CategoryComponent setCategory={setCategory} />
      </div>
      <button
        disabled={token == null}
        onClick={onClick}
        className="btn btn-primary"
      >
        Start Game
      </button>
    </div>
  );
}
