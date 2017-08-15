import React from 'react';
import styled from 'styled-components';
import Jumbotron from './Jumbotron';

const CategoryTitle = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export default () =>
  (<div>
    <Jumbotron />
    <div className="container">
      <CategoryTitle>Heritage Trench Coats</CategoryTitle>
    </div>
  </div>);
