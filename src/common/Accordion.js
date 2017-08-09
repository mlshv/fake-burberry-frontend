import React, { Component } from 'react'
import styled from 'styled-components'
import triangleIcon from '../assets/triangle-down.svg'

const AccordionContainer = styled.section`
  position: relative;
  display: flex;
  flex-basis: 100%;
  padding: 2rem 1rem;
  flex-wrap: wrap;
  border-top: 1px solid #c6c6c6;
  border-bottom: 1px solid #c6c6c6;
  ${props =>
    props.noTopBorder
      ? `
    border-top: none;
    margin-bottom: 1.9375rem;
  `
      : ''} @media screen and (min-width: 48rem) {
    border: none;
    border-top: 1px solid transparent;
    padding: 1.5rem .5rem;

    ${props =>
      props.noTopBorder
        ? `
      margin-bottom: .5rem;
      padding-top: 0;
      padding-bottom: 0;
    `
        : ''};
  }

  ::after {
    position: absolute;
    content: url(${triangleIcon});
    right: 1rem;
    ${props => (props.active ? 'transform: rotate(180deg);' : '')};
  }
  @media screen and (min-width: 48rem) {
    ::after {
      display: none;
    }
  }
`

const ToggleButton = styled.button`
  display: flex;
  flex-basis: 100%;
  padding: 0;
  justify-content: space-between;
  align-items: baseline;
  border: none;
  background: transparent;
`

const Title = styled.h2`
  margin: 0;
  text-transform: uppercase;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  @media screen and (min-width: 48rem) {
    margin-bottom: 1rem;
    ${props =>
      props.hideMd
        ? `
      display: none;
    `
        : ''};
  }
`

const Content = styled.div`
  display: ${props => (props.active ? `block` : 'none')};
  margin-top: 2rem;
  font-size: .875rem;
  line-height: 1.5rem;
  @media screen and (min-width: 48rem) {
    display: flex;
    flex-direction: column;
    margin-top: 0;
  }

  p,
  ul,
  li {
    margin: 0;
    padding: 0;
    font-size: .875rem;
    line-height: 1.5rem;
    list-style: none;
  }
`

class Accordion extends Component {
  constructor(props) {
    super()
    this.state = {
      active: props.active
    }
    this.toggleActive = this.toggleActive.bind(this)
  }

  toggleActive() {
    this.setState({ active: !this.state.active })
  }

  render() {
    return (
      <AccordionContainer
        active={this.state.active}
        hideTitleMd={this.props.hideTitleMd}
        noTopBorder={this.props.noTopBorder}
      >
        <ToggleButton type="button" onClick={this.toggleActive}>
          <Title hideMd={this.props.hideTitleMd}>
            {this.props.title}
          </Title>
        </ToggleButton>
        <Content active={this.state.active}>
          {this.props.children}
        </Content>
      </AccordionContainer>
    )
  }
}

export default Accordion
