import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import breakpoints from '../common/breakpoints';
import DropdownButton from '../common/DropdownButton';
import logo from '../assets/logo.svg';
import hamburgerIcon from '../assets/hamburger.svg';
import Navigation from './Navigation';

const Logo = styled.img`
  display: block;
  height: 12px;
  margin: 1rem auto;
  @media screen and (min-width: 48rem) {
    margin: 1.5rem auto;
    height: 16px;
  }
  @media screen and (min-width: 62rem) {
    margin: 2rem auto;
  }
`;

const HamburgerButton = styled.button`
  height: 1rem;
  width: 1rem;
  margin-top: 1rem;
  background: url(${hamburgerIcon}) no-repeat;
  border: none;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const LocationSelector = DropdownButton.extend`
  margin: 0;
  @media screen and (min-width: 48rem) {
    margin: 0;
  }
`;

export default () =>
  (<div className="container">
    <header className="row">
      <div className="col-xs-2 col-md-4">
        <HamburgerButton />
        <MediaQuery minDeviceWidth={breakpoints.md}>
          <LocationSelector>Shopping in: United Kingdom (£)</LocationSelector>
        </MediaQuery>
      </div>
      <div className="col-xs-8 col-md-4">
        <Link to="/">
          <Logo alt="Logo" src={logo} />
        </Link>
      </div>

      <Navigation />
    </header>
  </div>);
