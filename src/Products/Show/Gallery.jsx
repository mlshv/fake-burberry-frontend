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
        src="/img/Long-Cotton-Gabardine-Car-Coat-3@2x.jpg"
        alt="Long Cotton Gabardine Car Coat"
      />
    </div>
    <div className="col-lg-4">
      <Image
        src="/img/Long-Cotton-Gabardine-Car-Coat-4@2x.jpg"
        alt="Long Cotton Gabardine Car Coat"
      />
    </div>
    <div className="col-lg-4">
      <Image
        src="/img/Long-Cotton-Gabardine-Car-Coat-2@2x.jpg"
        alt="Long Cotton Gabardine Car Coat"
      />
    </div>
  </Gallery>);
