import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { animated } from 'react-spring';

const Collapse = (props) => {

  if (props.navbarState === true) {
    return (
      <CollapseWrapper>
        <NavLinks>
          <li><Link to="/" onClick={props.handleNavbar}>Inicio</Link></li>
          <li><Link to="/about-us" onClick={props.handleNavbar}>Nosotros</Link></li>
          <li><Link to="/how-we-do-it" onClick={props.handleNavbar}>Cómo lo hacemos?</Link></li>
          <li><Link to="/pricing" onClick={props.handleNavbar}>Precios</Link></li>
          <li><Link to="/contact-us" onClick={props.handleNavbar}>Contáctanos</Link></li>
          <li><Link to="/faqs" onClick={props.handleNavbar}>Preguntas Frecuentes</Link></li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default Collapse;

const CollapseWrapper = styled(animated.div)`
  background: #202040;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 999;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 0rem 1rem 1rem 2rem;

  & li {
    transition: all 300ms linear 0s;
    margin-bottom: 1rem;
  }

  & a {
    font-size: 1.2rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #8d448b;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;