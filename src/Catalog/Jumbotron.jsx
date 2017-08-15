import React from 'react';
import styled from 'styled-components';
import Filters from './Filters';

const Jumbotron = styled.div`
  padding-top: 2rem;
  padding-left: .5rem;
  padding-right: .5rem;
  background: #f3f3f3;
`;

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.625rem;
  line-height: 1.33;
`;

const Text = styled.p`
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.67;
  opacity: 0.87;
  color: #171717;
`;

export default () =>
  (<Jumbotron>
    <Title>Men’s clothing</Title>
    <Text>
      Explore our menswear collection for the season. Sculptural knitwear, sweatshirts, artist
      overalls and oversized cabans feature alongside our signature trench coat in both heritage.
    </Text>
    <Filters />
  </Jumbotron>);
