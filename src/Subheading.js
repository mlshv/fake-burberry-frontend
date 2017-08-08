import React, { Component } from 'react';

class Subheading extends Component {
  render() {
    return <div className="product-recommendations-title">{this.props.children}</div>
  }
}

export default Subheading;
