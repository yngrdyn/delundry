import React, { Component } from 'react';

import Slider from "react-slick";

import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import bubbles from '../../assets/bubbles.svg';
import euro from '../../assets/euro.svg';
import medal from '../../assets/medal.svg';
import professionalism from '../../assets/professionalism.svg';
import sofa from '../../assets/sofa.svg';

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
      swipeToSlide: true,
      swipe: true,
    };

    return (
      <div className="why-us">
          <h1>Por qué elegrinos?</h1>
          <Slider {...settings}>
            <div className="why">
              <img src={bubbles} alt="icono higiene"></img>
              <span className="title">Higiene</span>
              <p className='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam
              </p>
            </div>
            <div className="why">
              <img src={medal} alt="icono alta calidad"></img>
              <span className="title">Alta calidad</span>
              <p className='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam
              </p>
            </div>
            <div className="why">
              <img src={euro} alt="icono precio insuperable"></img>
              <span className="title">Precio Insuperable</span>
              <p className='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam
              </p>
            </div>
            <div className="why">
              <img src={professionalism} alt="icono profesionalismo"></img>
              <span className="title">Profesionalismo</span>
              <p className='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam
              </p>
            </div>
            <div className="why">
              <img src={sofa} alt="icono coneveniencia"></img>
              <span className="title">Conveniencia</span>
              <p className='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam
              </p>
            </div>
          </Slider>
      </div>
    );
  }
}

export default WhyUs;
