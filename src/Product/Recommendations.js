import React, { Component } from 'react'
import RecommendationCard from './RecommendationCard'
import Subheading from '../common/Subheading'
import styled from 'styled-components'

const Recommendations = styled.section`
  padding-top: 0;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-bottom: 3rem;

  @media screen and (min-width: 48rem) {
    padding-right: .5rem;
    padding-bottom: 2rem;
    padding-left: .5rem;
  }
`

const MoreForYouBlock = styled.div`
  @media screen and (min-width: 48rem) {
    display: none;
  }
`

const Link = styled.a`
  display: block;
  margin-bottom: 1rem;
  line-height: 1.0625rem;
  font-size: .875rem;
  font-style: italic;
  text-decoration: none;
  color: inherit;
`

export default function() {
  return (
    <Recommendations>
      <Subheading>We recommend</Subheading>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <RecommendationCard
            image="img/recommend1.jpg"
            name="Emroided Hooded Content For Three Lines"
            price="27 000 руб."
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <RecommendationCard
            image="img/recommend2.jpg"
            name="Relaxed Fit Stretch Jeans Content For Three Lines"
            price="22 500 руб."
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <RecommendationCard
            image="img/recommend3.jpg"
            name="Leather and House Check Content For Three Lines"
            price="120 000 руб."
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <RecommendationCard
            image="img/recommend4.jpg"
            name="Leather Wingtip Check Content For Three Lines"
            price="46 000 руб."
          />
        </div>
      </div>
      <MoreForYouBlock>
        <div className="row">
          <div className="col-xs-12">
            <Subheading>More for you</Subheading>
          </div>
          <div className="col-xs-12">
            <Link className="product-recommendations-link" href="#">
              Men's Black Trench Coats
            </Link>
          </div>
          <div className="col-xs-12">
            <Link href="#">Men's Short Trench Coats</Link>
          </div>
          <div className="col-xs-12">
            <Link href="#">Men's Long Trench Coats</Link>
          </div>
        </div>
      </MoreForYouBlock>
    </Recommendations>
  )
}
