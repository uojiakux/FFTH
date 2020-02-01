import React from 'react';
import './NavBar.css';

const styles = {
  navbarStyle: {
    background: 'green',
    justifyContent: 'flex-end'
  }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function NavBar() {
  return (
    <nav style={styles.navbarStyle} className='navbar'>
    </nav>
  );
}

export default NavBar;
