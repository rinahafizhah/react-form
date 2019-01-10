import React, { Component } from "react";

class TodoApp extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      todos: [
        {
          id: 0,
          text: "Sample todo"
        }
      ]
    };
  }

  handleTodoInput = event => {
    this.setState({ input: event.target.value });
  };

  handleTodoSubmit = event => {
    event.preventDefault();
    console.log("TODO SUBMITTED!", this.state.input);

    const newTodo = {
      id: this.state.todos.length,
      text: this.state.input
    };

    const newTodos = this.state.todos.concat(newTodo);

    this.setState({
      input: "",
      todos: newTodos
    });
  };

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <form onSubmit={this.handleTodoSubmit}>
          <input
            type="text"
            placeholder="What's interesting today?"
            onChange={this.handleTodoInput}
          />
          <input type="submit" value="Add Todo" />
        </form>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={index}>
                {todo.id}:{todo.text}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default TodoApp;
