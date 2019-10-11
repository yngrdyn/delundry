import React, { Component } from 'react';

import bag10 from '../../assets/bag10.svg';
import bag18 from '../../assets/bag18.svg';

import './index.css';

class OurServices extends Component {
  render() {
    return (
      <div className="our-services">
        <h1>Nuestros Servicios</h1>
        <div className="service-list">
            <div className="service left">
                <div className="service-img">
                    <img className="small" src={bag10} alt="Bolsa 10kg"></img>
                    <span></span>
                </div>
                <div className="service-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </div>
            </div>
            <div className="service rigth">
                <div className="service-info">
                    Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </div>
                <div className="service-img">
                    <img src={bag18} alt="Bolsa 18kg"></img>
                    <span></span>
                </div>
            </div>        
        </div>
      </div>
    );
  }
}

export default OurServices;
