import React from 'react';
import styled from 'styled-components';

const SizeButton = styled.button`
  margin-right: .5rem;
  padding: .5rem 1rem;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.33;
  border-radius: 2px;
  border: solid 1px #171717;
  background: transparent;
`;

export default props => (
  <SizeButton type="button">
    {props.children}
  </SizeButton>
);
