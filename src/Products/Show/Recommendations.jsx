import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../Card';
import Subheading from '../../common/Subheading';

const Recommendations = styled.section`
  padding: 0 .5rem;
  padding-bottom: 3rem;

  @media screen and (min-width: 48rem) {
    padding-right: .5rem;
    padding-bottom: 2rem;
    padding-left: .5rem;
  }
`;

const MoreForYouBlock = styled.div`@media screen and (min-width: 48rem) {display: none;}`;

const LinkStyled = styled(Link)`
  display: block;
  margin-bottom: 1rem;
  line-height: 1.0625rem;
  font-size: .875rem;
  font-style: italic;
  text-decoration: none;
  color: inherit;
`;

export default () =>
  (<Recommendations>
    <Subheading>We recommend</Subheading>
    <div className="row">
      <div className="col-xs-6 col-md-3">
        <Card
          image="/img/recommend1.jpg"
          name="Emroided Hooded Content For Three Lines"
          price={27000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          image="/img/recommend2.jpg"
          name="Relaxed Fit Stretch Jeans Content For Three Lines"
          price={22500}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          image="/img/recommend3.jpg"
          name="Leather and House Check Content For Three Lines"
          price={120000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          image="/img/recommend4.jpg"
          name="Leather Wingtip Check Content For Three Lines"
          price={46000}
          currency="RUB"
        />
      </div>
    </div>
    <MoreForYouBlock>
      <div className="row">
        <div className="col-xs-12">
          <Subheading>More for you</Subheading>
        </div>
        <div className="col-xs-12">
          <LinkStyled to="/">Men&apos;s Black Trench Coats</LinkStyled>
        </div>
        <div className="col-xs-12">
          <LinkStyled to="/">Men&apos;s Short Trench Coats</LinkStyled>
        </div>
        <div className="col-xs-12">
          <LinkStyled to="/">Men&apos;s Long Trench Coats</LinkStyled>
        </div>
      </div>
    </MoreForYouBlock>
  </Recommendations>);
