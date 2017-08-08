import React, { Component } from 'react';
import Header from './Header/Header';
import Product from './Product/Product';
import Footer from './Footer/Footer';

class App extends Component {
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

export default App;
