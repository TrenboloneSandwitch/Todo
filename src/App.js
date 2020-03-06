import React, { Component } from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import TodoList from "./components/todos/TodoList";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Todo 1",
        tasks: [
          {
            id: 0,
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            isCompleted: false
          },
          {
            id: 1,
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            isCompleted: false
          }
        ]
      },
      {
        id: 2,
        title: "Todo 2 yeah",
        tasks: [
          {
            id: 0,
            desc: "Sed convallis magna eu sem.",
            isCompleted: false
          }
        ]
      },
      {
        id: 3,
        title: "Todo 2 yeah",
        tasks: [
          {
            id: 0,
            desc: "Sed convallis magna eu sem.",
            isCompleted: false
          }
        ]
      },
      {
        id: 4,
        title: "Todo 2 yeah",
        tasks: [
          {
            id: 0,
            desc: "Sed convallis magna eu sem.",
            isCompleted: false
          }
        ]
      }
    ],
    menu: [
      {
        id: 0,
        title: "Home",
        link: "/",
        selected: true
      },
      {
        id: 1,
        title: "About",
        link: "/about",
        selected: false
      }
    ]
  };

  selectMenuItem = (id, e) => {
    this.setState({
      menu: this.state.menu.map(item => {
        item.selected = item.id === id ? true : false;
        return item;
      })
    });
    e.preventDefault();
  };

  textOnChange = (id, e) => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === id ? { ...todo, title: e.target.value } : todo
      )
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar menu={this.state.menu} selectMenuItem={this.selectMenuItem} />
        <TodoList todos={this.state.todos} textOnChange={this.textOnChange} />
      </div>
    );
  }
}

export default App;
