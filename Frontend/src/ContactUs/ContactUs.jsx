//Author: Ayesha Azhar; RollNo: 18L-0983
import React, { Component } from "react";
import "./ContactUs.css";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="container">
        <div className="contactus_con">
          <div class="Instruction_box">
            <p>Enter your email address to subscribe</p>
            <br />

            <div class="Subscription_field">
              <input type="text" class="field" id="email" />
            </div>
            <div class="button_container">
              <button class="Subscribe_button">Subscribe</button>
            </div>
          </div>
          <div class="Address_Container">
            <p class="Address_info">
              <b>ADDRESS</b>
              <br />
              Office 14
              <br />
              5th Floor
              <br />
              Gold Mine Plaza
              <br />
              105-Ferozpur Road Lahore
            </p>
            <p class="Address_info">
              <b>INFORMATION</b>
              <br />
              Email:expertzone8@gmail.com
              <br />
              Phone No: +92-333-4412876
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
