import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Filter from './Filter';

const Background = styled.div`background: #f3f3f3;`;

const FiltersStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: .5625rem;
  white-space: nowrap;
  @media screen and (min-width: 48rem) {
    position: static;
    padding-top: 1rem;
  }
`;

const FilterContent = styled.p`
  margin: 0;
  white-space: nowrap;
`;

class Filters extends Component {
  state = {
    activeFilter: undefined,
  };

  handleFilterToggle = (filterName, toggledOn) => {
    if (toggledOn) {
      this.setState({ activeFilter: filterName });
    } else {
      this.setState({ activeFilter: undefined });
    }
    this.props.onToggle(toggledOn);
  };

  render() {
    return (
      <Background>
        <div className="container">
          <FiltersStyled>
            <div>
              {['Category', 'Colour', 'Size'].map(filterName =>
                (<Filter
                  title={filterName}
                  onToggle={toggledOn => this.handleFilterToggle(filterName, toggledOn)}
                  isActive={
                    this.state.activeFilter !== undefined && this.state.activeFilter !== filterName
                  }
                >
                  <FilterContent>
                    Content content content content content content content<br />
                    content content content content content content content<br />
                    content content content content content content content<br />
                    content content content content content content content<br />
                    content content content content content content content<br />
                    content content content content content content content
                  </FilterContent>
                </Filter>),
              )}
            </div>
            <Filter
              title="Sort by price"
              rightSideAlign
              onToggle={toggledOn => this.handleFilterToggle('Sort by price', toggledOn)}
              isActive={
                this.state.activeFilter !== undefined && this.state.activeFilter !== 'Sort by price'
              }
            >
              <FilterContent>
                high or<br />
                low<br />
                it’s medium length of<br />
                content
              </FilterContent>
            </Filter>
          </FiltersStyled>
        </div>
      </Background>
    );
  }
}

Filters.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default Filters;
