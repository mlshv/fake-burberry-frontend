import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColorButtonStyled = styled.button`
  margin-right: 1rem;
  width: 40px;
  height: 40px;
  font-size: 0;
  border-radius: 50%;
  border: ${props => (props.isActive ? 'solid 1px #232122' : 'none')};
  background-color: ${props => props.value};
  cursor: pointer;
`;

const ColorButton = props =>
  (<ColorButtonStyled
    value={props.value}
    isActive={props.isActive}
    type="button"
    onClick={props.onClick}
  >
    Select {props.name} color
  </ColorButtonStyled>);

ColorButton.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

ColorButton.defaultProps = {
  isActive: false,
};

export default ColorButton;
