import React from 'react';
import styled from 'styled-components';
import Button from '../../common/DropdownButton';

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: .5625rem;
  overflow-y: auto;
  white-space: nowrap;
  @media screen and (min-width: 48rem) {
    margin-top: 1rem;
  }
`;

const Hint = styled.div`
  display: inline-block;
  margin-right: 2rem;
  padding: 1.5rem 0;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: .66;
  color: #171717;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default () =>
  (<Filters>
    <div>
      <Hint>Refine by</Hint>
      <span>
        <Button>Category</Button>
        <Button>Colour</Button>
        <Button>Size</Button>
      </span>
    </div>
    <Button>Sort by price</Button>
  </Filters>);
