import React, { Component } from 'react';

import mobile from "../../assets/mobile.svg";
import './index.css';

class HowItWorks extends Component {
  render() {
    return (
      <div className="how-it-works">
          <div>
            <h1>Cómo funciona?</h1>
            <h3>Llevamos la lavandería hasta tu negocio o tu casa para que ahorres tiempo</h3>
          </div>
          <div className="steps">
              <div className="step-img">
                <img src={mobile} alt="Primer paso"></img>
              </div>
              <div className="step-info">
                <span>1. Haces el pedido</span>
                <p>Confirma la recogida y nosotros nos encargamos del resto</p>
              </div>
          </div>
      </div>
    );
  }
}

export default HowItWorks;
