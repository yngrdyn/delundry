import React, { Component } from 'react';

import mobile from "../../assets/mobile.svg";
import washer from '../../assets/washer.svg';
import dance from '../../assets/dance.svg';

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
            <div className="step">
                <div className="step-img">
                  <img src={mobile} alt="Primer paso"></img>
                </div>
                <div className="step-info">
                  <span>1. Tu haces el pedido</span>
                  <p>Confirma la recogida y nosotros nos encargamos del resto</p>
                </div>
            </div>
            <div className="step">
                <div className="step-img">
                  <img src={washer} alt="Segundo paso"></img>
                </div>
                <div className="step-info">
                  <span>2. Nosotros lavamos</span>
                  <p>Utilizando equipos de máxima calidad y personal especializado en lavandería textil</p>
                </div>
            </div>
            <div className="step">
                <div className="step-img">
                  <img src={dance} alt="Tercer paso"></img>
                </div>
                <div className="step-info">
                  <span>3. Tu te relajas</span>
                  <p>Déjalo en nuestras manos mientras aprovechas tu tiempo al máximo</p>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default HowItWorks;
