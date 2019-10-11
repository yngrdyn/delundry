import React from 'react'
import styled from "styled-components";

import { Link } from 'react-router-dom';

import logo from "../../../assets/logoDelundryWhite.png";

const Brand = () => {
  return (
    <Link to="/"><Image src={logo} alt="Delundry logo" /></Link>
  )
}

export default Brand

const Image = styled.img`
  width: 8rem;
  position: absolute;
  left: 3rem;
  top: 1.8rem;
  right: auto;

  @media (max-width: 768px) {
    right: 1rem;
    width: 8rem;
    left: auto;
  }
`;