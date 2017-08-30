import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrowIcon from '../assets/arrow.svg';

const LocationSelectorStyled = styled.div`
  display: none;
  @media screen and (min-width: 48rem) {
    position: relative;
    display: flex;
    align-items: baseline;
  }
`;

const Button = styled.div`
  position: absolute;
  z-index: 0;
  top: 1.25rem;
  left: 0;
  width: 100%;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: .75rem;
  font-weight: 500;
  line-height: 1.4;
  color: #999;

  :: after {
    display: inline-block;
    width: 12px;
    height: 16px;
    margin-left: .6875rem;
    background: url(${arrowIcon}) no-repeat;
    background-size: contain;
    background-position: 0 9px;
    content: '';
  }

  @media screen and (min-width: 62rem) {
    top: 1.75rem;
  }
`;

const Select = styled.select`
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: .75rem;
  opacity: 0;
  cursor: pointer;

  @media screen and (min-width: 48rem) {
    margin-top: 1rem;
    padding-top: .5rem;
  }

  @media screen and (min-width: 62rem) {
    margin-top: 1.75rem;
  }
`;

class LocationSelector extends Component {
  state = {
    seletetedLocation: 0,
  };

  render() {
    const handleSelectChange = (event) => {
      this.setState({ seletetedLocation: event.target.selectedIndex });
    };
    return (
      <LocationSelectorStyled>
        <Button>
          Shopping in: {this.props.locations[this.state.seletetedLocation]}
        </Button>
        <Select onChange={handleSelectChange}>
          {this.props.locations.map(location =>
            (<option>
              Shopping in: {location}
            </option>),
          )}
        </Select>
      </LocationSelectorStyled>
    );
  }
}

LocationSelector.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LocationSelector;
