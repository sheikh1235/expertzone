//Author: Asadullah; Roll No: 18L-1008

import React, { Component } from "react";
import footer_logo from "../Pics/ez_logo_foot.svg";
import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <footer class="ez_footer">
          <div class="container">
            <div class="footer_content">
              <div class="footer_logo">
                <img
                  src={footer_logo}
                  alt="expertzone logo"
                  class="ez_logo_foot"
                />
              </div>
              <div class="footer_desc">
                <div class="footer_list_wrap">
                  <span class="footer_head">My Account</span>
                  <ul class="footer_list">
                    <li class="footer_link">
                      <a href="">My Account</a>
                    </li>
                    <li class="footer_link">
                      <a href="">My Wishlist</a>
                    </li>
                    <li class="footer_link">
                      <a href="">My Cart</a>
                    </li>
                  </ul>
                </div>
                <div class="footer_list_wrap">
                  <span class="footer_head">Products Tags</span>
                  <ul class="footer_list">
                    <li class="footer_link">
                      <a href="">Computer</a>
                    </li>
                    <li class="footer_link">
                      <a href="">Camera</a>
                    </li>
                    <li class="footer_link">
                      <a href="">Smart phone</a>
                    </li>
                  </ul>
                </div>
                <div class="footer_list_wrap">
                  <span class="footer_head">Contact us</span>
                  <ul class="footer_list contact_list">
                    <li class="contact_us">
                      <div class="contanct_item">
                        <i id="ez_lg" class="fa fa-home" aria-hidden="true"></i>
                        <span>
                          &nbsp;Office 14, 5th Floor, Gold Mine Plaza,
                          105-Ferozpur Road Lahore
                        </span>
                      </div>
                    </li>

                    <li class="contact_us">
                      <div class="contanct_item">
                        <i
                          id="ez_lg"
                          class="fa fa-phone"
                          aria-hidden="true"
                        ></i>
                        <span>&nbsp;Phone No: +92-333-4412876</span>
                      </div>
                    </li>
                    <li class="contact_us">
                      <div class="contanct_item">
                        <i
                          id="ez_lg"
                          class="fa fa-envelope"
                          aria-hidden="true"
                        ></i>
                        <span>&nbsp;E-mail: expertzone8@gmail.com</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div class="copyright">
          <div class="container">
            <span class="copyright_text">@Copyright 2021 </span>
            <span class="copyright_text green"> Expert Zone </span>
            <span class="copyright_text">
              - All Rights Reserved. Design & Developed by
            </span>
            <span class="copyright_text green"> Team 1 </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
