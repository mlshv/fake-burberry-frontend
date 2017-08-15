import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SizeButtonStyled = styled.button`
  margin-right: .5rem;
  padding: .5rem 1rem;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.33;
  border-radius: 2px;
  border: solid 1px #171717;
  background: transparent;
`;

const SizeButton = props =>
  (<SizeButtonStyled type="button">
    {props.children}
  </SizeButtonStyled>);

SizeButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SizeButton;
