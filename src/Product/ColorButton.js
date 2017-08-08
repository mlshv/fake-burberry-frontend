import React, { Component } from 'react'
import styled from 'styled-components'

const ColorButtonComponent = styled.button`
  margin-right: 1rem;
  width: 40px;
  height: 40px;
  font-size: 0;
  border-radius: 50%;
  border: ${(props) => props.active ?
    "solid 1px #232122" : "none"
  };
  background-color: ${(props) => props.color};
`

class ColorButton extends Component {
  render() {
    return <ColorButtonComponent color={this.props.colorHex} active={this.props.active} type="button">
      Select {this.props.colorName} color
    </ColorButtonComponent>
  }
}

export default ColorButton
