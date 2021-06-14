//Author: Asadullah; RollNo: 18L-1008

import React, { Component } from "react";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Heading from "../ExtraComponents/Heading";

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cart_page">
        <Header index={0} />
        <Heading heading="cart summary" />
        <Cart />
        <Footer />
      </div>
    );
  }
}

export default CartPage;
