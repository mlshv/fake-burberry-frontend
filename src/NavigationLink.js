import React, { Component } from 'react';

class NavigationLink extends Component {
  render() {
    return (
      <a className="footer-nav-link" href={this.props.href}>{this.props.children}</a>
    );
  }
}

export default NavigationLink;
