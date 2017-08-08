import React, { Component } from 'react';
import Button from '../common/Button';
import SizeHelpButton from './SizeHelpButton';

class ProductProps extends Component {
  render() {
    return (
      <section className="product-props">
        <div className="product-price-id-wrap">
          <h2 className="product-price">
            110 000 руб.
          </h2>
          <p className="product-id">
            Item 39428531
          </p>
        </div>
        <p className="product-color-name">
          Colour: Honey
        </p>
        <div className="product-color-buttons">
          <button className="product-color-button product-color-button-black" type="button">Select black color</button>
          <button className="product-color-button
                         product-color-button-honey
                         product-color-button-active" type="button">Select honey color</button>
        </div>
        <hr className="product-props-divider" />
        <div className="product-props-buttons">
          <Button primary type="button">Select a size</Button>
          <Button type="button">Find in store</Button>
          <SizeHelpButton type="button">Need size help?</SizeHelpButton>
        </div>
      </section>
    );
  }
}

export default ProductProps;
