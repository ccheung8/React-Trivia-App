import React from "react";

export function StartComponent({ onClick, token }) {
  return (
    <div className="start">
      <p>Press start</p>
      <button
        disabled={token == null}
        onClick={onClick}
        className="btn btn-primary"
      >
        Start Game
      </button>
    </div>
  )
}