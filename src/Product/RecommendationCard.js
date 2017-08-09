import React, { Component } from 'react'
import styled from 'styled-components'

const RecommendationCardComponent = styled.a`
  display: block;
  margin-bottom: 2rem;
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

const Name = styled.h3`
  margin-top: .5rem;
  margin-bottom: .5rem;
  font-size: 1rem;
  line-height: 1.19;
`

const Price = styled.h5`
  margin: 0;
  line-height: 1.17;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  text-align: left;
  color: #999999;
`

function RecommendationCard(props) {
  return (
    <RecommendationCardComponent>
      <Image alt="" src={props.image} />
      <Name>
        {props.name}
      </Name>
      <Price>
        {props.price}
      </Price>
    </RecommendationCardComponent>
  )
}

export default RecommendationCard
