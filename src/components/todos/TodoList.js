import React, { Component } from "react";
import Todo from "./Todo";

import "./todos.css";

export default class TodoList extends Component {
  render() {
    return (
      <div className="grid-container">
        {this.props.todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            textOnChange={this.props.textOnChange}
          />
        ))}
      </div>
    );
  }
}
