import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';
import Header from './Header';
import Products from './Products/List';
import Product from './Products/Show';
import Footer from './Footer';

addLocaleData(ruLocaleData);

export default () =>
  (<IntlProvider locale="ru">
    <div>
      <Helmet>
        <title>Burberry</title>
      </Helmet>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/:section/" component={Products} />
            <Route exact path="/:section/:category" component={Products} />
            <Route path="/:section/:category/:id" component={Product} />
            <Redirect from="/" to="/men/trench-coats" />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  </IntlProvider>);
