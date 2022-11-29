import React, { Component } from "react";
import "./Todo.css";
import NewTodo from "./NewTodo"
class Todo extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h3>My ToDo List</h3>
          <div className="todo-input">
            <NewTodo/>
          </div>
          <div className="todo" id="todoContainer"></div>
        </div>
      </div>
    );
  }
}

export default Todo;
