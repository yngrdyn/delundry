import React from 'react'
import styled from "styled-components";

import { Link } from 'react-router-dom';

import machine from '../../../assets/washing-machine.svg';

const Brand = () => {
  return (
    <Link to="/">
      <Logo>
        <span>Iberic Laundry</span>
        <Image src={machine}></Image>
      </Logo>
    </Link>
  )
}

export default Brand

const Image = styled.img`
  width: 1rem;
  @media (max-width: 768px) {
    width: 1.1rem;
  }
`;

const Logo = styled.span`
  width: 11rem;
  position: absolute;
  left: 2rem;
  top: 2rem;
  right: auto;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.05rem;
  display: flex;
  justify-content: space-evenly

  @media (max-width: 768px) {
    right: 1rem;
    width: 11rem;
    left: auto;
  }
`;