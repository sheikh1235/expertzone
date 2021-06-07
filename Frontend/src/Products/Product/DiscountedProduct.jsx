import React, { Component } from "react";
import "./DiscountedProduct.css";

class DiscountedProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const afterDiscount =
      this.props.product.price - this.props.product.discount;
    return (
      <div>
        <div class="DiscountedProduct">
          <div class="ProductImg">
            <label class="onsale">SALE!</label>
            <img class="Img" src={this.props.product.img} />
          </div>
          <div class="ProductName">
            <div className="ez_product_name">
              <span
                style={{ width: "240px", height: "42px", padding: "0px 8px" }}
              >
                {this.props.product._name}
              </span>
            </div>
          </div>
          <div class="ProductPrice">
            <label class="BeforeDiscountPrice mar">
              <del>Rs. {this.props.product.price}</del>
            </label>
            <label>Rs. {afterDiscount}</label>
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

export default DiscountedProduct;
