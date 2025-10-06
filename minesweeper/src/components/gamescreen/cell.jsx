import React from "react";

const Cell = ({ cell, handleCellClick, handleRightClick, row, col }) => {
  let classes = "cell-btn";
  if (cell.revealed) classes += " revealed";
  if (cell.mine && cell.revealed) classes += " mine";
  if (cell.adjacentMines > 0 && cell.revealed) {
    classes += ` number-${cell.adjacentMines}`;
  }

  return (
    <button
      onClick={() => handleCellClick(row, col)}
      onContextMenu={(e) => { e.preventDefault(); handleRightClick(row, col); }}
      className={classes}
    >
      {cell.flagged && !cell.revealed
        ? "🚩"
        : cell.revealed && !cell.mine && cell.adjacentMines > 0
        ? cell.adjacentMines
        : ""}
    </button>
  );
};

export default Cell;
