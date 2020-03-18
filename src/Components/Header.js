import React from 'react';
import ProjectList from './ProjectList';

function Header() {
  return (
    <nav className="App-header">
          <div className="navlink-noclick">Andrew's Site</div>
          <div id="project-list-container" className="navlink">
            <div id="btnProj">Projects</div>
              <div className="dropdown-content">
                <ProjectList />
              </div>
            </div>
          <div id="btnCont" className="navlink">Contact</div>
    </nav>
  );
}

export default Header;