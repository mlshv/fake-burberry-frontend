import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';

const RecommendationCardStyled = styled.a`
  display: block;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Name = styled.h3`
  margin-top: .5rem;
  margin-bottom: .5rem;
  font-size: 1rem;
  line-height: 1.19;
  @media screen and (min-width: 62rem) {
    margin-top: 1rem;
    line-height: 1.67;
    font-size: .75rem;
    font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
    font-weight: 600;
  }
`;

const Price = styled.h5`
  margin: 0;
  line-height: 1.17;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  text-align: left;
  color: #999999;
  @media screen and (min-width: 62rem) {
    line-height: 1.4;
  }
`;

const RecommendationCard = props =>
  (<RecommendationCardStyled>
    <Image alt="" src={props.image} />
    <Name>
      {props.name}
    </Name>
    <Price>
      <FormattedNumber
        value={props.price}
        style="currency" // eslint-disable-line
        currency={props.currency}
        currencyDisplay="symbol"
        minimumFractionDigits={0}
      />
    </Price>
  </RecommendationCardStyled>);

RecommendationCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default RecommendationCard;
