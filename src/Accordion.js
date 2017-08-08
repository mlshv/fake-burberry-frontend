import React, { Component } from 'react';

class Accordion extends Component {
  render() {
    return (
      <section className={"accordion "
                          + (this.props.active ? "accordion-active" : "")
                          + (this.props.hideTitleMd && this.props.noTopBorder ? "product-accordion-shipping" : "")}>
        <button className="accordion-btn-toggle" type="button">
          <h2 className="accordion-title">{this.props.title}</h2>
        </button>
        <div className="accordion-content">
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default Accordion;
