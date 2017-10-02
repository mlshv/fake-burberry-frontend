import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import breakpoints from '../../common/breakpoints';
import PriceAndId from './PriceAndId';
import Button from '../../common/Button';
import ColorButton from './ColorButton';
import Size from './Size';
import SizeSelector from './SizeSelector';
import SizeButton from './SizeButton';

const MainPanelStyled = styled.section`
  margin-top: 1rem;
  padding-bottom: 3rem;
  @media screen and (min-width: 48rem) {
    margin-top: 0;
  }
`;

const Title = styled.h1`
  margin: 1rem .5rem;
  margin-left: .5rem;
  padding: 0;
  font-size: 1.25rem;
  line-height: 1.2;
  @media screen and (min-width: 48rem) {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    margin-left: 0;
  }
  @media screen and (min-width: 62rem) {
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: .5rem;
  }
`;

const ColorName = styled.p`
  margin: 0;
  margin-top: 1rem;
  margin-left: .5rem;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1rem;
  @media screen and (min-width: 48rem) {
    margin-top: 0;
  }
  @media screen and (min-width: 62rem) {
    margin: 0;
  }
`;

const ColorButtons = styled.div`
  margin-top: 1rem;
  @media screen and (min-width: 62rem) {
    margin: 0;
    margin-bottom: .5rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: .5rem;
  @media screen and (min-width: 48rem) {
    margin-left: 0rem;
    margin-right: 0rem;
  }
  @media screen and (min-width: 62rem) {
    margin-top: 0;
  }
`;

const TextButton = Button.extend`
  margin-top: 1.5rem;
  margin-bottom: 1px;
  padding: 0;
  padding-top: 1px;
  text-align: left;
  border: none;
  color: #171717;
  background: transparent;
  cursor: pointer;

  @media screen and (min-width: 62rem) {
    flex-basis: 70%;
    margin-top: 0;
    text-align: right;
  }
`;

const DeliveryTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: .25rem;
  line-height: .875rem;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-weight: bold;
`;

const DeliveryText = styled.p`
  margin: 0;
  line-height: 1.35;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
`;

const Divider = styled.hr`
  margin-top: 2rem;
  border: none;
  border-bottom: 1px solid #c6c6c6;
  @media screen and (min-width: 62rem) {
    display: none;
  }
`;

class MainPanel extends Component {
  state = {
    selectedSize: 0,
    selectedColor: 0,
  };

  selectColor = (selectedColor) => {
    this.setState({ selectedColor });
  };

  selectSize = (selectedSize) => {
    this.setState({ selectedSize });
  };

  render() {
    return (
      <MainPanelStyled>
        <MediaQuery minWidth={breakpoints.lg}>
          <Title>Lightweight Grainy Nubuck Trench Coat</Title>
        </MediaQuery>
        <PriceAndId />
        <div className="row">
          <div className="col-lg-6">
            <ColorName>
              Colour: <b>{this.props.colors[this.state.selectedColor].name}</b>
            </ColorName>
          </div>
          <MediaQuery minWidth={breakpoints.lg}>
            <div className="col-lg-6">
              <Size>
                {this.props.sizes[this.state.selectedSize]}
              </Size>
            </div>
          </MediaQuery>
        </div>
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <ColorButtons>
              {this.props.colors.map((color, index) =>
                (<ColorButton
                  name={color.name}
                  value={color.value}
                  onClick={() => {
                    this.selectColor(index);
                  }}
                  isActive={this.state.selectedColor === index}
                />),
              )}
            </ColorButtons>
            <Divider />
          </div>
          <MediaQuery minWidth={breakpoints.lg}>
            <div className="col-lg-6">
              {this.props.sizes.map((size, index) =>
                (<SizeButton
                  isActive={index === this.state.selectedSize}
                  onClick={() => this.selectSize(index)}
                >
                  {size}
                </SizeButton>),
              )}
            </div>
          </MediaQuery>
        </div>
        <MediaQuery maxWidth={breakpoints.lg - 1}>
          <ButtonWrapper>
            <SizeSelector sizes={this.props.sizes} />
            <Button type="button">Find in store</Button>
          </ButtonWrapper>
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.lg}>
          <div className="row">
            <div className="col-lg-6">
              <ButtonWrapper>
                <Button primary type="button">
                  Add to bag
                </Button>
              </ButtonWrapper>
            </div>
            <div className="col-lg-6">
              <ButtonWrapper>
                <Button type="button">Find in store</Button>
              </ButtonWrapper>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={breakpoints.lg - 1}>
          <TextButton type="button">Need size help?</TextButton>
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.lg}>
          <DeliveryTitle>Free Next Day Delivery</DeliveryTitle>
          <DeliveryText>Order before 7pm Monday to Thursday for delivery the next Day</DeliveryText>
        </MediaQuery>
      </MainPanelStyled>
    );
  }
}

MainPanel.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MainPanel;
