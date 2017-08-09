import React, { Component } from 'react'
import styled from 'styled-components'

const ColorButtonComponent = styled.button`
  margin-right: 1rem;
  width: 40px;
  height: 40px;
  font-size: 0;
  border-radius: 50%;
  border: ${props => (props.active ? 'solid 1px #232122' : 'none')};
  background-color: ${props => props.color};
`

function ColorButton(props) {
  return (
    <ColorButtonComponent
      color={props.colorHex}
      active={props.active}
      type="button"
    >
      Select {props.colorName} color
    </ColorButtonComponent>
  )
}

export default ColorButton
