import React, { Component } from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import Button from '../../common/SmallButton';

const FiltersStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: .5625rem;
  overflow-y: auto;
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

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;

class Filters extends Component {
  constructor(props) {
    super(props);
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  state = {
    activeFilter: -1,
  };

  handleFilterClick(filterId) {
    if (filterId === this.state.activeFilter) {
      this.setState({ activeFilter: -1 });
    } else {
      this.setState({ activeFilter: filterId });
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
                handleClick={() => {
                  this.handleFilterClick(index);
                }}
                active={this.state.activeFilter === index}
              >
                <FilterContent>
                  Content content content content content content content<br />
                  content content content content content content content<br />
                  content content content content content content content<br />
                  content content content content content content content<br />
                  content content content content content content content<br />
                  content content content content content content content
                </FilterContent>
                <Buttons>
                  <Button>Clear</Button>
                  <Button primary>Show results</Button>
                </Buttons>
              </Filter>),
            )}
          </span>
        </div>
        <Filter
          title="Sort by price"
          rightSideAlign
          handleClick={() => {
            this.handleFilterClick(3);
          }}
          active={this.state.activeFilter === 3}
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
