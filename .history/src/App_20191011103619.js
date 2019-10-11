import React from 'react';
import logo from './logoDelundryWhite.png';
import './App.css';
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter basename='/'>
        <header className="top">
          <img src={logo} className="logo" alt="logo" />
          <div className="wrapper">
            <input id="checkbox" type="checkbox" checked disabled/>
            <label htmlFor="checkbox">Laundry day, done.</label>
          </div>
        </header>
    </HashRouter>
  );
}

export default App;
