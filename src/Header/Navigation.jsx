import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.nav`
  display: none;
  @media screen and (min-width: 48rem) {
    display: flex;
    justify-content: center;
  }
`;

const Link = styled(NavLink)`
  padding: 1rem;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1.34;
  letter-spacing: 1.5px;
  color: #999999;
  &.active {
    padding-bottom: 1px;
    color: #171717;
    border-bottom: 1px solid #171717;
  }
`;

export default () =>
  (<Navigation>
    <Link to="/women">Women</Link>
    <Link to="/men">Men</Link>
    <Link to="/children">Children</Link>
    <Link to="/beauty">Beauty</Link>
    <Link to="/experience">Experience</Link>
  </Navigation>);
