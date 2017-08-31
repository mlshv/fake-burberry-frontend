import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import logo from '../assets/logo.svg';
import arrowIcon from '../assets/arrow.svg';
import ButtonSelect from './ButtonSelect';
import SubNavigation from './SubNavigation';

const SideNavigationStyled = styled.section`
  position: absolute;
  width: 0;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 274px;
  overflow: auto;
`;

const MainNavigation = styled.div`
  transition: .25s cubic-bezier(0.165, 0.84, 0.44, 1);
  ${props =>
    props.isShiftedLeft &&
    css`
    transform: translate3d(-274px, 0, 0);
  `};
`;

const Logo = styled.img`
  display: block;
  height: 12px;
  margin: 1rem auto;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;

const Subtitle = styled.h3`
  margin: 0;
  padding-top: .3rem;
  padding-left: .5rem;
  padding-bottom: .4rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: .75rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const Link = styled(NavLink)`
  display: block;
  text-decoration: none;
  padding: .75rem .5rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: .875rem;
  color: #171717;
`;

const SectionButton = styled.button`
  display: block;
  text-decoration: none;
  padding: .75rem .5rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: .875rem;
  text-align: left;
  border: none;
  background: transparent;
  color: #171717;
  :: after {
    position: absolute;
    right: 3px;
    width: 12px;
    height: 16px;
    content: '';
    transform: rotate(-90deg);
    background: url(${arrowIcon}) no-repeat;
    background-size: contain;
    background-position: 0 3px;
  }
`;

const Buttons = Block.extend`margin-top: -.25rem;`;

const sampleLocations = ['United Kingdom (£)', 'United States ($)', 'Russian Federation (₽)'];
const sampleLanguages = ['English', 'Russian', 'Español'];

const subNavigation = [
  {
    title: 'Men',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/d68dce82ea0a299febf5a35de882c78f0d70ad7d.jpg?$BBY_V2_BASIC$&wid=390',
    links: [
      { title: 'New Arrivals', url: '/men/new-arrivals' },
      { title: 'Clothing', url: '/men/clothing' },
      { title: 'Scarves', url: '/men/scarves' },
      { title: 'Accessories', url: '/men/accessories' },
      { title: 'Shoes', url: '/men/shoes' },
      { title: 'Fragnance', url: '/men/fragnance' },
      { title: 'Gifts', url: '/men/gifts' },
      { title: 'Runway', url: '/men/runway' },
    ],
  },
  {
    title: 'Women',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/4234f8a6cd1084d7710a3e40d0b0752d9674e798.jpg?$BBY_V2_BASIC$&wid=390',
    links: [
      { title: 'New Arrivals', url: '/women/new-arrivals' },
      { title: 'Clothing', url: '/women/clothing' },
      { title: 'Scarves', url: '/women/scarves' },
      { title: 'Bags', url: '/women/bags' },
      { title: 'Accessories', url: '/women/accessories' },
      { title: 'Shoes', url: '/women/shoes' },
      { title: 'Make-up', url: '/women/make-up' },
      { title: 'Fragnance', url: '/women/fragnance' },
      { title: 'Gifts', url: '/women/gifts' },
      { title: 'Runway', url: '/women/runway' },
    ],
  },
  {
    title: 'Children',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/cf6e1b1b9d32f13a7b684b141dbdf26bd842020b.jpg?$BBY_V2_BASIC$&wid=390',
    links: [
      { title: 'New In', url: '/children/new-in' },
      { title: 'Baby', url: '/children/baby' },
      { title: 'Girl 4-11 Yrs', url: '/children/girl-4-11-yrs' },
      { title: 'Boy 4-11 Yrs', url: '/children/boy-4-11-yrs' },
      { title: 'Accessories', url: '/children/Accessories' },
      { title: 'Gifts', url: '/children/gifts' },
    ],
  },
  {
    title: 'Beauty',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/dcdefeb4e3c9da75bda644c8b8873cc22da50449.jpg?$BBY_V2_BASIC$&wid=390',
    links: [
      { title: 'Make-up', url: '/beauty/make-up' },
      { title: 'Women′s Fragrance', url: '/beauty/womens-fragrance' },
      { title: 'Men′s Fragrance', url: '/beauty/mens-fragrance' },
      { title: 'Beauty Gifts', url: '/beauty/beauty-gifts' },
    ],
  },
];

class SideNavigation extends Component {
  state = {
    isSubNavOpened: false,
    subNavActiveSection: 0,
  };

  toggleSubNav = subSectionIndex =>
    this.setState(prevState => ({
      isSubNavOpened: !prevState.isSubNavOpened,
      subNavActiveSection: subSectionIndex,
    }));

  closeSubNav = () => this.setState({ isSubNavOpened: false });

  render() {
    return (
      <SideNavigationStyled isActive={this.props.isActive}>
        <MainNavigation isShiftedLeft={this.state.isSubNavOpened}>
          <Logo alt="Logo" src={logo} />
          <Block>
            {subNavigation.map((navItem, index) =>
              (<SectionButton
                onClick={() => {
                  this.toggleSubNav(index);
                }}
              >
                {navItem.title}
              </SectionButton>),
            )}
          </Block>
          <Block>
            <Subtitle>Customer service</Subtitle>
            <nav>
              <Link to="/contact">Contact Us</Link>
              <Link to="/payment">Payment</Link>
              <Link to="/shipping">Shipping</Link>
              <Link to="/returns">Returns</Link>
              <Link to="/faqs">Faqs</Link>
              <Link to="/the-burberry-app">The Burberry App</Link>
              <Link to="/locator">Store Locator</Link>
            </nav>
          </Block>
          <Block>
            <Subtitle>Our company</Subtitle>
            <nav>
              <Link to="/our-history">Our History</Link>
              <Link to="/burberry-group-pic">Burberry Group Pic</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/corporate-responsibility">Corporate Responsibility</Link>
              <Link to="/site-map">Site Map</Link>
            </nav>
          </Block>
          <Buttons>
            <ButtonSelect options={sampleLocations} />
            <ButtonSelect options={sampleLanguages} />
          </Buttons>
        </MainNavigation>
        <SubNavigation
          navigation={subNavigation[this.state.subNavActiveSection]}
          isOpened={this.state.isSubNavOpened}
          close={this.closeSubNav}
          toggleSideNav={this.props.toggle}
        />
      </SideNavigationStyled>
    );
  }
}

SideNavigation.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default SideNavigation;
