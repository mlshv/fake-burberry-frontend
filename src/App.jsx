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
    props.isSideNavOpened &&
    css`
    transform: translate3d(274px, 0, 0);
    @media screen and (min-width: 48rem) {
      transform: none;
    }
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
  state = {
    isSideNavOpened: false,
  };

  toggleSideNav = () => {
    this.setState(prevState => ({
      isSideNavOpened: !prevState.isSideNavOpened,
    }));
  };

  render() {
    return (
      <IntlProvider locale="ru">
        <div>
          <Helmet>
            <title>Burberry</title>
          </Helmet>
          <BrowserRouter>
            <PageWrapper>
              <SideNavigation isActive={this.state.isSideNavOpened} toggle={this.toggleSideNav} />
              <Page isSideNavOpened={this.state.isSideNavOpened}>
                {this.state.isSideNavOpened && <PageOverlay onClick={this.toggleSideNav} />}
                <Header onHamburgerClick={this.toggleSideNav} />
                <Switch>
                  <Route exact path="/:section/" component={Products} />
                  <Route exact path="/:section/:category" component={Products} />
                  <Route path="/:section/:category/:id" component={Product} />
                  <Redirect from="/" to="/men/clothing" />
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
