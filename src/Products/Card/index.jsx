import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouteLink } from 'react-router-dom';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import Underline from '../../common/Underline';
import LikeButton from './LikeButton';

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
`;

const Link = styled(RouteLink)`
  text-decoration: none;
  color: #171717;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: .25rem;
`;

const Tag = styled.p`
  margin: .5rem 0;
  font-size: .75rem;
  line-height: 1.4;
  @media screen and (min-width: 48rem) {
    line-height: 1.4;
  }
`;

const TagLikeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  margin: 0;
  font-size: .75rem;
  font-weight: 600;
  line-height: 1.4;

  @media screen and (min-width: 48rem) {
    font-size: .875rem;
    line-height: 1.44;
  }

  @media screen and (min-width: 62rem) {
    font-size: 1rem;
    line-height: 1.37;
  }
`;

const Colors = styled.p`
  font-size: .75rem;
  margin: 0;
  margin-top: .5rem;
  line-height: 1.44;
  @media screen and (min-width: 48rem) {
    line-height: 1.4;
  }
  @media screen and (min-width: 62rem) {
    line-height: 1.1;
  }
`;

const Price = styled.p`
  font-size: .75rem;
  margin: 0;
  margin-top: .25rem;
  line-height: 1.4;
  @media screen and (min-width: 62rem) {
    line-height: 1.5;
  }
`;

const Card = props =>
  (<CardStyled>
    <Link to={props.to}>
      <Image src={props.image} />
    </Link>
    <TagLikeWrapper>
      <Tag>
        {props.tag}
      </Tag>
      <LikeButton />
    </TagLikeWrapper>
    <Link to={props.to}>
      <Name>
        {props.name}
      </Name>
    </Link>
    <Colors>
      Available in {' '}
      <Link to={props.to}>
        <Underline>
          {props.colors} colours
        </Underline>
      </Link>
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
  to: PropTypes.string.isRequired,
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
