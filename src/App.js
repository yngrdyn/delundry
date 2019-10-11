import React, { Component } from 'react';

import './App.css';
import HowItWorks from './components/how-it-works';

class App extends Component {

  render() {
    return (
      <div>
        <header className="top">
          <div className="wrapper">
            <input id="checkbox" type="checkbox" checked disabled/>
            <label htmlFor="checkbox">Día de lavandería, hecho.</label>
          </div>
        </header>
        <HowItWorks></HowItWorks>
      </div>
    );
  }
}

export default App;
