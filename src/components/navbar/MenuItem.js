import React, { Component } from "react";
import PropTypes from "prop-types";

export default class MenuItem extends Component {
  getStyle = () => {
    return {
      background: this.props.item.selected ? "#7f84d9" : ""
    };
  };

  render() {
    const { id, title, link } = this.props.item;
    return (
      <li style={this.getStyle()}>
        <a href={link} onClick={this.props.selectMenuItem.bind(this, id)}>
          {title}
        </a>
      </li>
    );
  }
}

// PropTypes
MenuItem.propTypes = {
  item: PropTypes.object.isRequired
};
