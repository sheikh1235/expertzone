//Author: Izna Zubair; RollNo: 18L-0901
import React, { Component } from "react";
import "./MyCheckout.css";

const product = {
  id: 1,
  _name:
    "TP4056 1A Li-ion Charging Module TP4056 1A Li-ion Charging Module TP4056 1A Li-ion Charging Module",
  img: "https://static-01.daraz.pk/p/d73f2f6363b9b65f53c858359b65cdbf.jpg",
  price: 200,
  beforeDiscount: 0,
};

class MyCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: product,
    };
  }
  render() {
    return (
      <div class="container">
        <div class="myCheckout-box">
          <div class="myCheckout-heading">
            <label>
              BILLING DETAILS{" "}
              <label class="myCheckout-mar">Returning Customer?</label>
              <label class="myCheckout-loginHeading">
                <a>Click Here To Login</a>
              </label>{" "}
            </label>
            <hr class="myCheckout-hr" />
          </div>
          <br />

          <div class="myCheckout-innerDiv">
            <label class="myCheckout-subheading">
              First name <label class="myCheckout-required">*</label>
            </label>
            <br />
            <input class="myCheckout-text" id="fname" name="firstname" />
          </div>
          <div class="myCheckout-innerDiv innerDiv-margin">
            <label class="myCheckout-subheading">
              Last name <label class="myCheckout-required">*</label>
            </label>
            <br />
            <input class="myCheckout-text" id="lname" name="lastname" />
          </div>

          <br />

          <div class="myCheckout-innerDiv">
            <br />
            <label class="myCheckout-subheading">
              City<label class="myCheckout-required">*</label>
            </label>
            <br />
            <select class="myCheckout-menu" name="cities" id="cities">
              <option value="select">----Select a city----</option>
              <option value="lahore">Lahore</option>
              <option value="karachi">Karachi</option>
              <option value="islamabad">Islamabad</option>
              <option value="quetta">Quetta</option>
            </select>
          </div>
          <div class="myCheckout-innerDiv innerDiv-margin">
            <br />
            <label class="myCheckout-subheading">
              Phone <label class="myCheckout-required">*</label>
            </label>
            <br />
            <input class="myCheckout-text" id="phone" name="phone" />
          </div>

          <br />

          <div class="myCheckout-innerDiv">
            <br />
            <label class="myCheckout-subheading">
              Address <label class="myCheckout-required">*</label>
            </label>
            <br />
            <input class="myCheckout-textLong" id="address" name="address" />
          </div>

          <br />

          <div class="myCheckout-innerDiv">
            <br />
            <label class="myCheckout-subheading">
              Email address <label class="myCheckout-required">*</label>
            </label>
            <br />
            <input
              class="myCheckout-textLong"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <br />

          <div class="myCheckout-innerDiv">
            <br />
            <label class="myCheckout-subheading">Order notes (optional)</label>
            <br />
            <textarea
              class="myCheckout-subheading myCheckout-textarea"
              rows="8"
              cols="75"
            >
              Notes about your order, e.g. special notes for delivery.
            </textarea>
          </div>
        </div>

        <div class="myCheckout-box box-margin">
          <div class="myCheckout-heading">
            <label>
              YOUR ORDER
              <label class="myCheckout-marr">Have A Coupon?</label>
              <label class="myCheckout-loginHeading">
                <a> Click Here To Enter Your Code</a>
              </label>
            </label>
            <hr class="myCheckout-hr" />
          </div>
          <br />
          <label>
            <table class="table-style">
              <tr class="table-heading table-styleInside">
                <th class="table-left table-styleInside">PRODUCT</th>
                <th class="table-right table-styleInside table-colWidth">
                  SUBTOTAL
                </th>
              </tr>
              <tr class="table-styleInside">
                <td class="table-product table-left table-styleInside">
                  {this.state.product._name}
                </td>
                <td class="table-price table-right table-styleInside">
                  Rs. {this.state.product.price}
                </td>
              </tr>
              <tr class="table-styleInside">
                <td class="table-smallfont table-left table-styleInside">
                  Subtotal
                </td>
                <td class="table-price table-right table-styleInside">
                  Rs. 130
                </td>
              </tr>
              <tr class="table-styleInside">
                <td class="table-smallfont table-left table-styleInside">
                  Shipping
                </td>
                <td class="table-price table-right table-styleInside">
                  Rs. 100
                </td>
              </tr>
              <tr>
                <td class="table-smallfont table-left table-styleInside">
                  Total
                </td>
                <td class="table-boldprice table-right table-styleInside">
                  Rs. 130
                </td>
              </tr>
            </table>
          </label>
          <br />
          <div>
            <label class="myCheckout-cashOn">
              ** Cash On Delivery (pay with cash upon delivery)
            </label>
          </div>
          <div>
            <button id="b1" type="submit">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default MyCheckout;
