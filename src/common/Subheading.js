import React from 'react'
import styled from 'styled-components'

const Subheading = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  padding-bottom: .5rem;
  line-height: 1.1875rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 1rem;
  text-transform: uppercase;
  border-bottom: 1px solid #171717;
  @media screen and (min-width: 48rem) {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 62rem) {
    display: block;
    margin-bottom: 2rem;
    padding-bottom: 0;
    text-align: center;
    border-bottom: none;
  }
`

export default Subheading
