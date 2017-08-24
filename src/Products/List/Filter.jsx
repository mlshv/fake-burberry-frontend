import React from 'react';
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
  display: block;
  margin-left: -1.5rem;
  padding: 1.5rem;
  padding-top: .875rem;
  box-sizing: border-box;
  line-height: 1rem;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial;
  font-size: .75rem;
  background: #f3f3f3;
`;

const Filter = props =>
  (<FilterStyled>
    <Button active={props.active} onClick={props.handleClick}>
      {props.title}
    </Button>
    {props.active &&
      <Content>
        {props.children}
      </Content>}
  </FilterStyled>);

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Filter;
