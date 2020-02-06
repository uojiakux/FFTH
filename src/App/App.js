import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

// Component imports
// import Drawer from '../components/Drawer/Drawer';
import ResponsiveDrawer from '../components/Drawer/ResponsiveDrawer';
import Footer from '../components/Footer/Footer';
// import Jumbotron from '../components/Jumbotron/Jumbotron';
import ResponsiveJumbotron from '../components/Jumbotron/ResponsiveJumbotron';
import NavBar from '../components/NavBar/NavBar';

// Redux imports 

// import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Mission from '../pages/Mission';
import History from '../pages/History';
// import BoardofDirectors from '../pages/BoardofDirectors';
// import ContactUs from '../pages/ContactUs';

function App() {
  return (
      // <Router>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={openerPicture} className="App-Opener-Picture" alt="Opening-Picture" />
      //     <p>
      //       Welcome to the Beginning of Foundation for the Helpless
      //     </p>
      //   </header>
      //   <Switch>
      //     <Route exact path="/home" component={Home} />
      //     <Route exact path="/aboutus" component={AboutUs} />
      //     <Route exact path="/mission" component={Mission} />
      //     <Route exact path="/history" component={History} />
      //     <Route exact path="/boardofdirectors" component={BoardofDirectors} />
      //     <Route exact path="/contactus" component={ContactUs} />
      //   </Switch>
      // </div>
      // </Router>
  
      <Router>
      <div>
        <h1>Welcome to the Beginning Beginning of Foundation for the Helpless</h1>
        <NavBar />
        <ResponsiveDrawer />
        <ResponsiveJumbotron />
        <Link to={`/aboutus`}>
        <h1>Testing Link to About Us</h1>
        </Link>
        <Link to={`/mission`}>
        <h1>Testing Link to Mission</h1>
        </Link>
        <Link to={`/history`}>
        <h1>Testing Link to History</h1>
        </Link>
        <Footer />

        <Switch>
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/mission" component={Mission} />
        <Route path="/history" component={History} />
        </Switch>

      </div>
      </Router>
  );
}

export default App;
