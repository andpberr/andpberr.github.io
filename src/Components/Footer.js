import React from 'react';
import logo from '../logo.svg';

function Footer() {
    return (
      <footer className="App-footer">
        <a className="navlink" href="https://www.reactjs.org">
          <img src={logo} className="App-logo" alt="logo" />
          Made with React
        </a>
      </footer>
      );
}

export default Footer;