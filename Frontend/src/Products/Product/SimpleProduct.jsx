import React, { Component } from "react";
import "./SimpleProduct.css";

class SimpleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div class="SimpleProduct">
          <div class="ProductImg">
            <img class="click" src={this.props.product.img} />
          </div>
          <div class="ProductName">
            <div className="ez_product_name">
              <span
                style={{ width: "240px", height: "42px", padding: "0px 8px" }}
                title={this.props.product._name}
              >
                {this.props.product._name}
              </span>
            </div>
          </div>
          <div class="ProductPrice">
            <label>Rs. {this.props.product.price}</label>
          </div>
          <div class="buttonContainer">
            <div class="tooltipWishlist">
              <button class="wishlistButton" type="submit">
                <a class="fa fa-heart click"></a>
              </button>
              <span class="tooltiptextW">Wishlist</span>
            </div>
            <button class="AddToCart" type="submit">
              <a class="fa fa-shopping-cart mar click"></a>Add To Cart
            </button>
            <div class="tooltipSearch">
              <button class="searchButton" type="submit">
                <a class="fa fa-search click"></a>
              </button>
              <span class="tooltiptextS">View Product</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleProduct;
