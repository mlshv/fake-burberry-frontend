import React from 'react';
import styled from 'styled-components';
import Filters from './Filters';

const Jumbotron = styled.div`
  padding-top: 2rem;
  background: #f3f3f3;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  margin-top: 0;
  font-size: 1.625rem;
  line-height: 1.33;
`;

const Text = styled.p`
  margin: 0;
  padding: 0 .5rem;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.67;
  opacity: 0.87;
  color: #171717;
  @media screen and (min-width: 48rem) {
    padding: 0;
  }
`;

export default () =>
  (<Jumbotron>
    <div className="container">
      <Title>Men’s Clothing</Title>
      <div className="row">
        <div className="col-md-9 col-lg-7">
          <Text>
            Explore our menswear collection for the season. Sculptural knitwear, sweatshirts, artist
            overalls and oversized cabans feature alongside our signature trench coat in both
            heritage.
          </Text>
        </div>
      </div>
      <Filters />
    </div>
  </Jumbotron>);
