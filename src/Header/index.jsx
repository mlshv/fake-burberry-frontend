import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import Navigation from './Navigation';

const Logo = styled.img`
  display: block;
  height: 12px;
  margin: 1rem auto;
  @media screen and (min-width: 48rem) {
    margin: 1.5rem auto;
  }
  @media screen and (min-width: 62rem) {
    margin: 2rem auto;
  }
`;

export default () =>
  (<div>
    <header>
      <Link to="/">
        <Logo alt="Logo" src={logo} />
      </Link>
      <Navigation />
    </header>
  </div>);
