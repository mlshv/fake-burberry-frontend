import React, { Component } from 'react';

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
          <button className="btn btn-dark" type="button">Select a size</button>
          <button className="btn btn-light" type="button">Find in store</button>
          <button className="btn product-props-button-size-help" type="button">Need size help?</button>
        </div>
      </section>
    );
  }
}

export default ProductProps;
