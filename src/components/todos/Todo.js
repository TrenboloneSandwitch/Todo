import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <header>
          <input
            className="input-header"
            type="text"
            value={this.props.todo.title}
            onChange={this.props.textOnChange.bind(this, this.props.todo.id)}
          />
          <button>x</button>
        </header>
        <div>
          {this.props.todo.tasks.map(task => (
            <TodoItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    );
  }
}
