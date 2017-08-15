import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './assets/logo.svg';

const Header = styled.header`
  padding: 1rem;
  border-bottom: 1px solid #c6c6c6;

  @media screen and (min-width: 48rem) {
    padding: 1.5rem;
  }
  @media screen and (min-width: 62rem) {
    padding: 2rem;
    border-bottom: none;
  }
`;

const Logo = styled.img`
  display: block;
  margin: auto;
  height: 10px;
  @media screen and (min-width: 62rem) {
    height: 16px;
  }
`;

export default () =>
  (<Header>
    <Link to="/">
      <Logo alt="Logo" src={logo} />
    </Link>
  </Header>);
