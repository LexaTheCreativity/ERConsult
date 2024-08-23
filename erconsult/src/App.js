import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo-name">
          <h1>ER consult</h1>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#home">Home</a></li>
          <li className="navbar-item"><a href="#about">About</a></li>
          <li className="navbar-item"><a href="#services">Services</a></li>
          <li className="navbar-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
