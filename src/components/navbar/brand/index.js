import React from 'react'
import styled from "styled-components";

import logo from "../../../assets/logoDelundryWhite.png";

const Brand = () => {
  return (
    <Image src={logo} alt="Company Logo" />
  )
}

export default Brand

const Image = styled.img`
  width: 11rem;
  position: absolute;
  left: 3rem;
  top: 1.8rem;

  @media (max-width: 768px) {
    position: absolute;
    right: 1rem;
    top: 1.8rem;
    width: 8rem;
  }
`;