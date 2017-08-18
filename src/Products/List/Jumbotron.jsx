/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Filters from './Filters';

const JumbotronStyled = styled.div`
  padding-top: 2rem;
  background: #f3f3f3;
  margin-bottom: 2rem;
  @media screen and (min-width: 48rem) {
    margin-bottom: 4rem;
    padding-top: 4rem;
  }
`;

const Title = styled.h1`
  margin-top: 0;
  font-size: 1.625rem;
  line-height: 1.33;
  @media screen and (min-width: 48rem) {
    line-height: 1.25;
    margin-bottom: 1rem;
  }
`;

const Text = styled.p`
  margin: 0;
  padding: 0 .5rem;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.67;
  color: #171717;
  @media screen and (min-width: 48rem) {
    padding: 0;
    line-height: 1.7;
  }
  u {
    text-decoration: none;
    border-bottom: 1px solid #171717;
  }
`;

const ExpandTextButton = styled.button`
  padding: 0;
  margin-left: .5rem;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-weight: 500;
  border: none;
  border-bottom: 1px solid #171717;
  background: transparent;
  color: #171717;
  cursor: pointer;
`;

class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.maxShowedTextLength = 194;
    this.state = {
      ellipsizeText: true,
    };
    this.expandText = this.expandText.bind(this);
  }

  expandText() {
    this.setState(() => ({
      ellipsizeText: false,
    }));
  }

  render() {
    let text = { __html: this.props.text };
    if (this.props.text.length > this.maxShowedTextLength && this.state.ellipsizeText) {
      text = { __html: `${this.props.text.slice(0, this.maxShowedTextLength)}...` };
    }
    return (
      <JumbotronStyled>
        <div className="container">
          <Title>
            {this.props.title}
          </Title>
          <div className="row">
            <div className="col-md-9 col-lg-7">
              <Text>
                <span dangerouslySetInnerHTML={text} />
                {this.props.text.length > this.maxShowedTextLength &&
                  this.state.ellipsizeText &&
                  <ExpandTextButton onClick={this.expandText}>More</ExpandTextButton>}
              </Text>
            </div>
          </div>
          <Filters />
        </div>
      </JumbotronStyled>
    );
  }
}

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Jumbotron;
