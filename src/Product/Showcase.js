import React from 'react'
import styled from 'styled-components'

const Showcase = styled.div`
  display: flex;
  overflow-x: scroll;
  margin: 0 -.5rem;
  @media screen and (min-width: 48rem) {
    margin: 0;
  }
`

const ShowcaseImage = styled.img`
  width: 300px;
  height: 400px;
  @media screen and (min-width: 48rem) {
    width: 432px;
    height: 576px;
  }
`

export default function(props) {
  return (
    <Showcase>
      <ShowcaseImage
        src="img/product-showcase1.jpg"
        alt="Long Cotton Gabardine Car Coat"
      />
      <ShowcaseImage
        src="img/product-showcase2.jpg"
        alt="Long Cotton Gabardine Car Coat"
      />
      <ShowcaseImage
        src="img/product-showcase3.jpg"
        alt="Long Cotton Gabardine Car Coat"
      />
      <ShowcaseImage
        src="img/product-showcase4.jpg"
        alt="Long Cotton Gabardine Car Coat"
      />
    </Showcase>
  )
}
