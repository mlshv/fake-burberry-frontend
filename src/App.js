import React from 'react'
import { Helmet } from 'react-helmet'
import { IntlProvider } from 'react-intl'
import { addLocaleData } from 'react-intl'
import ruLocaleData from 'react-intl/locale-data/ru'
import Header from './Header'
import Product from './Product'
import Footer from './Footer'

addLocaleData(ruLocaleData)

export default () => {
  return (
    <IntlProvider locale="ru">
      <div>
        <Helmet>
          <title>Burberry</title>
        </Helmet>
        <Header />
        <Product />
        <Footer />
      </div>
    </IntlProvider>
  )
}
