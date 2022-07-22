import React from "react";
import Board from './components/Board';

import './styles/root.scss';

const App = () => {
  // this return contains a component 
  return(
  <div className="app">
  <h1>TIC TAC TOE </h1>
  <Board />
  </div>      
);
};

export default App;
 