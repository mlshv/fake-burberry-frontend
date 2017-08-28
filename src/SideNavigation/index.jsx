import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import arrowIcon from '../assets/arrow.svg';
import ButtonSelect from './ButtonSelect';

const SideNavigationStyled = styled.section`
  position: absolute;
  width: 0;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 274px;
  transform: translate3d(0, 0, 0);
  overflow: auto;
`;

const Logo = styled.img`
  display: block;
  height: 12px;
  margin: 1rem auto;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;

const Subtitle = styled.h3`
  margin: 0;
  padding-top: .3rem;
  padding-left: .5rem;
  padding-bottom: .4rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: .75rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const Link = styled(NavLink)`
  display: block;
  text-decoration: none;
  padding: .75rem .5rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: .875rem;
  color: #171717;
`;

const SectionLink = Link.extend`
  :: after {
    position: absolute;
    right: 3px;
    width: 12px;
    height: 16px;
    content: '';
    transform: rotate(-90deg);
    background: url(${arrowIcon}) no-repeat;
    background-size: contain;
    background-position: 0 3px;
  }
`;

const Buttons = Block.extend`margin-top: -.25rem;`;

const SideNavigation = props =>
  (<SideNavigationStyled active={props.active}>
    <Logo alt="Logo" src={logo} />
    <Block>
      <nav>
        <SectionLink to="/men">Men</SectionLink>
        <SectionLink to="/women">Women</SectionLink>
        <SectionLink to="/children">Children</SectionLink>
        <SectionLink to="/beauty">Beauty</SectionLink>
      </nav>
    </Block>
    <Block>
      <Subtitle>Customer service</Subtitle>
      <nav>
        <Link to="/contact">Contact Us</Link>
        <Link to="/payment">Payment</Link>
        <Link to="/shipping">Shipping</Link>
        <Link to="/returns">Returns</Link>
        <Link to="/faqs">Faqs</Link>
        <Link to="/the-burberry-app">The Burberry App</Link>
        <Link to="/locator">Store Locator</Link>
      </nav>
    </Block>
    <Block>
      <Subtitle>Our company</Subtitle>
      <nav>
        <Link to="/our-history">Our History</Link>
        <Link to="/burberry-group-pic">Burberry Group Pic</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/corporate-responsibility">Corporate Responsibility</Link>
        <Link to="/site-map">Site Map</Link>
      </nav>
    </Block>
    <Buttons>
      <ButtonSelect
        options={['United Kingdom (£)', 'United States ($)', 'Russian Federation (₽)']}
      />
      <ButtonSelect options={['English', 'Russian', 'Español']} />
    </Buttons>
  </SideNavigationStyled>);

SideNavigation.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default SideNavigation;
