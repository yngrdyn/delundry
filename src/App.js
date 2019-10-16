import React, { Component } from 'react';

import './App.css';
import HowItWorks from './components/how-it-works';
import OurServices from './components/our-services';
import WhyUs from './components/why-us';

class App extends Component {

  render() {
    return (
      <div className="root">
        <header className="top">
          <div className="wrapper">
            <input id="checkbox" type="checkbox" checked disabled/>
            <label htmlFor="checkbox">Lavanderia a domicilio los 7 días de la semana</label>
          </div>
        </header>
        <HowItWorks></HowItWorks>
        <OurServices></OurServices>
        <WhyUs></WhyUs>
      </div>
    );
  }
}

export default App;
