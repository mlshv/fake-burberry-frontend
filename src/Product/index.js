import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Accordion from '../common/Accordion'
import { MobileTablet, Desktop } from '../common/responsive'
import Showcase from './Showcase'
import MainPanel from './MainPanel'
import ShippingAccordion from './ShippingAccordion'
import DeliveryInfo from './DeliveryInfo'
import Recommendations from './Recommendations'

const Title = styled.h1`
  margin-top: 1rem;
  margin-right: 0;
  margin-bottom: 1rem;
  margin-left: 1rem;
  padding: 0;
  font-size: 1.25rem;
  line-height: 1.2;
  @media screen and (min-width: 48rem) {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    margin-left: .5rem;
  }
  @media screen and (min-width: 62rem) {
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: .5rem;
  }
`

const Details = styled.section`
  display: flex;
  align-items: center;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  box-sizing: border-box;
  background: #d4bdad;
`

const MainImage = styled.img`
  display: block;
  width: 100%;
`

function Product() {
  return (
    <main className="container">
      <Helmet>
        <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
      </Helmet>
      <div className="row">
        <MobileTablet>
          <Title>Long Cotton Gabardine Car Coat</Title>
        </MobileTablet>
      </div>
      <MobileTablet>
        <section className="row">
          <div className="col-xs-12 col-md-7">
            <Showcase />
          </div>
          <div className="col-xs-12 col-md-5">
            <MainPanel />
          </div>
        </section>
      </MobileTablet>
      <Desktop>
        <Details>
          <div className="col-lg-6">
            <MainImage
              src="img/Long-Cotton-Gabardine-Car-Coat-1.jpg"
              srcSet="img/Long-Cotton-Gabardine-Car-Coat-1@2x.jpg 2x, img/Long-Cotton-Gabardine-Car-Coat-1@3x.jpg 3x"
              alt="Long Cotton Gabardine Car Coat"
            />
          </div>
          <div className="col-xs-12 col-md-5 col-lg-6">
            <Title>Long Cotton Gabardine Car Coat</Title>
            <MainPanel />
          </div>
        </Details>
      </Desktop>
      <section className="row">
        <Accordion title="Description">
          <p>A refined car coat crafted in protective cotton gabardine.</p>
          <p>
            Invented by Thomas Burberry in 1879, cotton gabardine is a tightly
            woven and breathable fabric that protects against wind and rain.
          </p>
          <p>
            Raglan sleeves and a concealed button closure complement the clean
            tailored lines.
          </p>
          <p>The piece is finished with a distinctive check undercollar.</p>
          <br />
          <ul>
            <li>
              Coat length: 98cm/38.6in. This is based on a size UK 48 as
              proportions change slightly according to size.
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
        <ShippingAccordion title="Shipping & Returns">
          <DeliveryInfo />
        </ShippingAccordion>
      </section>
      <section className="row">
        <Recommendations />
      </section>
    </main>
  )
}

export default Product
