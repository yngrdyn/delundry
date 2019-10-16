import React from 'react'
import styled from "styled-components";

import { Link } from 'react-router-dom';

import './index.css';

import IberiaWash from '../../../assets/IberiaWash.svg';

const Brand = () => {
  return (
    <Link to="/">
      <Logo>
        <Image src={IberiaWash}></Image>
        <span className="text">
          <span>Iberia Wash</span>
          <span>Tu lavado textil online</span>
        </span>
      </Logo>
    </Link>
  )
}

export default Brand

const Image = styled.img`
  width: 3rem;
  margin-top: -1rem;
  @media (max-width: 768px) {
    width: 2.2rem;
  }
`;

const Logo = styled.span`
  width: 17rem;
  position: absolute;
  left: 2rem;
  top: 2rem;
  right: auto;
  color: white;
  font-weight: bold;
  letter-spacing: 0.05rem;
  display: flex;
  font-family: 'Arista';
  font-size: 1.8rem;

  @media (max-width: 768px) {
    top: 2.5rem;
    right: 1rem;
    width: 11rem;
    left: auto;
  }
`;