import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Routes,
  Route, Link
} from "react-router-dom";
import AdminLogin from './adminlogin';
import Kontakt from './kontakt';
import ReferanseProsjekt from './referansepro';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
      <h1>
          <Link to="/" className="navbar-header-link">ER consult</Link>
        </h1>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/kontakt">Kontakt</Link>
          </li>
          <li className="navbar-item">
            <Link to="/referanseprosjekt">Referanse prosjekt</Link>
          </li>
          <li className="admin-login-item">
            <Link to="/adminlogin">Admin logg inn</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/referanseprosjekt" element={<ReferanseProsjekt />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1 className="header-name">ER consult</h1>
      <div className="info-erconsult">
        <p>Hvem er vi?</p>
        <p>Info om bedriften ... etc</p>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}




/*import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Routes,
  Route
} from "react-router-dom";
import AdminLogin from './adminlogin';
import Kontakt from './kontakt';


function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1>ER consult</h1>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#home">Kontakt</a></li>
          <li className="navbar-item"><a href="#about">Referanse prosjekt</a></li>
          <li className="admin-login-item"><a href="#adminlogin">Admin logg inn</a></li>
        </ul>

        <Router>
                <MyButton to="" />
                <MyButton to="Kontakt" />
                <MyButton to="AdminLogin" />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Kontakt"
                        element={<Kontakt />} />
                    <Route path="/AdminLogin"
                        element={<AdminLogin />} />
                </Routes>
            </Router>




      </nav>
      <h1 className="header-name">ER consult</h1>
      <div className="info-erconsult">
        <p>Hvem er vi?</p>
        <p>Info om bedriften ... etc</p>
      </div>
    </div>
  );
}

export default App;*/
