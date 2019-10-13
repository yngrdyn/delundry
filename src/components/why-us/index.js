import React, { Component } from 'react';

import Slider from "react-slick";

import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import medal from '../../assets/medal.svg';
import bubbles from '../../assets/bubbles.svg';

class WhyUs extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 1000,
    };

    return (
      <div className="why-us">
          <h1>Por qué elegrinos?</h1>
          <Slider {...settings}>
            <div className="why">
              <img src={bubbles} alt="icono higiene"></img>
              <span className="title">Higiene</span>
            </div>
            <div className="why">
              <img src={medal} alt="icono alta calidad"></img>
              <span className="title">Alta calidad</span>
            </div>
            <div className="why">
              <span className="title">Precio Insuperable</span>
            </div>
            <div className="why">
              <span className="title">Profesionalismo</span>
            </div>
            <div className="why">
              <span className="title">Conveniencia</span>
            </div>
          </Slider>
      </div>
    );
  }
}

export default WhyUs;
