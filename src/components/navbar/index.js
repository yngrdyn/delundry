import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { Link } from 'react-router-dom';

import Brand from "./brand";
import Burger from "./burger";
import Collapse from "./collapse";

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
            <BurgerWrapper>
                <Burger
                navbarState={props.navbarState} 
                handleNavbar={props.handleNavbar}
                />
            </BurgerWrapper>
            <Brand />
            <NavLinks style={linkAnimation}>
                <Link href="/about-us">About us</Link>
                <Link href="/pricing">pricing</Link>
            </NavLinks>
        </FlexContainer>
      </NavBar>
      <Collapse 
        navbarState={props.navbarState} 
        handleNavbar={props.handleNavbar}
      />
   </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  align-items: center;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  position: absolute;
  right: 0;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #352961;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  padding-right: 1rem;

  @media (min-width: 769px) {
    display: none;
  }
`;