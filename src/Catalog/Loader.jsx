import React from 'react';
import styled from 'styled-components';
import GenericButton from '../common/Button';

const Loader = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
  text-align: center;
`;

const Title = styled.h4`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const Button = GenericButton.extend`
  margin-top: 0;
  padding: 1rem 2rem;
  text-transform: none;
`;

export default () =>
  (<Loader>
    <Title>Showing 8 of 17</Title>
    <Button>View 9 more</Button>
  </Loader>);
