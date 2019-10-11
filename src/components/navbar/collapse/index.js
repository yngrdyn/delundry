import React from 'react';
import styled from 'styled-components';

import { animated } from 'react-spring';

const Collapse = (props) => {

  if (props.navbarState === true) {
    return (
      <CollapseWrapper>
        <NavLinks>
          <li><a href="/" onClick={props.handleNavbar}>About us</a></li>
          <li><a href="/" onClick={props.handleNavbar}>Pricing</a></li>
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
  padding: 0rem 1rem 3rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
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