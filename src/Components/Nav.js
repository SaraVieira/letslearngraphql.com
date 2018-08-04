import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`

const Button = styled.button`
  width: 133px;
  height: 49px;
  background-color: #37FF00;
  border: none;
  border-bottom: 3px solid #1B161E;
  font-size: 24px;
  color: #1b161e;
`

export default () => (
    <Nav>
      <Link to="/"><img src={logo} height="48px" width="222px" alt="let's learn graphql" /></Link>
      <Button>Donate</Button>
    </Nav>
);
  

