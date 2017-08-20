import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import Accordion from '../../common/Accordion';
import breakpoints from '../../common/breakpoints';
import Showcase from './Showcase';
import MainPanel from './MainPanel';
import Gallery from './Gallery';
import ShippingAccordion from './ShippingAccordion';
import DeliveryInfo from './DeliveryInfo';
import Recommendations from './Recommendations';

const Background = styled.div`@media screen and (min-width: 62rem) {background-color: #d4bdad;}`;

const Title = styled.h1`
  margin-top: 2.125rem;
  margin-bottom: 1rem;
  padding: 0;
  font-size: 1.25rem;
  line-height: 1.2;
  @media screen and (min-width: 48rem) {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  @media screen and (min-width: 62rem) {
    margin: 0;
    margin-bottom: .5rem;
    font-size: 1.5rem;
  }
`;

const DescriptionMainImage = styled.img`
  display: none;
  width: 100%;
  margin-top: 4rem;
  @media screen and (min-width: 62rem) {
    display: block;
  }
`;

export default () =>
  (<main>
    <Helmet>
      <title>Lightweight Grainy Nubuck Trench Coat | Men - Burberry</title>
    </Helmet>
    <Background>
      <section className="container">
        <MediaQuery maxDeviceWidth={breakpoints.lg - 1}>
          <Title>Lightweight Grainy Nubuck Trench Coat</Title>
        </MediaQuery>
        <div className="row middle-lg">
          <div className="col-xs-12 col-md-7 col-lg-6">
            <Showcase />
          </div>
          <div className="col-xs-12 col-md-5 col-lg-6">
            <MainPanel />
          </div>
        </div>
      </section>
    </Background>
    <section className="container">
      <div className="row">
        <div className="col-xs-12 col-lg-4">
          <Accordion title="Description">
            <p>
              A trench coat made in Italy from ultra-light nubuck, buffed on the grain side for a
              velvety-soft and supple feel.
            </p>
            <p>The classically cut design is refined with neat painted edges.</p>
            <br />
            <ul>
              <li>
                Coat length: 100cm/39.4in. This is based on a size IT 48 as proportions change
                slightly according to size.
              </li>
              <li>Model’s height: 191cm/6ft 3in</li>
              <li>Outer: 100% calf suede</li>
              <li>Lining: 51% viscose, 49% acetate</li>
              <li>Sleeve lining: 100% viscose</li>
              <li>Buckle: 100% calf suede</li>
              <li>Double-breasted button closure</li>
              <li>Button-through pockets</li>
              <li>
                Signature details: epaulettes, hook-and-eye collar closure, gun flap, belted cuffs,
                D-ring belt, storm shield
              </li>
              <li>Specialist leather clean</li>
              <li>Made in Italy</li>
              <li>Item 39428531</li>
            </ul>
          </Accordion>
        </div>
        <div className="col-lg-8">
          <DescriptionMainImage
            src="https://assets.burberry.com/is/image/Burberryltd/320347e75c92dab46a0322f371ca96e1e7a9b5f1.jpg?$BBY_V2_SL_3X4$&hei=800&wid=600"
            alt="Lightweight Grainy Nubuck Trench Coat"
          />
        </div>
      </div>
      <MediaQuery minDeviceWidth={breakpoints.lg}>
        <div className="row">
          <Gallery />
        </div>
      </MediaQuery>
      <ShippingAccordion title="Shipping & Returns">
        <DeliveryInfo />
      </ShippingAccordion>
      <section className="row">
        <Recommendations />
      </section>
    </section>
  </main>);
