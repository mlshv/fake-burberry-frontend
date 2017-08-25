import React, { Component } from 'react';
import styled from 'styled-components';
import Filter from './Filter';

const FiltersStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: .5625rem;
  white-space: nowrap;
  @media screen and (min-width: 48rem) {
    margin-top: 1rem;
  }
`;

const Hint = styled.div`
  display: inline-block;
  margin-right: 2rem;
  padding: 1.5rem 0;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: .66;
  color: #171717;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const FilterContent = styled.p`margin: 0;`;

class Filters extends Component {
  constructor(props) {
    super(props);
    this.handleFilterToggle = this.handleFilterToggle.bind(this);
  }

  state = {
    activeFilter: -1,
    dimInactiveFilters: false,
  };

  handleFilterToggle(filterId, toggledOn) {
    if (toggledOn) {
      this.setState({ activeFilter: filterId, dimInactiveFilters: true });
    } else {
      this.setState({ activeFilter: -1, dimInactiveFilters: false });
    }
  }

  render() {
    return (
      <FiltersStyled>
        <div>
          <Hint>Refine by</Hint>
          <span>
            {['Category', 'Colour', 'Size'].map((category, index) =>
              (<Filter
                title={category}
                onToggle={toggledOn => this.handleFilterToggle(index, toggledOn)}
                dimmed={this.state.activeFilter !== index && this.state.dimInactiveFilters}
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
          </span>
        </div>
        <Filter
          title="Sort by price"
          rightSideAlign
          onToggle={toggledOn => this.handleFilterToggle(3, toggledOn)}
          dimmed={this.state.activeFilter !== 3 && this.state.dimInactiveFilters}
        >
          <FilterContent>
            high or<br />
            low<br />
            it’s medium length of<br />
            content
          </FilterContent>
        </Filter>
      </FiltersStyled>
    );
  }
}
export default Filters;
