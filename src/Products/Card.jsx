import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import heartIcon from '../assets/heart.svg';

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
  line-height: 1.44;
  @media screen and (min-width: 48rem) {
    line-height: 1.4;
  }
`;

const Like = styled.button`
  padding: 1rem .4375rem;
  content: " ";
  border: none;
  background: url(${heartIcon}) no-repeat center;
`;

const TagLikeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  margin: 0;
  font-size: .75rem;
  font-weight: 600;
  line-height: 1.33;

  @media screen and (min-width: 48rem) {
    font-size: .875rem;
    line-height: 1.44;
  }

  @media screen and (min-width: 62rem) {
    font-size: 1rem;
    line-height: 1.2;
  }
`;

const Colors = styled.p`
  font-size: .75rem;
  margin: 0;
  margin-top: .5rem;
  line-height: 1.67;
  @media screen and (min-width: 48rem) {
    line-height: 1.4;
  }
`;

const Underline = styled.span`border-bottom: 1px solid #171717;`;

const Price = styled.p`
  font-size: .75rem;
  margin: 0;
  margin-top: .25rem;
  @media screen and (min-width: 48rem) {
    line-height: 1.4;
  }
`;

const Card = props =>
  (<CardStyled>
    <Image src={props.image} />
    <TagLikeWrapper>
      <Tag>
        {props.tag}
      </Tag>
      <Like />
    </TagLikeWrapper>
    <Name>
      {props.name}
    </Name>
    <Colors>
      Available in <Underline>{props.colors} colours</Underline>
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
  colors: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

Card.defaultProps = {
  tag: 'New in',
  colors: 3,
};

export default Card;
