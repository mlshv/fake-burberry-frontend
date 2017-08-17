import React from 'react';
import styled, { css } from 'styled-components';

const Navigation = styled.nav`
  display: none;
  justify-content: center;
  @media screen and (min-width: 48rem) {
    display: flex;
    margin: 0 auto;
  }
`;

const Link = styled.a`
  padding: 1rem;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1.33;
  color: #999999;
  ${props =>
    props.active &&
    css`
    color: #171717;
    border-bottom: 1px solid #171717;
  `};
`;

export default () =>
  (<Navigation>
    <Link href="#">Women</Link>
    <Link active href="#">
      Men
    </Link>
    <Link href="#">Children</Link>
    <Link href="#">Beauty</Link>
    <Link href="#">Experience</Link>
  </Navigation>);
