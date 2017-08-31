import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import LocationSelector from './LocationSelector';
import LanguageSelector from './LanguageSelector';

const Footer = styled.footer`
  background: #f3f3f3;
  padding-top: 1rem;
  padding-bottom: 2rem;

  @media screen and (min-width: 48rem) {
    display: flex;
    flex-wrap: wrap;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  @media screen and (min-width: 62rem) {
    padding-top: 4rem;
    padding-bottom: 3rem;
  }
`;

const Subtitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  line-height: 1.1875rem;
  font-size: 1rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-weight: bold;
  text-align: center;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const CenteredLink = styled.a`
  display: block;
  font-size: .875rem;
  line-height: 1.0625rem;
  font-family: 'Lora', serif;
  font-style: italic;
  text-decoration: none;
  text-align: center;
  color: inherit;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const sampleLocations = ['Russian Federation', 'United Kingdom', 'United States'];
const sampleLanguages = ['English', 'Russian', 'Español'];

export default () =>
  (<Footer>
    <div className="container">
      <Navigation />
      <LocationSelector locations={sampleLocations} />
      <LanguageSelector languages={sampleLanguages} />
      <Subtitle>Need help?</Subtitle>
      <CenteredLink href="#">Find out more and contact us</CenteredLink>
    </div>
  </Footer>);
