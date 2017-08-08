import React from 'react';
import ReactDOM from 'react-dom';
import ProductPage from './ProductPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductPage />, div);
});
