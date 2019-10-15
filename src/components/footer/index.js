import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import whatsapp from '../../assets/whatsapp.svg';
import envelope from '../../assets/envelope.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
          <div className="footer-container">
            <div className="section">
              <span>&nbsp;</span>
              <Link to="/faqs">Preguntas Frecuentes</Link>
              <Link to="/terms-and-conditions">Términos y condiciones</Link>
            </div>
            <div className="section">
              <span>Contact Us</span>
              <div className="contact-us-item">
                <img src={whatsapp} alt="icono de whatsapp"></img>
                <span>+34 555 555555</span>
              </div>
              <div className="contact-us-item">
                <img src={envelope} alt="icono de email"></img>
                <span><a href="mailto:info@iberialaundry.com">info@iberialaundry.com</a></span>
              </div>
              <div className="contact-us-item social">
                <img src={facebook} alt="icono de facebook"></img>
                <img src={twitter} alt="icono de twitter"></img>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Footer;
