import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Heading from "../ExtraComponents/Heading";
import Products from "../Products/Products";
class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ez_Shop_page">
        <Header index={2} />
        <Heading heading="Shop > ALl products" />
        <Products />
        <Footer />
      </div>
    );
  }
}

export default ShopPage;
