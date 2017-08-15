import React from 'react';
import styled from 'styled-components';
import arrowIcon from '../assets/arrow.svg';

const Filters = styled.div`
  display: flex;
  overflow-y: auto;
`;

const Hint = styled.div`
  margin-right: 2rem;
  padding: 1.5rem 0;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: .66;
  color: #171717;
`;

const Button = styled.button`
  margin-right: 1rem;
  padding: 1.5rem 0;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: .66;
  border: none;
  background: transparent;
  ::after {
    display: inline-block;
    width: 12px;
    height: 6px;
    margin-left: .5rem;
    background: url(${arrowIcon});
    background-size: cover;
    content: " ";
  }
`;

export default () =>
  (<Filters>
    <Hint>Refine by</Hint>
    <Button>Category</Button>
    <Button>Colour</Button>
    <Button>Size</Button>
  </Filters>);
