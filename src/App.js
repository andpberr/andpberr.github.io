import React from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent view="default" />
      <Footer />
    </div>
  );
}

export default App;
