import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    return (
      <p>
        <input type="checkbox" /> {this.props.task.desc}
      </p>
    );
  }
}
