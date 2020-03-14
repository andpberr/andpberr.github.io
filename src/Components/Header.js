import React from 'react';

function Header() {
  return (
    <nav className="App-header">
          <button id="btnMain" className="navlink">Andrew's Site</button>
          <button id="btnProj" className="navlink">Projects</button>
          <button id="btnCont" className="navlink">Contact</button>
    </nav>
  );
}

export default Header;