import React from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  display: flex;
  box-sizing: border-box;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  & > div:nth-child(1) {
    margin-top: 6rem;
  }
  & > div:nth-child(2) {
    margin-top: 10rem;
  }
  & > div:nth-child(3) {
    margin-top: 4rem;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

export default () =>
  (<Gallery>
    <div className="col-lg-4">
      <Image
        src="https://assets.burberry.com/is/image/Burberryltd/e3abd115ccddc731b5af5730c1373ad5447699da.jpg?$BBY_V2_SL_3X4$&hei=800&wid=600"
        alt="Lightweight Grainy Nubuck Trench Coat"
      />
    </div>
    <div className="col-lg-4">
      <Image
        src="https://assets.burberry.com/is/image/Burberryltd/8867271963e0182f9f0bee68acc0efc17a17c52b.jpg?$BBY_V2_ML_3X4$&hei=800&wid=600"
        alt="Lightweight Grainy Nubuck Trench Coat"
      />
    </div>
    <div className="col-lg-4">
      <Image
        src="https://assets.burberry.com/is/image/Burberryltd/33af7736ba997e135c63a29789079798f137f7be.jpg?$BBY_V2_ML_3X4$&hei=800&wid=600"
        alt="Lightweight Grainy Nubuck Trench Coat"
      />
    </div>
  </Gallery>);
