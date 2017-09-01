import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonSelectStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: .5rem;
  border: 1px solid #171717;
  border-radius: 2px;
`;

const Select = styled.select`
  padding: .875rem;
  font-size: .75rem;
  line-height: 1.33;
  opacity: 0;
`;

const Button = styled.div`
  position: absolute;
  top: 1rem;
  left: 0;
  width: 100%;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: .75rem;
  line-height: 1.33;
  text-align: center;
`;

class ButtonSelect extends Component {
  state = {
    selectedValue: 0,
  };

  handleSelectChange = (event) => {
    this.setState({ selectedValue: event.target.selectedIndex });
  };

  render() {
    return (
      <ButtonSelectStyled>
        <Button>
          {this.props.options[this.state.selectedValue]}
        </Button>
        <Select onChange={this.handleSelectChange}>
          {this.props.options.map(option =>
            (<option>
              {option}
            </option>),
          )}.
        </Select>
      </ButtonSelectStyled>
    );
  }
}

ButtonSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ButtonSelect;
