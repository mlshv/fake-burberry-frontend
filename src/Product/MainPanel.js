import React from 'react'
import styled from 'styled-components'
import { FormattedNumber } from 'react-intl'
import MediaQuery from 'react-responsive'
import Button from '../common/Button'
import breakpoints from '../common/breakpoints'
import PriceAndId from './PriceAndId'
import ActionButtons from './ActionButtons'
import ColorButton from './ColorButton'
import Size from './Size'
import SizeButton from './SizeButton'

const MainPanel = styled.section`
  margin-top: 1rem;
  padding: 0 .5rem;
  padding-bottom: 3rem;
  @media screen and (min-width: 48rem) {
    margin-top: 0;
    padding: 0;
  }
`

const Title = styled.h1`
  margin: 1rem .5rem;
  margin-left: .5rem;
  padding: 0;
  font-size: 1.25rem;
  line-height: 1.2;
  @media screen and (min-width: 48rem) {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    margin-left: 0;
  }
  @media screen and (min-width: 62rem) {
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: .5rem;
  }
`

const ColorName = styled.p`
  margin: 0;
  margin-top: 1rem;
  margin-left: .5rem;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1rem;
  @media screen and (min-width: 48rem) {
    margin-top: 0;
  }
  @media screen and (min-width: 62rem) {
    margin: 0;
  }
`

const ColorButtons = styled.div`
  margin-top: 1rem;
  @media screen and (min-width: 62rem) {
    margin: 0;
    margin-bottom: .5rem;
  }
`

const DeliveryTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: .25rem;
  line-height: .875rem;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-weight: bold;
`

const DeliveryText = styled.p`
  margin: 0;
  line-height: 1.35;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
`

const Divider = styled.hr`
  margin-top: 2rem;
  border: none;
  border-bottom: 1px solid #c6c6c6;
  @media screen and (min-width: 62rem) {
    display: none;
  }
`

export default () => {
  return (
    <MainPanel>
      <MediaQuery minDeviceWidth={breakpoints.lg - 1}>
        <Title>Long Cotton Gabardine Car Coat Coat Coat Coat Coat</Title>
      </MediaQuery>
      <PriceAndId />
      <div className="row">
        <div className="col-lg-6">
          <ColorName>
            Colour: <b>Honey</b>
          </ColorName>
        </div>
        <MediaQuery minDeviceWidth={breakpoints.lg - 1}>
          <div className="col-lg-6">
            <Size />
          </div>
        </MediaQuery>
      </div>
      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <ColorButtons>
            <ColorButton name="black" value="#232122" />
            <ColorButton name="honey" value="#cfa880" active />
          </ColorButtons>
          <Divider />
        </div>
        <MediaQuery minDeviceWidth={breakpoints.lg - 1}>
          <div className="col-lg-6">
            <SizeButton>S</SizeButton>
            <SizeButton>M</SizeButton>
            <SizeButton>L</SizeButton>
            <SizeButton>XL</SizeButton>
          </div>
        </MediaQuery>
      </div>
      <ActionButtons />
      <MediaQuery minDeviceWidth={breakpoints.lg - 1}>
        <DeliveryTitle>Free Next Day Delivery</DeliveryTitle>
        <DeliveryText>
          Order before 7pm Monday to Thursday for delivery the next Day
        </DeliveryText>
      </MediaQuery>
    </MainPanel>
  )
}
