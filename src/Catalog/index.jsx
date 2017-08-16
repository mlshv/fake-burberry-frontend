import React, { Component } from 'react'; // eslint-disable-line
import styled from 'styled-components';
import Jumbotron from './Jumbotron';
import Card from './Card';
import products from './products.json';

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
      <div className="row">
        {products.map(product =>
          (<div className="col-xs-6 col-md-3">
            <Card
              image={product.photo}
              name={product.name}
              tag={product.tag}
              colors={product.colors}
              price={product.price}
            />
          </div>),
        )}
      </div>
    </div>
  </div>);
