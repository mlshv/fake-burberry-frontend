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
  constructor(props) {
    super(props);
    this.handleFilterToggle = this.handleFilterToggle.bind(this);
  }

  state = {
    activeFilter: undefined,
    dimInactiveFilters: false,
  };

  handleFilterToggle(filterId, toggledOn) {
    if (toggledOn) {
      this.setState({ activeFilter: filterId });
    } else {
      this.setState({ activeFilter: undefined });
    }
    this.props.onToggle(toggledOn);
  }

  render() {
    return (
      <Background>
        <div className="container">
          <FiltersStyled>
            <div>
              {['Category', 'Colour', 'Size'].map((category, index) =>
                (<Filter
                  title={category}
                  onToggle={toggledOn => this.handleFilterToggle(index, toggledOn)}
                  dimmed={
                    this.state.activeFilter !== undefined && this.state.activeFilter !== index
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
              onToggle={toggledOn => this.handleFilterToggle(3, toggledOn)}
              dimmed={this.state.activeFilter !== undefined && this.state.activeFilter !== 3}
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
