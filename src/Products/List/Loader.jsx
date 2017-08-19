import React from 'react';
import styled from 'styled-components';
import GenericButton from '../../common/Button';

const Loader = styled.div`
  margin-top: 3.0625rem;
  margin-bottom: 5rem;
  text-align: center;
`;

const Title = styled.h4`
  margin: 0;
  margin-bottom: .9375rem;
  font-size: 1rem;
  @media screen and (min-width: 48rem) {
    margin-bottom: 2rem;
    font-size: 1.25rem;
    line-height: 1.2;
  }
`;

const Button = GenericButton.extend`
  margin-top: 0;
  padding: 1.0625rem 2rem;
  text-transform: none;
  @media screen and (min-width: 48rem) {
    padding: 1.0625rem 2rem;
  }
`;

export default () =>
  (<Loader>
    <Title>Showing 8 of 17</Title>
    <Button>View 9 more</Button>
  </Loader>);
