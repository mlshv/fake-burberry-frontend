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
      <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
    </Helmet>
    <Background>
      <section className="container">
        <MediaQuery maxDeviceWidth={breakpoints.lg - 1}>
          <Title>Long Cotton Gabardine Car Coat</Title>
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
            <p>A refined car coat crafted in protective cotton gabardine.</p>
            <p>
              Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and
              breathable fabric that protects against wind and rain.
            </p>
            <p>
              Raglan sleeves and a concealed button closure complement the clean tailored lines.
            </p>
            <p>The piece is finished with a distinctive check undercollar.</p>
            <br />
            <ul>
              <li>
                Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change
                slightly according to size.
              </li>
              <li>Outer: 100% cotton</li>
              <li>Check lining: 100% cotton</li>
              <li>Sleeve lining: 100% viscose</li>
              <li>Buttons: buffalo horn</li>
              <li>Specialist dry clean</li>
              <li>Made in Europe</li>
              <li>Item 39428531</li>
            </ul>
          </Accordion>
        </div>
        <div className="col-lg-8">
          <DescriptionMainImage
            src="img/Long-Cotton-Gabardine-Car-Coat-5.jpg"
            alt="Long Cotton Gabardine Car Coat"
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
