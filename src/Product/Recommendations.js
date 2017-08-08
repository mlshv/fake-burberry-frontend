import React, { Component } from 'react';
import ProductCard from './ProductCard';
import Subheading from '../Subheading';

class Recommendations extends Component {
  render() {
    return (
      <section className="product-recommendations">
        <Subheading>We recommend</Subheading>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <ProductCard image="img/recommend1.jpg"
                         name="Emroided Hooded Content For Three Lines"
                         price="27 000 руб."/>
          </div>
          <div className="col-xs-6 col-md-3">
            <ProductCard image="img/recommend2.jpg"
                         name="Relaxed Fit Stretch Jeans Content For Three Lines"
                         price="22 500 руб."/>
          </div>
          <div className="col-xs-6 col-md-3">
            <ProductCard image="img/recommend3.jpg"
                         name="Leather and House Check Content For Three Lines"
                         price="120 000 руб."/>
          </div>
          <div className="col-xs-6 col-md-3">
            <ProductCard image="img/recommend4.jpg"
                         name="Leather Wingtip Check Content For Three Lines"
                         price="46 000 руб."/>
          </div>
        </div>
        <div className="product-recommendations-more">
          <div className="row">
            <div className="col-xs-12">
              <Subheading>More for you</Subheading>
            </div>
            <div className="col-xs-12">
              <a className="product-recommendations-link" href="#">Men's Black Trench Coats</a>
            </div>
            <div className="col-xs-12">
              <a className="product-recommendations-link" href="#">Men's Short Trench Coats</a>
            </div>
            <div className="col-xs-12">
              <a className="product-recommendations-link" href="#">Men's Long Trench Coats</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Recommendations;
