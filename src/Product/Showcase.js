import React from 'react'
import styled from 'styled-components'

const Showcase = styled.div`
  position: relative;
  right: 50%;
  left: 50%;
  display: flex;
  overflow-x: scroll;
  width: 100vw;
  height: auto;
  margin-right: -50vw;
  margin-left: -50vw;
  @media screen and (min-width: 48rem) {
    position: inherit;
    right: inherit;
    left: inherit;
    width: inherit;
    margin-right: inherit;
    margin-left: inherit;
  }
`

const Image = styled.img`
  width: 100%;
  height: auto;
  @media screen and (min-width: 48rem) {
    flex-shrink: 0;
    width: auto;
    height: 576px;
  }
`

export default function(props) {
  return (
    <Showcase>
      <Image
        src="img/Long-Cotton-Gabardine-Car-Coat-1.jpg"
        srcSet="img/Long-Cotton-Gabardine-Car-Coat-1@2x.jpg 2x, img/Long-Cotton-Gabardine-Car-Coat-1@3x.jpg 3x"
        alt="Long Cotton Gabardine Car Coat"
      />
      <Image
        src="img/Long-Cotton-Gabardine-Car-Coat-2.jpg"
        srcSet="img/Long-Cotton-Gabardine-Car-Coat-2@2x.jpg 2x, img/Long-Cotton-Gabardine-Car-Coat-2@3x.jpg 3x"
        alt="Long Cotton Gabardine Car Coat"
      />
      <Image
        src="img/Long-Cotton-Gabardine-Car-Coat-3.jpg"
        srcSet="img/Long-Cotton-Gabardine-Car-Coat-3@2x.jpg 2x, img/Long-Cotton-Gabardine-Car-Coat-3@3x.jpg 3x"
        alt="Long Cotton Gabardine Car Coat"
      />
      <Image
        src="img/Long-Cotton-Gabardine-Car-Coat-4.jpg"
        srcSet="img/Long-Cotton-Gabardine-Car-Coat-4@2x.jpg 2x, img/Long-Cotton-Gabardine-Car-Coat-4@3x.jpg 3x"
        alt="Long Cotton Gabardine Car Coat"
      />
    </Showcase>
  )
}
