import React, { Component } from 'react'; // eslint-disable-line
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import breakpoints from '../common/breakpoints';
import Jumbotron from './Jumbotron';
import Card from './Card';
import Loader from './Loader';

const CategoryTitle = styled.h2`
  margin: 1rem 0;
  font-size: 1rem;
  line-height: 1.2;
  @media screen and (min-width: 48rem) {
    margin-bottom: 2rem;
    font-size: 1.25rem;
    line-height: 1.1;
  }
`;

const Divider = styled.hr`
  margin: 3rem 0;
  border: none;
  border-bottom: 1px solid #c6c6c6;
  @media screen and (min-width: 48rem) {
    margin-top: .8125rem;
    margin-bottom: 3.125rem;
    font-size: 1.25rem;
    line-height: 1.1;
  }
`;

export default () =>
  (<div>
    <Jumbotron />
    <div className="container">
      <CategoryTitle>Heritage Trench Coats</CategoryTitle>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <Card
            image="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404"
            name="The Westminster – Long Heritage Trench Coat"
            tag="Relaxed fit"
            colors={3}
            price={120000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            image="https://assets.burberry.com/is/image/Burberryltd/90dd344122ccf1884fce63c4fc775bd6baa7a11f.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404"
            name="The Kensington – Mid-Length Heritage Trench Coat"
            tag="Classic fit"
            colors={4}
            price={110000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            image="https://assets.burberry.com/is/image/Burberryltd/fb6adea94455f2a73e97b5cf2d7811d9135dcbe2.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404"
            name="The Sandringham – Mid-length Heritage Trench Coat"
            tag="Tailored fit"
            colors={3}
            price={110000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            image="https://assets.burberry.com/is/image/Burberryltd/a2fa084eae958434c326685fc8ff19dfce9fe430.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404"
            name="The Chelsea – Short Heritage Trench Coat"
            tag="Slim fit"
            colors={3}
            price={100000}
          />
        </div>
      </div>
      <MediaQuery minDeviceWidth={breakpoints.md - 1}>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <Card
              image="https://assets.burberry.com/is/image/Burberryltd/f1cdf8b71c19df8d42ed3ea90712c391e6823635.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404"
              name="The Westminster – Long Heritage Trench Coat"
              tag="Relaxed fit"
              colors={3}
              price={120000}
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              image="https://assets.burberry.com/is/image/Burberryltd/23b186def7725e3d4ce4745374ebf11267ed68ed.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404"
              name="The Kensington – Mid-Length Heritage Trench Coat"
              tag="Classic fit"
              colors={4}
              price={120000}
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              image="https://assets.burberry.com/is/image/Burberryltd/c89a32c4e94178be2d833b9a3d434fa6087d1f25.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404"
              name="The Sandringham – Mid-length Heritage Trench Coat"
              tag="Tailored fit"
              colors={3}
              price={100000}
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              image="https://assets.burberry.com/is/image/Burberryltd/f3e96bbcf8fa0aca509c9f5933110b8596d4f06e.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404"
              name="The Chelsea – Short Heritage Trench Coat"
              tag="Slim fit"
              colors={3}
              price={120000}
            />
          </div>
        </div>
      </MediaQuery>
      <Divider />
      <CategoryTitle>Single Breasted Trench Coats</CategoryTitle>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <Card
            image="https://assets.burberry.com/is/image/Burberryltd/70d0ea20f4faa00e90a0e70fed88af9cd4874824.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404"
            name="The Brighton – Extra-long Car Coat"
            tag="Online Exclusive"
            colors={7}
            price={120000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            image="https://assets.burberry.com/is/image/Burberryltd/32792b6c9cf40c27ce446864bc6bae457d490199.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404"
            name="The Brighton – Extra-long Car Coat"
            tag="New in"
            colors={7}
            price={120000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            image="https://assets.burberry.com/is/image/Burberryltd/0c526ecde3443d15c60f660214d320ca4c338c88.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404"
            name="The Brighton – Extra-long Car Coat"
            tag="New in"
            colors={7}
            price={120000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            image="https://assets.burberry.com/is/image/Burberryltd/98f1a84f2c171dfc4ffe373e13f5c258e4b79ea9.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404"
            name="The Brighton – Extra-long Car Coat"
            tag="Online Exclusive"
            colors={7}
            price={120000}
          />
        </div>
      </div>
      <MediaQuery minDeviceWidth={breakpoints.md - 1}>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <Card
              image="https://assets.burberry.com/is/image/Burberryltd/3bbc6df8655e77f5a75880f03c3ab3f7c92d2ee9.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404"
              name="The Camden – Long Car Coat"
              tag="New in"
              colors={7}
              price={100000}
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              image="https://assets.burberry.com/is/image/Burberryltd/b340592f566593645f37fd61fdafe720e2c224b7.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404"
              name="The Camden – Long Car Coat"
              tag="New in"
              colors={7}
              price={100000}
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              image="https://assets.burberry.com/is/image/Burberryltd/499e46c07518da4b2d208164cb6202b415346661.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404"
              name="The Camden – Long Car Coat"
              tag="New in"
              colors={7}
              price={100000}
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              image="https://assets.burberry.com/is/image/Burberryltd/1297c5d67c810e003eed53e02959843669f1ce9c.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404"
              name="The Camden – Long Car Coat"
              tag="New in"
              colors={7}
              price={100000}
            />
          </div>
        </div>
      </MediaQuery>
      <Loader />
    </div>
  </div>);
