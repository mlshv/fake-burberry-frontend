import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const SizeStyled = styled.p`
  margin: 0;
  font-size: 0.75rem;
  font-family: 'Raleway';
  color: #171717;
  line-height: 1.33;
`;

const TextButton = styled.button`
  padding: 0;
  font-size: 0.75rem;
  line-height: 1.33;
  text-transform: uppercase;
  border: 0;
  background-color: inherit;
  color: #171717;
`;

const Size = props =>
  (<Container>
    <SizeStyled>
      Size: <b>{props.children}</b>
    </SizeStyled>
    <TextButton>Need size help?</TextButton>
  </Container>);

Size.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Size;
