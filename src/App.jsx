import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';
import styled, { css } from 'styled-components';
import SideNavigation from './SideNavigation';
import Header from './Header';
import Products from './Products/List';
import Product from './Products/Show';
import Footer from './Footer';

addLocaleData(ruLocaleData);

const PageWrapper = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
`;

const Page = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  transition: .25s cubic-bezier(0.165, 0.84, 0.44, 1);
  ${props =>
    props.sideNavActive &&
    css`
    transform: translate3d(274px, 0, 0);
  `};
  background: #fff;
`;

const PageOverlay = styled.button`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
`;

class App extends Component {
  constructor() {
    super();
    this.toggleSideNav = this.toggleSideNav.bind(this);
  }

  state = {
    sideNavActive: true,
  };

  toggleSideNav() {
    this.setState(state => ({
      sideNavActive: !state.sideNavActive,
    }));
  }

  render() {
    return (
      <IntlProvider locale="ru">
        <div>
          <Helmet>
            <title>Burberry</title>
          </Helmet>
          <BrowserRouter>
            <PageWrapper>
              <SideNavigation active={this.state.sideNavActive} />
              <Page sideNavActive={this.state.sideNavActive}>
                {this.state.sideNavActive && <PageOverlay onClick={this.toggleSideNav} />}
                <Header onHamburgerClick={this.toggleSideNav} />
                <Switch>
                  <Route exact path="/:section/" component={Products} />
                  <Route exact path="/:section/:category" component={Products} />
                  <Route path="/:section/:category/:id" component={Product} />
                  <Redirect from="/" to="/men/trench-coats" />
                </Switch>
                <Footer />
              </Page>
            </PageWrapper>
          </BrowserRouter>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
