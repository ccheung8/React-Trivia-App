import React from "react";

export function StartComponent({ onClick }) {
  return (
    <div className="start">
      <p>Press start</p>
      <button onClick={onClick} className="btn btn-primary">
        Start Game
      </button>
    </div>
  )
}