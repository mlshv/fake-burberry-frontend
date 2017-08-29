import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColorButtonStyled = styled.button`
  margin-right: 1rem;
  width: 40px;
  height: 40px;
  font-size: 0;
  border-radius: 50%;
  border: ${props => (props.active ? 'solid 1px #232122' : 'none')};
  background-color: ${props => props.value};
`;

const ColorButton = props =>
  (<ColorButtonStyled
    value={props.value}
    active={props.active}
    type="button"
    onClick={props.onClick}
  >
    Select {props.name} color
  </ColorButtonStyled>);

ColorButton.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

ColorButton.defaultProps = {
  active: false,
};

export default ColorButton;
