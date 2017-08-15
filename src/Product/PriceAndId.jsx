import React from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  @media screen and (min-width: 48rem) {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 62rem) {
    margin-bottom: 3rem;
  }
`;

const Price = styled.h2`
  margin: 0;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 1rem;
  line-height: 1.1875rem;
  @media screen and (min-width: 62rem) {
    font-weight: 500;
  }
`;

const Id = styled.p`
  margin: 0;
  font-size: .75rem;
  line-height: .875rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  @media screen and (min-width: 62rem) {
    display: none;
  }
`;

export default () =>
  (<Container>
    <Price>
      <FormattedNumber
        value={110000}
        style="currency" // eslint-disable-line
        currency="RUB"
        currencyDisplay="symbol"
        minimumFractionDigits={0}
      />
    </Price>
    <Id>Item 39428531</Id>
  </Container>);
