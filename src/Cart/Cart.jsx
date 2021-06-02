//Author: Asadullah; Roll No: 18L-1008

import React, { Component } from "react";
import "./Cart.css";
import products from "./CartProductList";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let product = products[0];
    return (
      <div>
        <div className="page_header_con">
          <div className="container">
            <h1 className="page_heading">Cart summary</h1>
          </div>
        </div>

        <div className="container">
          <div className="cart_summary">
            <div className="cart_table_wrap">
              <table className="cart_table">
                <thead>
                  <tr>
                    <th className="cart_table_heading">&nbsp;</th>
                    <th className="cart_table_heading">Product</th>
                    <th className="cart_table_heading">Descrpition</th>
                    <th className="cart_table_heading">Price</th>
                    <th className="cart_table_heading">Quantity</th>
                    <th className="cart_table_heading">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="cart_product">
                    <td class="cart_product">
                      <div className="trash_can_icon">
                        <i id="trash_can" class="fa fa-trash"></i>
                      </div>
                    </td>
                    <td class="cart_product">
                      <div className="cart_product_thumb">
                        <img src={product.img} alt={product.id} />
                      </div>
                    </td>
                    <td class="cart_product">
                      <div className="cart_product_name">
                        <span>{product.desc}</span>
                      </div>
                    </td>
                    <td class="cart_product">
                      <div className="cart_product_price">
                        <span>PKR {product.price}</span>
                      </div>
                    </td>
                    <td class="cart_product">
                      <div className="cart_product_quantity">
                        <span>{product.quantity}</span>
                      </div>
                    </td>
                    <td class="cart_product">
                      <div className="cart_product_sub">
                        <span>PKR {product.price * product.quantity}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
