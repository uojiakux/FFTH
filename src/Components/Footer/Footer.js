import React from 'react';
import './Footer.css';

const styles = {
  footerStyle: {
    background: 'green',
    justifyContent: 'flex-end'
  }
};

function Footer() {
  return (
    <div style={styles.footerStyle} className='footer'>
      <a href="/">Welcome</a>
    </div>
  );
}

export default Footer;
