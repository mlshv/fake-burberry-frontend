import React from 'react'
import styled from 'styled-components'

const Navigation = styled.div`
  display: none;

  @media screen and (min-width: 48rem) {
    flex-basis: 100%;
    display: block;
    padding-top: 0;
  }
`

const Link = styled.a`
  display: block;
  margin-bottom: .75rem;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-weight: 600;
  line-height: 1.4;
  text-decoration: none;
  color: #999999;
`

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-weight: bold;
  line-height: .875rem;
  text-transform: uppercase;
`

export default () => {
  return (
    <Navigation>
      <div className="row">
        <div className="col-md-3">
          <Title>Customer Service</Title>
          <nav>
            <Link href="#">Contact us</Link>
            <Link href="#">Payment</Link>
            <Link href="#">Shipping</Link>
            <Link href="#">Returns</Link>
            <Link href="#">Faqs</Link>
            <Link href="#">Live Chat</Link>
            <Link href="#">The Burberry App</Link>
            <Link href="#">Store Locator</Link>
          </nav>
        </div>
        <div className="col-md-3">
          <Title>Our Company</Title>
          <nav>
            <Link href="#">Our History</Link>
            <Link href="#">Burberry Group Pic</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Corporate Responsibility</Link>
            <Link href="#">Site Map</Link>
          </nav>
        </div>
        <div className="col-md-3">
          <Title>Legal & Cookies</Title>
          <nav>
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Cookie Policy</Link>
            <Link href="#">Accessibility Statement</Link>
            <Link href="#">Japan Only - SCTL indications</Link>
          </nav>
        </div>
      </div>
    </Navigation>
  )
}
