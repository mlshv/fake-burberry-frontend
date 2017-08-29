import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CommonButton from '../../common/Button';

const SizeSelectorStyled = styled.div`
  position: relative;
  display: flex;
  flex-basis: 100%;
`;

const Button = CommonButton.extend`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
`;

const Select = styled.select`
  flex-basis: 100%;
  margin-top: 1rem;
  padding: .9375rem 0;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: .75rem;
  line-height: .875rem;
  opacity: 0;
  cursor: pointer;
`;

class SizeSelector extends Component {
  state = {
    selectedSize: 0,
  };

  render() {
    const handleSelectChange = (event) => {
      this.setState({ selectedSize: event.target.selectedIndex });
    };
    return (
      <SizeSelectorStyled>
        <Button primary type="button">
          Select a size
        </Button>
        <Select onChange={handleSelectChange}>
          {this.props.sizes.map(size =>
            (<option>
              {size}
            </option>),
          )}
        </Select>
      </SizeSelectorStyled>
    );
  }
}

SizeSelector.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SizeSelector;
