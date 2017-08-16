import styled from 'styled-components';

const Button = styled.button`
  flex-basis: 100%;
  margin-top: 1rem;
  padding: 1rem 0;
  line-height: .875rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: .75rem;
  letter-spacing: normal;
  text-transform: uppercase;
  border-radius: 2px;
  background: ${props => (props.primary ? '#171717' : 'transparent')};
  border: solid 1px #171717;
  color: ${props => (props.primary ? '#fff' : '#171717')};
`;

export default Button;
