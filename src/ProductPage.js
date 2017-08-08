import React, { Component } from 'react';
import Header from './Header';
import Product from './Product';
import Footer from './Footer';

class ProductPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Product />
        <Footer />
      </div>
    );
  }
}

export default ProductPage;
