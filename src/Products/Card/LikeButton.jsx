import React, { Component } from 'react';
import styled from 'styled-components';
import HeartIcon from '../../common/HeartIcon';

const LikeButtonStyled = styled.button`
  padding: 0;
  border: 0;
  outline: none;
  background: none;
  cursor: pointer;
`;

class LikeButton extends Component {
  state = {
    isActive: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    return (
      <LikeButtonStyled onClick={this.toggle}>
        <HeartIcon {...(this.state.isActive ? { fill: '#171717' } : '')} />
      </LikeButtonStyled>
    );
  }
}

export default LikeButton;
