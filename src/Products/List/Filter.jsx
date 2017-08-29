import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import arrowIcon from '../../assets/arrow.svg';

const FilterStyled = styled.div`
  display: inline-block;
  margin-left: 1.0625rem;
  &:first-child {
    margin-left: 0;
  }

  @media screen and (min-width: 48rem) {
    position: relative;
    margin-left: 3.0625rem;
    &:first-child {
      margin-left: 0;
    }
  }
  align-self: flex-start;
`;

const Button = styled.button`
  padding: 1.5rem 0;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.33;
  border: none;
  background: transparent;
  cursor: pointer;

  ${props =>
    props.dimmed &&
    css`
    opacity: 0.5;
  `};

  @media screen and (min-width: 48rem) {
    line-height: 1.44;
  }

  ::after {
    display: inline-block;
    width: 12px;
    height: 6px;
    margin-left: .5rem;
    background: url(${arrowIcon});
    background-size: cover;
    content: " ";
    ${props =>
    props.active &&
      css`
      transform: rotate(180deg);
    `};
  }
`;

const Content = styled.div`
  position: absolute;
  top: 100%;
  left: -.5rem;
  right: -.5rem;
  z-index: 1;
  display: block;
  padding: 1.5rem;
  padding-top: .875rem;
  box-sizing: border-box;
  line-height: 1rem;
  white-space: initial;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial;
  font-size: .75rem;
  background: #f3f3f3;
  @media screen and (min-width: 48rem) {
    left: inherit;
    right: inherit;
    ${props => (props.rightSideAlign ? 'right: -1.5rem;' : 'left: -1.5rem;')};
  }
`;

class Filter extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  state = {
    active: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, true);
  }

  handleOutsideClick(e) {
    if (this.node && !this.node.contains(e.target)) {
      this.toggle(false);
    }
  }

  toggle(on = true) {
    if (on === false && on === this.state.active) return;
    this.setState(
      () => ({ active: !this.state.active }),
      () => this.props.onToggle(this.state.active),
    );
  }

  render() {
    return (
      <FilterStyled>
        <div
          ref={(node) => {
            this.node = node;
          }}
        >
          <Button active={this.state.active} dimmed={this.props.dimmed} onClick={this.toggle}>
            {this.props.title}
          </Button>
          {this.state.active &&
            <Content rightSideAlign={this.props.rightSideAlign}>
              {this.props.children}
            </Content>}
        </div>
      </FilterStyled>
    );
  }
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onToggle: PropTypes.func.isRequired,
  dimmed: PropTypes.bool.isRequired,
  rightSideAlign: PropTypes.bool,
};

Filter.defaultProps = {
  rightSideAlign: false,
};

export default Filter;
