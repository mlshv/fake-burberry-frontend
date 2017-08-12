import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

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
  @media screen and (min-width: 62rem) {
    overflow: hidden;
  }
`

const Image = styled.img`
  height: 400px;
  @media screen and (min-width: 48rem) {
    height: 576px;
  }
  @media screen and (min-width: 62rem) {
    height: 651px;
  }
`

export default props => {
  return (
    <Showcase>
      <Image
        src="img/Long-Cotton-Gabardine-Car-Coat-1@3x.jpg"
        alt="Long Cotton Gabardine Car Coat"
      />
      <MediaQuery maxDeviceWidth={991}>
        <Image
          src="img/Long-Cotton-Gabardine-Car-Coat-2@3x.jpg"
          alt="Long Cotton Gabardine Car Coat"
        />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={991}>
        <Image
          src="img/Long-Cotton-Gabardine-Car-Coat-3@3x.jpg"
          alt="Long Cotton Gabardine Car Coat"
        />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={991}>
        <Image
          src="img/Long-Cotton-Gabardine-Car-Coat-4@3x.jpg"
          alt="Long Cotton Gabardine Car Coat"
        />
      </MediaQuery>
    </Showcase>
  )
}
