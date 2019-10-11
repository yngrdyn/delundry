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
            <input id="a11y-issue-1" name="a11y-issues" type="checkbox" checked/>
            <label for="a11y-issue-1">Laundry day, done.</label>
          </div>
        </header>
    </HashRouter>
  );
}

export default App;
