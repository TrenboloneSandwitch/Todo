import React, { Component } from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

export default class Menu extends Component {
  render() {
    return (
      <ul className="navbar__menu">
        {this.props.menu.map(item => (
          <MenuItem
            key={item.id}
            item={item}
            selectMenuItem={this.props.selectMenuItem}
          />
        ))}
      </ul>
    );
  }
}

// PropTypes
Menu.propTypes = {
  menu: PropTypes.array.isRequired
};
