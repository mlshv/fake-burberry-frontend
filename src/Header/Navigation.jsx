import React from 'react';
import styled, { css } from 'styled-components';
import hamburgerIcon from '../assets/hamburger.svg';

const Navigation = styled.nav`
  display: none;
  justify-content: center;
  @media screen and (min-width: 48rem) {
    display: flex;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 1rem;
  left: .5rem;
  height: 1rem;
  width: 1rem;
  border: none;
  background: url(${hamburgerIcon}) no-repeat;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Link = styled.a`
  padding: 1rem;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  color: #999999;
  ${props =>
    props.active &&
    css`
    color: #171717;
    border-bottom: 1px solid #171717;
  `};
`;

export default () =>
  (<div>
    <Button />
    <Navigation>
      <Link href="#">Women</Link>
      <Link active href="#">
        Men
      </Link>
      <Link href="#">Children</Link>
      <Link href="#">Beauty</Link>
      <Link href="#">Experience</Link>
    </Navigation>
  </div>);
