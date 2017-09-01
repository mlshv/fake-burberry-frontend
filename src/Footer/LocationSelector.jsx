import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LocationSelectorStyled = styled.div`
  margin-top: .9375rem;
  position: relative;
  display: flex;
  @media screen and (min-width: 48rem) {
    display: inline-block;
    margin-top: 1.25rem;
    margin-right: 1.5rem;
  }

  @media screen and (min-width: 62rem) {
    margin-top: 2.25rem;
    margin-right: 1.625rem;
  }
`;

const TextButton = styled.button`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  line-height: 1rem;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  background: transparent;
  border: none;
  color: #999;
`;

const DarkText = styled.span`color: #171717;`;

const Select = styled.select`
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: .75rem;
  opacity: 0;
  border: none;
  cursor: pointer;
`;

class LocationSelector extends Component {
  state = {
    selectedLocation: 0,
  };

  handleSelectChange = (event) => {
    this.setState({ selectedLocation: event.target.selectedIndex });
  };

  render() {
    return (
      <LocationSelectorStyled>
        <TextButton>
          Shipping country: <DarkText>{this.props.locations[this.state.selectedLocation]}</DarkText>
        </TextButton>
        <Select onChange={this.handleSelectChange}>
          {this.props.locations.map(location =>
            (<option>
              Shipping country: {location}
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
