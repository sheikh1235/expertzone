//Author: M. Aadil Hassan; RollNo: 18L-1018

import React, { Component } from "react";
import "./AboutUs.css";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="container">
        <div className="about_us_wrap">
          <div class="ab_inner_heading">Our Company</div>
          <div class="ab_text_wrap">
            <p class="ab_inner_text">
              eXpert Zone sells high quality electronic products as well as
              modern electronic devices and computer parts, namely: electrical
              cicuitry and parts, code readers and scan tools, computer power
              cards and adapter and much more.
            </p>
          </div>
          <div class="ab_features">
            <p class="ab_features_text">* Top quality products</p>
            <p class="ab_features_text">* Best customer service</p>
            <p class="ab_features_text">* 100 percent money back guaranteed</p>
          </div>
          <div class="ab_inner_heading">Head Office</div>
          <div class="ab_text_wrap">
            <p class="ab_inner_text">
              Office 14, 5th Floor, Gold Mine Plaza, 105-Ferozpur Road Lahore.
            </p>
          </div>
          <div class="ab_inner_heading">Sub Office</div>
          <div class="ab_text_wrap">
            <p class="ab_inner_text">
              1-Nicholson Road, Saqib Chamber, Qilah Gujar Singh, Lahore Hotel.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
