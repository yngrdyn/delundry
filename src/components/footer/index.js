import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import envelope from '../../assets/envelope.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import whatsapp from '../../assets/whatsapp.svg';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
          <div className="footer-container">
            <div className="section">
              <Link to="/about-us">Nosotros</Link>
              <Link to="/faqs">Preguntas Frecuentes</Link>
              <Link to="/terms-and-conditions">Términos y condiciones</Link>
            </div>
            <div className="section">
              <span>Contact Us</span>
              <div className="contact-us-item">
                <img src={whatsapp} alt="icono de whatsapp"></img>
                <span><a href="https://api.whatsapp.com/send?phone=+34555555555">+34 555 555555</a></span>
              </div>
              <div className="contact-us-item">
                <img src={envelope} alt="icono de email"></img>
                <span><a href="mailto:info@iberialaundry.com">info@iberialaundry.com</a></span>
              </div>
              <div className="contact-us-item social">
                <a href="https://www.facebook.com"><img src={facebook} alt="icono de facebook"></img></a>
                <a href="https://www.twitter.com"><img src={twitter} alt="icono de twitter"></img></a>
                <a href="https://www.instagram.com"><img src={instagram} alt="icono de twitter"></img></a>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Footer;
