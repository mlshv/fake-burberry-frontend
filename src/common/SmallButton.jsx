import Button from './Button';

const SmallButton = Button.extend`
  flex-basis: inherit;
  margin-top: 0;
  margin-right: 1.5rem;
  padding: .5rem 2.3125rem;
  text-transform: none;
  &:last-child {
    margin-right: 0;
  }
`;

export default SmallButton;
