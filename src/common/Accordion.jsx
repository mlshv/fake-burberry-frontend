import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import triangleIcon from '../assets/triangle-down.svg';

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
  margin: 0 -.5rem;
  padding: 2rem .5rem;
  border-top: 1px solid #c6c6c6;
  @media screen and (min-width: 48rem) {
    border: none;
    margin: 0;
    padding: 1.5rem 0;
    border-top: 1px solid transparent;
  }

  @media screen and (min-width: 62rem) {
    padding-top: 4rem;
  }

  ::after {
    position: absolute;
    content: url(${triangleIcon});
    right: .5rem;
    ${props => (props.isActive ? 'transform: rotate(180deg);' : '')};
  }
  @media screen and (min-width: 48rem) {
    ::after {
      display: none;
    }
  }
`;

export const ToggleButton = styled.button`
  display: flex;
  flex-basis: 100%;
  padding: 0;
  justify-content: space-between;
  align-items: baseline;
  border: none;
  background: transparent;
`;

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
`;

export const Content = styled.div`
  display: ${props => (props.isActive ? 'block' : 'none')};
  margin-top: 2rem;
  font-size: .875rem;
  line-height: 1.5rem;
  @media screen and (min-width: 48rem) {
    display: flex;
    flex-direction: column;
    margin-top: 0;
  }
  @media screen and (min-width: 62rem) {
    flex-wrap: wrap;
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
`;

class Accordion extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
  }

  state = {
    isActive: false,
  };

  toggle() {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  }

  render() {
    return (
      <Container isActive={this.state.isActive}>
        <ToggleButton type="button" onClick={this.toggle}>
          <Title>
            {this.props.title}
          </Title>
        </ToggleButton>
        <Content isActive={this.state.isActive}>
          {this.props.children}
        </Content>
      </Container>
    );
  }
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Accordion;
