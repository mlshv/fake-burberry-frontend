import React, { Component } from 'react';
import NavigationLink from './NavigationLink';
import FooterButton from './FooterButton';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-nav">
            <div className="row">
              <div className="col-md-3">
                <h3 className="footer-nav-title">Customer Service</h3>
                <nav>
                  <NavigationLink href="#">Contact us</NavigationLink>
                  <NavigationLink href="#">Payment</NavigationLink>
                  <NavigationLink href="#">Shipping</NavigationLink>
                  <NavigationLink href="#">Returns</NavigationLink>
                  <NavigationLink href="#">Faqs</NavigationLink>
                  <NavigationLink href="#">Live Chat</NavigationLink>
                  <NavigationLink href="#">The Burberry App</NavigationLink>
                  <NavigationLink href="#">Store Locator</NavigationLink>
                </nav>
              </div>
              <div className="col-md-3">
                <h3 className="footer-nav-title">Our Company</h3>
                <nav>
                  <NavigationLink href="#">Our History</NavigationLink>
                  <NavigationLink href="#">Burberry Group Pic</NavigationLink>
                  <NavigationLink href="#">Careers</NavigationLink>
                  <NavigationLink href="#">Corporate Responsibility</NavigationLink>
                  <NavigationLink href="#">Site Map</NavigationLink>
                </nav>
              </div>
              <div className="col-md-3">
                <h3 className="footer-nav-title">Legal & Cookies</h3>
                <nav>
                  <NavigationLink href="#">Terms & Conditions</NavigationLink>
                  <NavigationLink href="#">Privacy Policy</NavigationLink>
                  <NavigationLink href="#">Cookie Policy</NavigationLink>
                  <NavigationLink href="#">Accessibility Statement</NavigationLink>
                  <NavigationLink href="#">Japan Only - SCTL indications</NavigationLink>
                </nav>
              </div>
            </div>
          </div>
          <FooterButton>Shipping country: Russian Federation</FooterButton>
          <FooterButton>Language: English</FooterButton>
          <h3 className="footer-need-help">Need help?</h3>
          <a className="footer-link-contact" href="#">Find out more and contact us</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
