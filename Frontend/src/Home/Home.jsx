//Author: Asadullah; RollNo: 18L-1008

import React, { Component } from "react";
import Typical from "react-typical";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="front_page">
        <div className="container">
          <div className="front_main">
            <div className="typical_text_wrap">
              <Typical
                steps={[
                  "We provide high quality electronic products.",
                  4000,
                  "We provide excellent customer service.",
                  4000,
                ]}
                loop={Infinity}
                wrapper="front_main_heading"
              />
              <div className="shop_now_btn_wrap">
                <button
                  class="s_button learn-more"
                  onClick={() => {
                    this.props.history.push("/shop");
                  }}
                >
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="s_button-text">Shop now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
