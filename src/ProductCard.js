import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    return (
      <a className="product-recommendation">
        <img className="product-recommendation-img" alt="" src={this.props.image} />
        <h3 className="product-recommendation-name">{this.props.name}</h3>
        <h5 className="product-recommendation-price">{this.props.price}</h5>
      </a>
    );
  }
}

export default ProductCard;
