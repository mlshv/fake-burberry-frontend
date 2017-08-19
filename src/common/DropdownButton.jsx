import styled from 'styled-components';
import arrowIcon from '../assets/arrow.svg';

const DropdownButton = styled.button`
  display: inline-block;
  margin-left: 1.0625rem;
  padding: 1.5rem 0;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.33;
  border: none;
  background: transparent;

  &:first-child {
    margin-left: 0;
  }

  @media screen and (min-width: 48rem) {
    margin-left: 3.0625rem;
    line-height: 1.44;
    &:first-child {
      margin-left: 0;
    }
  }

  ::after {
    display: inline-block;
    width: 12px;
    height: 6px;
    margin-left: .5rem;
    background: url(${arrowIcon});
    background-size: cover;
    content: " ";
  }
  align-self: flex-start;
`;

export default DropdownButton;
