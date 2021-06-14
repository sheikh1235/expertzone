// Author: Asadullah; Roll No. 18L-1008.

import React, { Component } from "react";
import "./CartProduct.css";
class CartProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.product.quantity,
    };
  }
  quantityHandler = (e) => {
    if (e.target.value >= 1) {
      this.setState({
        quantity: e.target.value,
      });
      this.props.onQuantityChange(this.props.product.id, e.target.value);
    }
  };

  render() {
    return (
      <tr class="cart_product_tr">
        <td class="cart_product">
          <div className="trash_can_icon">
            <i
              onClick={() => {
                this.props.onProductDelete(this.props.product.id);
              }}
              id="trash_can"
              class="fa fa-trash"
            ></i>
          </div>
        </td>
        <td class="cart_product">
          <div className="cart_product_thumb">
            <img src={this.props.product.img} alt={this.props.product.id} />
          </div>
        </td>
        <td class="cart_product">
          <div id="cart_product_name_id" className="cart_product_name">
            <span>{this.props.product.desc}</span>
          </div>
        </td>
        <td class="cart_product">
          <div className="cart_product_price">
            <span>Rs. {this.props.product.price}</span>
          </div>
        </td>
        <td class="cart_product">
          <div className="cart_product_quantity">
            <div className="qty_range">
              <input
                type="number"
                value={this.props.product.quantity}
                onChange={this.quantityHandler}
              />
            </div>
          </div>
        </td>
        <td class="cart_product">
          <div className="cart_product_price">
            <span>
              Rs. {this.props.product.price * this.props.product.quantity}
            </span>
          </div>
        </td>
      </tr>
    );
  }
}

export default CartProduct;
