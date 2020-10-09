import React from 'react';

function Header(props) {
  return (
    <nav className="App-header">
          <div id="btnHome" className="navlink" onClick={props.homeClick}>
            <button className="navlink">
              Andrew Berry
            </button>
          </div>

          <div id="btnProj" className="navlink" onClick={props.projClick}>
            <button className="navlink">
              Projects
            </button>
          </div>

          <div id="btnResu" className="navlink" onClick={props.resuClick}>
            <button className="navlink">
              Resume
            </button>
          </div>

          <div id="btnAbout" className="navlink" onClick={props.abouClick}>
            <button className="navlink">
              About
            </button>
          </div>

          <div id="btnCont" className="navlink" onClick={props.contClick}>
            <button className="navlink">
              Contact
            </button>
          </div>
    </nav>
  );
}

export default Header;