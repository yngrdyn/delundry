import React, { Component } from 'react';

import './App.css';
import HowItWorks from './components/how-it-works';
import OurServices from './components/our-services';

class App extends Component {

  render() {
    return (
      <div>
        <header className="top">
          <div className="wrapper">
            <input id="checkbox" type="checkbox" checked disabled/>
            <label htmlFor="checkbox">Día de lavandería, listo.</label>
          </div>
        </header>
        <HowItWorks></HowItWorks>
        <OurServices></OurServices>
      </div>
    );
  }
}

export default App;
