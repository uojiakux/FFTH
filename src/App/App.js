import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import openerPicture from '../images/opener-picture.jpg';
import './App.css';

// Redux imports 

import Home from '../pages/Home';
// import AboutUs from '..pages/AboutUs';
// import Mission from '../pages/Mission';
// import History from '..pages/History';
// import BoardofDirectors from '..pages/BoardofDirectors';
// import ContactUs from '..pages/ContactUs';

function App() {
  return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={openerPicture} className="App-Opener-Picture" alt="Opening-Picture" />
          <p>
            Welcome to the Beginning of Foundation for the Helpless
          </p>
        </header>
        <Switch>
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/mission" component={Mission} />
          <Route exact path="/history" component={History} />
          <Route exact path="/boardofdirectors" component={BoardofDirectors} />
          <Route exact path="/contactus" component={ContactUs} /> */}
        </Switch>
      </div>
      </Router>
  );
}

export default App;
