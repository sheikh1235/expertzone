//Author: Asadullah; Roll No: 18L-1008

import React, { Component } from "react";
import ErrorMessage from "../ExtraComponents/ErrorMessage";
import "./Cart.css";
import CartProduct from "./CartProduct";
import products from "./CartProductList";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
    };
  }

  onQuantityChange = (id, qty) => {
    const updatedProducts = this.state.products.map((product) => {
      if (product.id === id) {
        product.quantity = parseInt(qty);
      }
      return product;
    });
    this.setState({
      products: updatedProducts,
    });
  };
  onProductDelete = (id) => {
    const updatedProducts = this.state.products.filter((product) => {
      return product.id !== id;
    });
    console.log(updatedProducts);
    this.setState({
      products: updatedProducts,
    });
  };

  render() {
    if (this.state.products.length > 0) {
      let Subtotal = 0,
        Discount = 0;
      for (let i = 0; i < this.state.products.length; ++i) {
        Subtotal +=
          this.state.products[i].quantity * this.state.products[i].price;
        Discount +=
          this.state.products[i].discount * this.state.products[i].quantity;
      }
      let totalPrice = Subtotal - Discount;
      return (
        <div className="container">
          <div className="cart_summary">
            <div className="cart_table_wrap">
              <table className="cart_table">
                <thead>
                  <tr>
                    <th className="cart_table_heading">
                      <span>&nbsp;</span>
                    </th>
                    <th className="cart_table_heading">
                      <span>Product</span>
                    </th>
                    <th className="cart_table_heading">
                      <span>Descrpition</span>
                    </th>
                    <th className="cart_table_heading">
                      <span>Price</span>
                    </th>
                    <th className="cart_table_heading">
                      <span>Quantity</span>
                    </th>
                    <th className="cart_table_heading">
                      <span>Subtotal</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.products.map((product) => {
                    return (
                      <CartProduct
                        product={product}
                        onQuantityChange={this.onQuantityChange}
                        onProductDelete={this.onProductDelete}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="cart_total_wrap">
              <table className="cart_total">
                <tbody>
                  <tr>
                    <td>
                      <div className="cart_total_sub">
                        <span>Subtotal:</span>
                      </div>
                    </td>

                    <td>
                      <div className="cart_total_res">
                        <span>Rs. {Subtotal}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="cart_total_sub">
                        <span>Discount:</span>
                      </div>
                    </td>

                    <td>
                      <div className="cart_total_res">
                        <span id="discount">Rs. -{Discount}</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="cart_total_sub">
                        <span>Total:</span>
                      </div>
                    </td>

                    <td>
                      <div className="cart_total_res">
                        <span className="total">Rs. {totalPrice}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="proceed_to_checkout">
                <button id="b1" type="submit">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <ErrorMessage message="Your cart is empty add items to your cart to proceed to checkout" />
      );
    }
  }
}

export default Cart;
