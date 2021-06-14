import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home_page">
        <Header index={1} />
        <Home history={this.props.history} />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
