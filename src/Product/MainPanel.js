import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import ColorButton from './ColorButton'
import SizeHelpButton from './SizeHelpButton'

const MainPanel = styled.section`
  margin-top: 1rem;
  padding: 0 .5rem;
  padding-bottom: 3rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  @media screen and (min-width: 48rem) {
    margin-top: 0;
    padding: 0;
  }
`

const PriceAndIdWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const Price = styled.h2`
  margin: 0;
  font-size: 1rem;
  line-height: 1.1875rem;
`

const Id = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: .875rem;
`

const ColorName = styled.p`
  margin: 1rem 0;
  font-size: 0.75rem;
  line-height: 1rem;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
`
const Divider = styled.hr`
  margin-top: 2rem;
  margin-bottom: 1rem;
  border: none;
  border-bottom: 1px solid #c6c6c6;
`

export default function() {
  return (
    <MainPanel>
      <PriceAndIdWrapper>
        <Price>110 000 руб.</Price>
        <Id>Item 39428531</Id>
      </PriceAndIdWrapper>
      <ColorName>Colour: Honey</ColorName>
      <ButtonContainer>
        <ColorButton name="black" value="#232122" />
        <ColorButton name="honey" value="#cfa880" active />
      </ButtonContainer>
      <Divider />
      <ButtonContainer>
        <Button primary type="button">
          Select a size
        </Button>
        <Button type="button">Find in store</Button>
        <SizeHelpButton type="button">Need size help?</SizeHelpButton>
      </ButtonContainer>
    </MainPanel>
  )
}
