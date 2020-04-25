import React from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';

const process = require("process");

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'home',
    };
  }

  homeClickHandler() {
    this.setState({
      page: 'home'
    });
  }

  projClickHandler() {
    this.setState({
      page: 'projects'
    });
  }

  contClickHandler() {
    console.log("hokay");
    this.setState({
      page: 'contact'
    });
  }

  resuClickHandler() {
    window.open(process.env.PUBLIC_URL + "/resources/Resume_Berry.pdf");
  }

  render () {
    return (
      <div className="App">
        <Header 
          homeClick={this.homeClickHandler.bind(this)}
          projClick={this.projClickHandler.bind(this)}
          contClick={this.contClickHandler.bind(this)}
          resuClick={this.resuClickHandler.bind(this)}
        
        />
        <div id="main-container">
          <MainContent view={this.state.page} />
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;
