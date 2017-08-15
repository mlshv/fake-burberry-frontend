import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';

const CardStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 2rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: .5rem;
`;

const Tag = styled.p`
  margin: .5rem 0;
  font-size: .75rem;
`;

const Name = styled.h3`
  margin: 0;
  font-size: .75rem;
  font-weight: 600;
`;

const Colors = styled.p`
  font-size: .75rem;
  margin: 0;
  margin-top: .5rem;
`;

const Price = styled.p`
  font-size: .75rem;
  margin: 0;
  margin-top: .25rem;
`;

const Card = props =>
  (<CardStyled>
    <Image src={props.image} />
    <Tag>
      {props.tag}
    </Tag>
    <Name>
      {props.name}
    </Name>
    <Colors>
      Available in <u>{props.colors} colours</u>
    </Colors>
    <Price>
      <FormattedNumber
        value={props.price}
        style="currency" // eslint-disable-line
        currency="RUB"
        currencyDisplay="symbol"
        minimumFractionDigits={0}
      />
    </Price>
  </CardStyled>);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  colors: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;
