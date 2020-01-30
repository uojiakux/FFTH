import React from 'react';
import openerPicture from '../images/second-picture.jpg';
import './SecondApp.css';

function SecondApp() {
  return (
    <div className="SecondApp">
      <header className="SecondApp-header">
        <img src={openerPicture} className="SecondApp-Opener-Picture" alt="Second-Picture" />
        <p>
          Welcome to the Second Beginning of Foundation for the Helpless
        </p>
      </header>
    </div>
  );
}

export default SecondApp;
