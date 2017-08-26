import React, { Component } from 'react';
import styled from 'styled-components';
import arrowIcon from '../assets/arrow.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const LocationSelectorStyled = styled.select`
  display: inline-block;
  padding: 1.5rem 0;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.33;
  border: none;
  color: #999;
  background: transparent;

  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
  ::-ms-expand {
    display: none;
  }

  @media screen and (min-width: 48rem) {
    margin: 0;
    font-size: .75rem;
    font-weight: 500;
    line-height: 1.4;
  }

  @media screen and (min-width: 62rem) {
    padding: 2rem 0;
  }
`;

const ArrowIcon = styled.span`
  width: 12px;
  height: 6px;
  margin-top: 1.5rem;
  margin-left: .5rem;
  background: url(${arrowIcon});
  background-size: cover;
  content: " ";
`;

class LocationSelector extends Component {
  state = {
    locations: [
      {
        name: 'United Kingdom',
        currency: '£',
      },
      {
        name: 'United States',
        currency: '$',
      },
      {
        name: 'Russian Federation',
        currency: '₽',
      },
    ],
  };

  render() {
    return (
      <Wrapper>
        <LocationSelectorStyled active={this.state.active} onClick={this.toggle}>
          {this.state.locations.map(l =>
            (<option>
              Shopping in: {l.name} ({l.currency}){' '}
            </option>),
          )}
        </LocationSelectorStyled>
        <ArrowIcon />
      </Wrapper>
    );
  }
}

export default LocationSelector;
