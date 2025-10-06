import React from 'react';
import Cell from './cell';

const Board = ({ grid, handleCellClick, handleRightClick }) => {
  return (
    <div className="board">
      {grid?.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <Cell
              key={colIndex}
              cell={cell}
              handleCellClick={handleCellClick}
              handleRightClick={handleRightClick}
              row={rowIndex}
              col={colIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;