import React, { Component } from 'react';

import './App.css';
import HowItWorks from './components/how-it-works';
import OurServices from './components/our-services';
import WhyUs from './components/why-us';

import mapa from './assets/Mapa_Madrid.png';

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
        <div className="mapa">
          <h1>Zonas de servicio</h1>
          <img src={mapa} alt="mapa zona de servicio"></img>
        </div>
      </div>
    );
  }
}

export default App;
