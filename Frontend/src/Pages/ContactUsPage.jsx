//Author: Ayesha Azhar; RollNo: 18L-0983
import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Heading from "../ExtraComponents/Heading";
import ContactUs from "../ContactUs/ContactUs";
class ContactUsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="contact_us_page">
        <Header index={3} />
        <Heading heading="contact us" />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default ContactUsPage;
