import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './Header/Header'
import Product from './Product/Product'
import Footer from './Footer/Footer'

function App() {
  return (
    <div>
      <Helmet>
        <title>Burberry</title>
      </Helmet>
      <Header />
      <Product />
      <Footer />
    </div>
  )
}

export default App
