import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import breakpoints from '../common/breakpoints';
import logo from '../assets/logo.svg';
import hamburgerIcon from '../assets/hamburger.svg';
import Navigation from './Navigation';
import LocationSelector from './LocationSelector';

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
  outline: none;
  border: none;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Header = props =>
  (<div>
    <div className="container">
      <header className="row">
        <div className="col-xs-2 col-md-4">
          <HamburgerButton onClick={props.onHamburgerClick} />
          <MediaQuery minDeviceWidth={breakpoints.md}>
            <LocationSelector />
          </MediaQuery>
        </div>
        <div className="col-xs-8 col-md-4">
          <Link to="/">
            <Logo alt="Logo" src={logo} />
          </Link>
        </div>
        <div className="col-xs-12">
          <MediaQuery minDeviceWidth={breakpoints.md}>
            <Navigation />
          </MediaQuery>
        </div>
      </header>
    </div>
  </div>);

Header.propTypes = {
  onHamburgerClick: PropTypes.func.isRequired,
};

export default Header;
