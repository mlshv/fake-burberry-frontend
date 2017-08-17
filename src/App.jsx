import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';
import Header from './Header';
import ProductsList from './Products/List';
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
          <Route exact path="/" component={ProductsList} />
          <Route path="/product" component={Product} />
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  </IntlProvider>);
