import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../Card';
import Subheading from '../../common/Subheading';

const Recommendations = styled.section`
  flex-basis: 100%;
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
          to="/men/clothing/sample"
          image="https://assets.burberry.com/is/image/Burberryltd/f51a470fc157e3014a115c64276c2e124d9fc477.jpg?$BBY_V2_ML_3X4$&hei=260&wid=195"
          name="Emroided Hooded"
          price={27000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          to="/men/clothing/sample"
          image="https://assets.burberry.com/is/image/Burberryltd/eb872d02449c4050916c9eaf44e266bfdbd32304.jpg?$BBY_V2_ML_3X4$&hei=260&wid=195"
          name="Relaxed Fit Stretch Jeans"
          price={22500}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          to="/men/clothing/sample"
          image="https://assets.burberry.com/is/image/Burberryltd/cfaeb1b3c79aeee09dfda4e26a9fb3f4525df542.jpg?$BBY_V2_SL_3X4$&hei=260&wid=195"
          name="Leather and House Check"
          price={120000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          to="/men/clothing/sample"
          image="https://assets.burberry.com/is/image/Burberryltd/b33127f06e6c404cc3168645e099a9eb71aeca9c.jpg?$BBY_V2_SL_3X4$&hei=260&wid=195"
          name="Leather Wingtip Check"
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
