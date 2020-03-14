import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <p>
          Welcome to my site!
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
