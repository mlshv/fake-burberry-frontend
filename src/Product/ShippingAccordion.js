import React from 'react'
import Accordion from '../common/Accordion'
import {
  AccordionContainer,
  ToggleButton,
  Title,
  Content
} from '../common/Accordion'

const ShippingAccordionContainer = AccordionContainer.extend`
  border-top: none;
  margin-bottom: 1.9375rem;
  @media screen and (min-width: 48rem) {
    margin-bottom: .5rem;
    padding-top: 0;
    padding-bottom: 0;
  }
`

const ShippingAccordionTitle = Title.extend`
  @media screen and (min-width: 48rem) {
    display: none;
  }
`

class ShippingAccordion extends Accordion {
  render() {
    return (
      <ShippingAccordionContainer active={this.state.active}>
        <ToggleButton type="button" onClick={this.toggleActive}>
          <ShippingAccordionTitle>
            {this.props.title}
          </ShippingAccordionTitle>
        </ToggleButton>
        <Content active={this.state.active}>
          {this.props.children}
        </Content>
      </ShippingAccordionContainer>
    )
  }
}

export default ShippingAccordion
