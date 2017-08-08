import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  display: none;
  margin: 0;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.18rem;
@media screen and (min-width: 48rem) {
  display: block;
}
`

const Subtitle = styled.h3`
  margin: 0;
  margin-bottom: .25rem;
  line-height: .875rem;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-weight: bold;
`

const Text = styled.p`
  margin-bottom: 1.5rem!important;
  line-height: 1.35!important;
  font-size: .75rem!important;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
`

const Image = styled.img`
  display: block;
  width: 100%;
`

class DeliveryInfo extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-7">
          <Image alt="Gift packaging demo" src="img/shipping-box.jpg" />
        </div>
        <div className="col-md-5">
          <Title>Delivery</Title>
          <Subtitle>Free Next Day Delivery</Subtitle>
          <Text>Order before 7pm Monday to Thursday for delivery the next day</Text>

          <Subtitle>Collect-in-Store</Subtitle>
          <Text>Order online today and pick up your items in store as early as tomorrow</Text>

          <Subtitle>Free Returns</Subtitle>
          <Text>Enjoy free returns on your order</Text>

          <Subtitle>Free Gift Packaging</Subtitle>
          <Text>Discover our gift packaging, a gold lined box tied with a coloured ribbon</Text>
        </div>
      </div>
    )
  }
}

export default DeliveryInfo
