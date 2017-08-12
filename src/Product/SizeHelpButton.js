import Button from '../common/Button'

const SizeHelpButton = Button.extend`
  margin-top: 1.5rem;
  margin-bottom: 1px;
  padding: 0;
  padding-top: 1px;
  text-align: left;
  border: none;
  background: transparent;
  color: #171717;
  @media screen and (min-width: 62rem) {
    flex-basis: 70%;
    margin-top: 0;
    text-align: right;
  }
`

export default SizeHelpButton
