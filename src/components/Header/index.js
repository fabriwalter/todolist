import React, { Component } from "react";

import './Header.css';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      headline: this.props.headline,
      subheading: this.props.subheading
    };
  }

  render() {
    return(
      <div className="header">
        <h1>{this.state.headline}</h1>
        <h6>{this.state.subheading}</h6>
      </div>
    );
  }
}

export default Header;