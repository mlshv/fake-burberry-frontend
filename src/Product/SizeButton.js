import React from 'react'
import styled from 'styled-components'

const SizeButton = styled.button`
  margin-right: .5rem;
  width: 43px;
  height: 32px;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.33;
  border-radius: 2px;
  border: solid 1px #171717;
  background: transparent;
`

export default function(props) {
  return (
    <SizeButton type="button">
      {props.children}
    </SizeButton>
  )
}
