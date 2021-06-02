//Author: Asadullah; Roll No: 18L-1008

import React, { Component } from "react";
import header_logo from "../Pics/ez_logo_head.svg";
import search_logo from "../Pics/search_logo2.png";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header class="hero">
          <div class="container">
            <div class="header">
              <div class="header_top">
                <div class="header_brand">
                  <img class="ez_logo" src={header_logo} alt="expertzone" />
                </div>
                <div class="header_search_bar">
                  <input
                    class="header_search"
                    type="text"
                    placeholder="Search products"
                  />
                  <button class="header_search_btn">
                    <img src={search_logo} alt="search_logo" />
                  </button>
                </div>
                <div class="cart_logo">cart</div>
              </div>
            </div>
          </div>
        </header>
        <div class="navbar">
          <div class="container con-nav">
            <ul class="nav_links">
              <li class="nav_link cat">
                <div class="nav_categories">
                  <div class="nav_categories_logo">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 122.88 95.95"
                      style={{ enableBackground: "new 0 0 122.88 95.95" }}
                    >
                      <g>
                        <path
                          class="st0"
                          d="M8.94,0h105c4.92,0,8.94,4.02,8.94,8.94l0,0c0,4.92-4.02,8.94-8.94,8.94h-105C4.02,17.88,0,13.86,0,8.94l0,0 C0,4.02,4.02,0,8.94,0L8.94,0z M8.94,78.07h105c4.92,0,8.94,4.02,8.94,8.94l0,0c0,4.92-4.02,8.94-8.94,8.94h-105 C4.02,95.95,0,91.93,0,87.01l0,0C0,82.09,4.02,78.07,8.94,78.07L8.94,78.07z M8.94,39.03h105c4.92,0,8.94,4.02,8.94,8.94l0,0 c0,4.92-4.02,8.94-8.94,8.94h-105C4.02,56.91,0,52.89,0,47.97l0,0C0,43.06,4.02,39.03,8.94,39.03L8.94,39.03z"
                        />
                      </g>
                    </svg>
                  </div>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;Categories</span>
                </div>
              </li>
              <li class="nav_link">
                <a id="active" href="#">
                  Home
                </a>
              </li>
              <li class="nav_link">
                <a href="#">Shop</a>
              </li>
              <li class="nav_link">
                <a href="#">Contact us</a>
              </li>
              <li class="nav_link">
                <a href="#">About us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
