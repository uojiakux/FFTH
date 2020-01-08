import React from 'react';
import openerPicture from '../Images/opener-picture.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={openerPicture} className="App-Opener-Picture" alt="Opening-Picture" />
        <p>
          Welcome to the Beginning of Foundation for the Helpless
        </p>
      </header>
    </div>
  );
}

export default App;
