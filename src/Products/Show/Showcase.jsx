import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import breakpoints from '../../common/breakpoints';

const Showcase = styled.div`
  position: relative;
  right: 50%;
  left: 50%;
  display: flex;
  overflow-x: scroll;
  width: 100vw;
  height: auto;
  margin-right: -50vw;
  margin-left: -50vw;
  @media screen and (min-width: 48rem) {
    position: inherit;
    right: inherit;
    left: inherit;
    width: inherit;
    margin-right: inherit;
    margin-left: inherit;
  }
  @media screen and (min-width: 62rem) {
    overflow: hidden;
  }
`;

const Image = styled.img`
  height: 400px;
  @media screen and (min-width: 48rem) {
    height: 576px;
  }
  @media screen and (min-width: 62rem) {
    height: 651px;
  }
`;

export default () =>
  (<Showcase>
    <Image
      src="https://assets.burberry.com/is/image/Burberryltd/315fc4b4f839fab1922251a93b95e04ad6055598.jpg?$BBY_V2_ML_3X4$&hei=800&wid=600"
      alt="Lightweight Grainy Nubuck Trench Coat"
    />
    <MediaQuery maxWidth={breakpoints.lg - 1}>
      <Image
        src="https://assets.burberry.com/is/image/Burberryltd/320347e75c92dab46a0322f371ca96e1e7a9b5f1.jpg?$BBY_V2_SL_3X4$&hei=800&wid=600"
        alt="Lightweight Grainy Nubuck Trench Coat"
      />
    </MediaQuery>
    <MediaQuery maxWidth={breakpoints.lg - 1}>
      <Image
        src="https://assets.burberry.com/is/image/Burberryltd/e3abd115ccddc731b5af5730c1373ad5447699da.jpg?$BBY_V2_SL_3X4$&hei=800&wid=600"
        alt="Lightweight Grainy Nubuck Trench Coat"
      />
    </MediaQuery>
    <MediaQuery maxWidth={breakpoints.lg - 1}>
      <Image
        src="https://assets.burberry.com/is/image/Burberryltd/8867271963e0182f9f0bee68acc0efc17a17c52b.jpg?$BBY_V2_ML_3X4$&hei=800&wid=600"
        alt="Lightweight Grainy Nubuck Trench Coat"
      />
    </MediaQuery>
  </Showcase>);
