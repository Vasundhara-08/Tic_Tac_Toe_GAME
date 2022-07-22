import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  //this is our initial state that will show how we represent our board
  // the above code means take we take two elements and array of 9 elememts and fill it with null
  const [Board, setBoard] = useState(Array(9).fill(null));
  
  //this func will give the current position & we need to implement the logic of logic of our state rg:-0 or x
  const handleSquareClick = position => {
    setBoard(preVal => {
      return preVal.map((square, pos) => {
        if (pos == position) {
          return 'X';
        }
        return square;
      });
    });
  };

  // this will take the position and return the value of each square
  const givesSquareValue = position => {
    return (
      <Square
        value={Board[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {givesSquareValue(0)}
        {givesSquareValue(1)}
        {givesSquareValue(2)}
      </div>
      <div className="board-row">
        {givesSquareValue(3)}
        {givesSquareValue(4)}
        {givesSquareValue(5)}
      </div>
      <div className="board-row">
        {givesSquareValue(6)}
        {givesSquareValue(7)}
        {givesSquareValue(8)}
      </div>
    </div>
  );
};

export default Board;
