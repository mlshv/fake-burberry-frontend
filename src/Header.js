import React, { Component } from 'react';
import Logo from './Logo';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <a href="#">
          <Logo />
        </a>
      </header>
    );
  }
}

export default Header;
