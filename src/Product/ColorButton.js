import React, { Component } from 'react'
import styled from 'styled-components'

const ColorButton = styled.button`
  margin-right: 1rem;
  width: 40px;
  height: 40px;
  font-size: 0;
  border-radius: 50%;
  border: ${props => (props.active ? 'solid 1px #232122' : 'none')};
  background-color: ${props => props.value};
`

export default function(props) {
  return (
    <ColorButton value={props.value} active={props.active} type="button">
      Select {props.name} color
    </ColorButton>
  )
}