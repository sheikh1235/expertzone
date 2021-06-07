import React, { Component } from "react";
import SimpleProduct from "./SimpleProduct";
import DiscountedProduct from "./DiscountedProduct";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let renderedComponent;
    if (this.props.product.discount == 0) {
      renderedComponent = <SimpleProduct product={this.props.product} />;
    } else {
      renderedComponent = <DiscountedProduct product={this.props.product} />;
    }

    return <div>{renderedComponent}</div>;
  }
}

export default Product;
