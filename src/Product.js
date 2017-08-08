import React, { Component } from 'react';
import ProductShowcase from './ProductShowcase';
import ProductProps from './ProductProps';
import Accordion from './Accordion';
import Recommendations from './Recommendations';

class Product extends Component {
  render() {
    return (
      <main className="container">
        <div className="row">
          <h1 className="product-title">Long Cotton Gabardine Car Coat</h1>
        </div>
        <section className="row">
          <div className="col-xs-12 col-md-7">
            <ProductShowcase />
          </div>
          <div className="col-xs-12 col-md-5">
            <ProductProps />
          </div>
        </section>
        <section className="row">
          <Accordion title="Description" active>
            <p>A refined car coat crafted in protective cotton gabardine.</p>
            <p>Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric that protects against wind and rain.</p>
            <p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
            <p>The piece is finished with a distinctive check undercollar.</p>
            <br />
            <ul>
              <li>Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change slightly according to size.</li>
              <li>Outer: 100% cotton</li>
              <li>Check lining: 100% cotton</li>
              <li>Sleeve lining: 100% viscose</li>
              <li>Buttons: buffalo horn</li>
              <li>Specialist dry clean</li>
              <li>Made in Europe</li>
              <li>Item 39428531</li>
            </ul>
          </Accordion>
        </section>
        <section className="row">
          <Accordion title="Shipping & Returns" hideTitleMd noTopBorder>
            <div className="row">
              <div className="col-md-7">
                <img className="img-shipping-box" alt="Gift packaging demo" src="img/shipping-box.jpg" />
              </div>
              <div className="col-md-5">
                <h2 className="accordion-title product-delivery-title">
                  Delivery
                </h2>
                <h3 className="product-delivery-subtitle">
                  Free Next Day Delivery
                </h3>
                <p className="product-delivery-text">
                  Order before 7pm Monday to Thursday for delivery the next day
                </p>
                <h3 className="product-delivery-subtitle">
                  Collect-in-Store
                </h3>
                <p className="product-delivery-text">
                  Order online today and pick up your items in store as early as tomorrow
                </p>
                <h3 className="product-delivery-subtitle">
                  Free Returns
                </h3>
                <p className="product-delivery-text">
                  Enjoy free returns on your order
                </p>
                <h3 className="product-delivery-subtitle">
                  Free Gift Packaging
                </h3>
                <p className="product-delivery-text">
                  Discover our gift packaging, a gold lined box tied with a coloured ribbon
                </p>
              </div>
            </div>
          </Accordion>
        </section>
        <section className="row">
          <Recommendations />
        </section>
      </main>
    );
  }
}

export default Product;
