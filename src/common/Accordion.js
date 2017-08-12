import React, { Component } from 'react'
import styled from 'styled-components'
import triangleIcon from '../assets/triangle-down.svg'

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-basis: 100%;
  padding: 2rem 1rem;
  flex-wrap: wrap;
  border-top: 1px solid #c6c6c6;
  @media screen and (min-width: 48rem) {
    border: none;
    border-top: 1px solid transparent;
    padding: 1.5rem .5rem;
  }

  @media screen and (min-width: 62rem) {
    padding-top: 4rem;
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

export const ToggleButton = styled.button`
  display: flex;
  flex-basis: 100%;
  padding: 0;
  justify-content: space-between;
  align-items: baseline;
  border: none;
  background: transparent;
`

export const Title = styled.h2`
  margin: 0;
  text-transform: uppercase;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  @media screen and (min-width: 48rem) {
    margin-bottom: 1rem;
  }
`

export const Content = styled.div`
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
      active: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState((state, props) => ({
      active: !state.active
    }))
  }

  render() {
    return (
      <Container active={this.state.active}>
        <ToggleButton type="button" onClick={this.toggle}>
          <Title>
            {this.props.title}
          </Title>
        </ToggleButton>
        <Content active={this.state.active}>
          {this.props.children}
        </Content>
      </Container>
    )
  }
}

export default Accordion
