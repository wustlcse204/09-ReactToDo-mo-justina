import React, { Component } from "react";
import "./NewTodo.css";

class NewTodo extends Component {
  render() {
    return (
      <form id="addTodo">
        <input
          type="text"
          name="todo-input"
          id="todo-input"
          placeholder="Add text..."
        />
        <input
          type="submit"
          className="btn btn-primary"
          name="submit"
          value="Add"
        />
      </form>
    );
  }
}

export default NewTodo;
