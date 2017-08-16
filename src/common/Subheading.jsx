import styled from 'styled-components';

const Subheading = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: inline-block;
  line-height: 1.1875rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 1rem;
  text-transform: uppercase;
  @media screen and (min-width: 48rem) {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 62rem) {
    display: block;
    margin-bottom: 2rem;
    padding-bottom: 0;
    text-align: center;
  }
`;

export default Subheading;
