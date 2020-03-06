import React, { Component } from "react";
import PropTypes from "prop-types";
import Menu from "./Menu";

import "./navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h1 className="navbar__brand">NOTES</h1>
        <Menu
          menu={this.props.menu}
          selectMenuItem={this.props.selectMenuItem}
        />
      </nav>
    );
  }
}

export default Navbar;

// PropTypes
Navbar.propTypes = {
  menu: PropTypes.array.isRequired
};
