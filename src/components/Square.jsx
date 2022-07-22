import React from 'react';

const Square = ({ value ,onClick}) => {
  return (
    // here we use on click so that when we click it shows the value in console
    <button
      type="button"
      className="square"
      onClick={() => {
        console.log(value);
      }}
    >
      {value}
    </button>
  );
};

export default Square;
