import React from 'react';
import './App.css';
import Board from './board/Board.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Checkers-React</p>
        <Board />
      </header>
    </div>
  );
}

export default App;
