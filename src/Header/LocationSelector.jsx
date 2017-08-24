import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import arrowIcon from '../assets/arrow.svg';

const LocationSelectorStyled = styled.button`
  display: inline-block;
  padding: 1.5rem 0;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.33;
  border: none;
  color: #999;
  background: transparent;

  @media screen and (min-width: 48rem) {
    margin: 0;
    font-size: .75rem;
    font-weight: 600;
    line-height: 1.4;
  }

  @media screen and (min-width: 62rem) {
    padding: 2rem 0;
  }

  ::after {
    display: inline-block;
    width: 12px;
    height: 6px;
    margin-left: .5rem;
    background: url(${arrowIcon});
    background-size: cover;
    content: " ";
    ${props =>
    props.active &&
      css`
      transform: rotate(180deg);
    `};
  }
`;

const Locations = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  white-space: normal;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial;
  font-size: .75rem;
  background: #fff;
`;

const Location = styled.button`
  flex-basis: 100%;
  padding: 1rem;
  border: 0;
  background: none;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial;
  color: #999;
`;

class LocationSelector extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
  }

  state = {
    active: false,
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
    locationSelected: 0,
  };

  toggle() {
    this.setState(state => ({
      active: !state.active,
    }));
  }

  select(index) {
    this.setState({
      locationSelected: index,
      active: false,
    });
  }

  render() {
    const location = this.state.locations[this.state.locationSelected];
    return (
      <div>
        <LocationSelectorStyled active={this.state.active} onClick={this.toggle}>
          Shopping in: {location.name} ({location.currency}){' '}
        </LocationSelectorStyled>
        {this.state.active &&
          <Locations>
            {this.state.locations.map((l, index) =>
              (<Location
                onClick={() => {
                  this.select(index);
                }}
              >
                {l.name} ({l.currency})
              </Location>),
            )}
          </Locations>}
      </div>
    );
  }
}

export default LocationSelector;
