//Author: M. Aadil Hassan; RollNo: 18L-1018

import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Heading from "../ExtraComponents/Heading";
import AboutUs from "../AboutUs/AboutUs";

class AboutUsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="about_us_page">
        <Header index={4} />
        <Heading heading="about us" />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default AboutUsPage;
