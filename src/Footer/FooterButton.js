import React, { Component } from 'react';

class FooterButton extends Component {
  render() {
    return (
      <button className="footer-button-text" type="button">{this.props.children}</button>
    );
  }
}

export default FooterButton;
